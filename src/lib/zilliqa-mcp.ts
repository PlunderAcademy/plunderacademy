/**
 * Zilliqa Insights MCP Server Integration
 * 
 * Connects to the Zilliqa Insights MCP server for real-time validator data.
 * See: https://github.com/Zilliqa/insights-mcp-server
 * 
 * MCP Server Tools:
 * - listValidators() - Lists all validators with metadata (name, public_key, address, zil_address)
 * - getTotalValidatorEarnings(validator, startTime?, endTime?) - Total ZIL rewards
 * - getValidatorEarningsBreakdown(validator, startTime?, endTime?) - Earnings by type
 * - getValidatorStake(validator) - ZIL delegated to validator
 * - getProposerSuccessRate(validator, startTime?, endTime?) - Block proposal success
 * - getCosignerSuccessRate(validator, startTime?, endTime?) - Cosigning success
 * - getTopValidatorsByEarnings(startTime?, endTime?, limit?) - Top earners
 * - getTopValidatorsByStake(startTime?, endTime?, limit?) - Top by stake
 * - getTopProposerSuccessRate(startTime?, endTime?, limit?) - Top proposers
 * - getTopCosignerSuccessRate(startTime?, endTime?, limit?) - Top cosigners
 * 
 * Custom Composite Tools (built on top of MCP):
 * - getValidatorAPR(startTime?, endTime?, limit?) - Effective APR = (earnings/stake) annualized
 */

import { experimental_createMCPClient as createMCPClient } from "@ai-sdk/mcp";

// ============================================================================
// Configuration
// ============================================================================
const ZILLIQA_MCP_URL = "https://insights.mcp.zilliqa.com/mcp";

// ============================================================================
// Validator Cache & Mapping
// ============================================================================
// Dynamic validator cache populated from listValidators() MCP call
interface ValidatorInfo {
  name: string;
  public_key: string;
  address: string;
  zil_address: string;
}

let validatorCache: ValidatorInfo[] = [];
let validatorCacheTime = 0;
const VALIDATOR_CACHE_TTL = 5 * 60 * 1000; // 5 minutes

// Fallback nickname mappings (used if listValidators fails)
// Based on: https://github.com/Zilliqa/zq2-staking/blob/main/src/misc/stakingPoolsConfig.ts
const VALIDATOR_NICKNAMES: Record<string, string> = {
  // PlunderSwap
  'plunderswap': 'PlunderSwap',
  'plunder': 'PlunderSwap',
  'plunder swap': 'PlunderSwap',
  
  // torchwallet.io
  'torchwallet': 'torchwallet.io',
  'torch': 'torchwallet.io',
  'torch wallet': 'torchwallet.io',
  
  // Exchanges
  'binance': 'Binance',
  'htx': 'HTX',
  'huobi': 'HTX',
  
  // Wallets
  'moonlet': 'Moonlet',
  
  // Staking providers
  'stakeshark': 'StakeShark',
  'stake shark': 'StakeShark',
  'citadel': 'Citadel.one',
  'citadel.one': 'Citadel.one',
  'citadelone': 'Citadel.one',
  'stakin': 'Stakin',
  'rockx': 'RockX',
  'rock x': 'RockX',
  'pathrock': 'PathrockNetwork',
  'pathrocknetwork': 'PathrockNetwork',
  'pathrock network': 'PathrockNetwork',
  'cryptech': 'Cryptech-Hacken',
  'hacken': 'Cryptech-Hacken',
  'cryptech-hacken': 'Cryptech-Hacken',
  'everstake': 'Everstake',
  'staked': 'Staked',
  
  // Community pools
  '2zilmoon': '2ZilMoon',
  'zilmoon': '2ZilMoon',
  'zil moon': '2ZilMoon',
  'avely': 'Amazing Pool',
  'zilpay': '2ZilMoon',
  'r3to': 'r3to',
  'amazing pool': 'Amazing Pool',
  'amazingpool': 'Amazing Pool',
  'zillet': 'Zillet',
};

/**
 * Find validator by name (case-insensitive) and return their info
 */
function findValidatorByName(name: string): ValidatorInfo | null {
  const lowercased = name.toLowerCase().trim();
  
  // First check the dynamic cache
  if (validatorCache.length > 0) {
    const found = validatorCache.find(v => 
      v.name.toLowerCase() === lowercased ||
      v.name.toLowerCase().includes(lowercased) ||
      lowercased.includes(v.name.toLowerCase())
    );
    if (found) return found;
  }
  
  return null;
}

/**
 * Normalize validator name using cache or fallback nicknames
 */
function normalizeValidatorName(name: string): string {
  // Try to find in cache first
  const cached = findValidatorByName(name);
  if (cached) return cached.name;
  
  // Fall back to static nicknames
  const lowercased = name.toLowerCase().trim();
  return VALIDATOR_NICKNAMES[lowercased] || name;
}


// ============================================================================
// MCP Client Cache
// ============================================================================
let mcpClient: Awaited<ReturnType<typeof createMCPClient>> | null = null;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let mcpTools: Record<string, any> | null = null;

// ============================================================================
// Custom Composite Tools
// ============================================================================

/**
 * Helper to execute an MCP tool and parse the JSON response
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function executeMCPTool(tools: Record<string, any>, toolName: string, args: Record<string, unknown>): Promise<any> {
  const tool = tools[toolName];
  if (!tool) {
    throw new Error(`Tool ${toolName} not found`);
  }
  
  const result = await tool.execute(args);
  
  // Parse the response
  let rawData = '';
  if (result?.content && Array.isArray(result.content)) {
    rawData = result.content
      .filter((c: { type: string; text?: string }) => c.type === 'text' && c.text)
      .map((c: { text: string }) => c.text)
      .join('\n');
  }
  
  const parsed = JSON.parse(rawData);
  if (parsed.status === 'success') {
    return parsed.data;
  }
  throw new Error(parsed.reason || 'MCP call failed');
}

/**
 * Create custom composite tools that combine multiple MCP calls
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createCustomTools(mcpTools: Record<string, any>): Record<string, any> {
  return {
    // Calculate effective APR for top validators
    'getValidatorAPR': {
      description: 'Calculate effective APR (Annual Percentage Rate) for validators by combining earnings and stake data. Returns validators ranked by APR performance.',
      parameters: {
        type: 'object',
        properties: {
          startTime: {
            type: 'string',
            description: 'Start time for earnings calculation (ISO 8601 format)'
          },
          endTime: {
            type: 'string',
            description: 'End time for earnings calculation (ISO 8601 format)'
          },
          limit: {
            type: 'number',
            description: 'Number of validators to return (default: 10)'
          }
        }
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      execute: async (args: { startTime?: string; endTime?: string; limit?: number }): Promise<any> => {
        const limit = args.limit || 10;
        const startTime = args.startTime;
        const endTime = args.endTime;
        
        console.log(`[MCP:APR] Calculating APR for top ${limit} validators...`);
        console.log(`[MCP:APR] Time range: ${startTime} to ${endTime}`);
        
        try {
          // Step 1: Get top validators by earnings for the period
          const earningsData = await executeMCPTool(
            mcpTools, 
            'get_top_validators_by_earnings', 
            { startTime, endTime, limit: Math.min(limit * 2, 30) } // Get more to filter
          );
          
          console.log(`[MCP:APR] Earnings API response message:`, earningsData?.message);
          console.log(`[MCP:APR] Sample earnings data:`, earningsData?.top_validators?.[0]);
          
          // Step 2: Get top validators by stake
          const stakeData = await executeMCPTool(
            mcpTools, 
            'get_top_validators_by_stake', 
            { startTime, endTime, limit: 50 } // Get all stakes for lookup
          );
          
          console.log(`[MCP:APR] Stake API response message:`, stakeData?.message);
          console.log(`[MCP:APR] Sample stake data:`, stakeData?.top_validators?.[0]);
          
          // Create stake lookup map
          const stakeLookup = new Map<string, number>();
          if (stakeData?.top_validators) {
            for (const v of stakeData.top_validators) {
              stakeLookup.set(v.name, v.total_stake_zil || v.stake_zil || 0);
            }
          }
          
          // Calculate period in days for annualization
          let periodDays = 7; // Default to 1 week
          if (startTime && endTime) {
            const start = new Date(startTime);
            const end = new Date(endTime);
            periodDays = Math.max(1, (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
          }
          
          // Calculate APR for each validator
          interface ValidatorAPR {
            name: string;
            earnings_zil: number;
            stake_zil: number;
            apr_percent: number;
            period_days: number;
          }
          
          const validatorsWithAPR: ValidatorAPR[] = [];
          
          if (earningsData?.top_validators) {
            for (const v of earningsData.top_validators) {
              const earnings = v.total_earnings_zil || v.earnings_zil || 0;
              const stake = stakeLookup.get(v.name) || 0;
              
              if (stake > 0 && earnings > 0) {
                // APR = (earnings / stake) * (365 / periodDays) * 100
                const apr = (earnings / stake) * (365 / periodDays) * 100;
                
                console.log(`[MCP:APR] ${v.name}: earnings=${earnings}, stake=${stake}, periodDays=${periodDays}, apr=${apr.toFixed(2)}%`);
                
                validatorsWithAPR.push({
                  name: v.name,
                  earnings_zil: earnings,
                  stake_zil: stake,
                  apr_percent: apr,
                  period_days: periodDays
                });
              }
            }
          }
          
          // Sort by APR descending and take top N
          validatorsWithAPR.sort((a, b) => b.apr_percent - a.apr_percent);
          const topValidators = validatorsWithAPR.slice(0, limit);
          
          console.log(`[MCP:APR] Calculated APR for ${topValidators.length} validators`);
          
          // Format response like MCP tools
          const periodDesc = periodDays === 7 ? 'last week' : 
                            periodDays === 30 ? 'last month' : 
                            `last ${Math.round(periodDays)} days`;
          
          return {
            content: [{
              type: 'text',
              text: JSON.stringify({
                status: 'success',
                data: {
                  top_validators: topValidators,
                  period_days: periodDays,
                  message: `Top ${topValidators.length} validators by effective APR (${periodDesc}). APR calculated as (earnings/stake) annualized.`
                }
              })
            }]
          };
        } catch (error) {
          console.error('[MCP:APR] Error calculating APR:', error);
          return {
            content: [{
              type: 'text',
              text: JSON.stringify({
                status: 'failed',
                reason: error instanceof Error ? error.message : 'Failed to calculate APR'
              })
            }]
          };
        }
      }
    }
  };
}

/**
 * Refresh validator cache by calling listValidators
 */
async function refreshValidatorCache(): Promise<void> {
  if (!mcpClient) return;
  
  const now = Date.now();
  if (validatorCache.length > 0 && now - validatorCacheTime < VALIDATOR_CACHE_TTL) {
    return; // Cache still valid
  }
  
  try {
    console.log("[MCP] Refreshing validator cache...");
    const rawTools = await mcpClient.tools();
    const listValidatorsTool = rawTools['listValidators'] || rawTools['list_validators'];
    
    if (listValidatorsTool) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result = await (listValidatorsTool as any).execute({});
      
      // Parse the result
      let rawData = '';
      if (result?.content && Array.isArray(result.content)) {
        rawData = result.content
          .filter((c: { type: string; text?: string }) => c.type === 'text' && c.text)
          .map((c: { text: string }) => c.text)
          .join('\n');
      }
      
      const parsed = JSON.parse(rawData);
      if (parsed.status === 'success' && Array.isArray(parsed.data)) {
        validatorCache = parsed.data;
        validatorCacheTime = now;
        console.log(`[MCP] Cached ${validatorCache.length} validators:`, validatorCache.map(v => v.name));
      }
    }
  } catch (error) {
    console.error("[MCP] Failed to refresh validator cache:", error);
  }
}

/**
 * Get Zilliqa Insights MCP tools (cached after first request)
 * Tools are wrapped to normalize validator names and resolve public keys automatically
 */
export async function getZilliqaInsightsTools() {
  // Return cached tools if available
  if (mcpTools) {
    // Refresh validator cache in background if stale
    refreshValidatorCache().catch(console.error);
    return mcpTools;
  }

  try {
    console.log("[MCP] Connecting to Zilliqa Insights server...");
    
    // Create MCP client with HTTP transport
    mcpClient = await createMCPClient({
      transport: {
        type: "http",
        url: ZILLIQA_MCP_URL,
      },
    });

    // Get tools from the server
    const rawTools = await mcpClient.tools();
    console.log("[MCP] Connected! Available tools:", Object.keys(rawTools));
    
    // Try to populate validator cache immediately
    await refreshValidatorCache();
    
    // Wrap tools to normalize validator names
    // The MCP server uses 'validator' parameter for all validator-specific tools
    const wrappedTools = Object.fromEntries(
      Object.entries(rawTools).map(([name, tool]) => {
        const wrappedTool = {
          ...tool,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          execute: async (args: any) => {
            // Normalize validator name if present
            if (args && typeof args.validator === 'string') {
              const originalName = args.validator;
              const normalizedName = normalizeValidatorName(originalName);
              if (originalName !== normalizedName) {
                console.log(`[MCP] Normalized validator: "${originalName}" → "${normalizedName}"`);
              }
              args = { ...args, validator: normalizedName };
            }
            
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return (tool as any).execute(args);
          },
        };
        return [name, wrappedTool];
      })
    );
    
    // Add custom composite tools
    const customTools = createCustomTools(wrappedTools);
    mcpTools = { ...wrappedTools, ...customTools };
    
    console.log("[MCP] Added custom tools:", Object.keys(customTools));
    
    return mcpTools;
  } catch (error) {
    console.error("[MCP] Failed to connect:", error);
    return null;
  }
}

/**
 * Get list of all known validators (from cache or fresh)
 */
export async function getValidatorList(): Promise<ValidatorInfo[]> {
  if (validatorCache.length === 0 || Date.now() - validatorCacheTime > VALIDATOR_CACHE_TTL) {
    await refreshValidatorCache();
  }
  return validatorCache;
}

// ============================================================================
// Response Formatting
// ============================================================================

/**
 * Format ISO date strings to readable format
 */
function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
}

/**
 * Clean up MCP message by formatting dates and removing hex addresses
 */
function formatMessage(message: string, validatorName?: string): string {
  // Replace ISO dates with readable format
  let formatted = message.replace(
    /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/g,
    (match) => formatDate(match)
  );
  
  // Replace validator hex addresses with the friendly name if provided
  if (validatorName) {
    formatted = formatted.replace(
      /validator 0x[a-f0-9]+/gi,
      `validator ${validatorName}`
    );
  }
  
  return formatted;
}

/**
 * Format validator data into a concise, readable response
 * Uses the 'message' field from MCP when available for better context
 */
export function formatValidatorResponse(
  toolName: string, 
  data: Record<string, unknown>, 
  validatorName?: string
): string {
  const formatNumber = (n: number) => n.toLocaleString('en-US', { maximumFractionDigits: 2 });
  const formatZil = (n: number) => `${formatNumber(n)} ZIL`;
  const formatPercent = (n: number) => `${(n * 100).toFixed(2)}%`;
  const validator = validatorName || 'Validator';
  const rawMessage = data.message as string | undefined;
  const message = rawMessage ? formatMessage(rawMessage, validator) : undefined;
  
  // Normalize tool name (camelCase or snake_case)
  const normalizedName = toolName.toLowerCase().replace(/_/g, '');
  
  switch (normalizedName) {
    case 'getvalidatorstake':
    case 'validatorstake': {
      const stake = data.total_stake_zil as number;
      if (stake === null || stake === undefined || isNaN(stake)) {
        return message || `📊 **${validator} Stake**: No data available`;
      }
      return `📊 **${validator} Stake**: ${formatZil(stake)} (≈${formatNumber(stake / 1_000_000)}M ZIL)`;
    }
    
    case 'gettotalvalidatorearnings':
    case 'totalvalidatorearnings': {
      if (message) return `💰 ${message}`;
      const earnings = data.total_earnings_zil as number;
      if (earnings === null || earnings === undefined || isNaN(earnings)) {
        return `💰 **${validator} Total Earnings**: No data available for this period`;
      }
      return `💰 **${validator} Total Earnings**: ${formatZil(earnings)}`;
    }
    
    case 'getvalidatorearningsbreakdown':
    case 'validatorearningsbreakdown': {
      if (message) return `📈 ${message}`;
      const proposal = (data.proposal_earnings_zil as number) || 0;
      const cosigning = (data.cosigning_earnings_zil as number) || 0;
      if (isNaN(proposal) && isNaN(cosigning)) {
        return `📈 **${validator} Earnings**: No data available for this period`;
      }
      const total = (isNaN(proposal) ? 0 : proposal) + (isNaN(cosigning) ? 0 : cosigning);
      return `📈 **${validator} Earnings**\n• Proposal Rewards: ${formatZil(proposal)}\n• Cosigning Rewards: ${formatZil(cosigning)}\n• **Total**: ${formatZil(total)}`;
    }
    
    case 'getproposersuccessrate':
    case 'proposersuccessrate': {
      if (message) return `🎯 ${message}`;
      const rate = data.proposer_success_rate as string | number;
      if (rate === null || rate === undefined) {
        return `🎯 **${validator} Proposer Success Rate**: No data available`;
      }
      const formatted = typeof rate === 'number' ? formatPercent(rate) : rate;
      return `🎯 **${validator} Proposer Success Rate**: ${formatted}`;
    }
    
    case 'getcosignersuccessrate':
    case 'cosignersuccessrate': {
      if (message) return `✅ ${message}`;
      const rate = data.cosigner_success_rate as string | number;
      if (rate === null || rate === undefined) {
        return `✅ **${validator} Cosigner Success Rate**: No data available`;
      }
      const formatted = typeof rate === 'number' ? formatPercent(rate) : rate;
      return `✅ **${validator} Cosigner Success Rate**: ${formatted}`;
    }
    
    case 'getvalidatorinfo':
    case 'validatorinfo': {
      if (message) return `ℹ️ ${message}`;
      const entries = Object.entries(data)
        .filter(([k]) => k !== 'message')
        .map(([k, v]) => {
          const label = k.replace(/_/g, ' ').replace(/zil/gi, 'ZIL');
          return `• ${label}: ${typeof v === 'number' ? formatNumber(v) : v}`;
        });
      return `ℹ️ **${validator} Info**\n${entries.join('\n')}`;
    }
    
    case 'listvalidators': {
      const validators = data as unknown as ValidatorInfo[];
      if (Array.isArray(validators)) {
        const list = validators.map((v, i) => `${i + 1}. **${v.name}**`).join('\n');
        return `📋 **Known Validators** (${validators.length})\n${list}`;
      }
      return message || `📋 **Validators**: ${JSON.stringify(data)}`;
    }
    
    case 'gettopvalidatorsbyearnings':
    case 'topvalidatorsbyearnings': {
      // API returns "top_validators" array with total_earnings_zil field
      const validators = (data.top_validators || data.validators) as Array<{ 
        name: string; 
        total_earnings_zil?: number;
        earnings_zil?: number;
      }>;
      if (Array.isArray(validators) && validators.length > 0) {
        const list = validators.map((v, i) => {
          const earnings = v.total_earnings_zil ?? v.earnings_zil ?? 0;
          return `${i + 1}. **${v.name}**: ${formatZil(earnings)}`;
        }).join('\n');
        const header = message ? `🏆 ${message}\n\n` : '🏆 **Top Validators by Earnings**\n';
        return `${header}${list}`;
      }
      return message || `🏆 **Top Earners**: ${JSON.stringify(data)}`;
    }
    
    case 'gettopvalidatorsbystake':
    case 'topvalidatorsbystake': {
      // API returns "top_validators" array with total_stake_zil field
      const validators = (data.top_validators || data.validators) as Array<{ 
        name: string; 
        total_stake_zil?: number;
        stake_zil?: number;
      }>;
      if (Array.isArray(validators) && validators.length > 0) {
        const list = validators.map((v, i) => {
          const stake = v.total_stake_zil ?? v.stake_zil ?? 0;
          return `${i + 1}. **${v.name}**: ${formatZil(stake)} (≈${formatNumber(stake / 1_000_000)}M)`;
        }).join('\n');
        const header = message ? `📊 ${message}\n\n` : '📊 **Top Validators by Stake**\n';
        return `${header}${list}`;
      }
      return message || `📊 **Top by Stake**: ${JSON.stringify(data)}`;
    }
    
    case 'gettopproposersuccessrate':
    case 'topproposersuccessrate': {
      // API returns "top_validators" array with proposer_success_rate as string (e.g., "99.94%")
      const validators = (data.top_validators || data.validators) as Array<{ 
        name: string; 
        proposer_success_rate?: string;
        success_rate?: number | string;
      }>;
      if (Array.isArray(validators) && validators.length > 0) {
        const list = validators.map((v, i) => {
          const rate = v.proposer_success_rate ?? v.success_rate ?? 'N/A';
          const formatted = typeof rate === 'number' ? formatPercent(rate) : rate;
          return `${i + 1}. **${v.name}**: ${formatted}`;
        }).join('\n');
        const header = message ? `🎯 ${message}\n\n` : '🎯 **Top Proposer Success Rates**\n';
        return `${header}${list}`;
      }
      return message || `🎯 **Top Proposers**: ${JSON.stringify(data)}`;
    }
    
    case 'gettopcosignersuccessrate':
    case 'topcosignersuccessrate': {
      // API returns "top_validators" array with cosigner_success_rate as string (e.g., "99.94%")
      const validators = (data.top_validators || data.validators) as Array<{ 
        name: string; 
        cosigner_success_rate?: string;
        success_rate?: number | string;
      }>;
      if (Array.isArray(validators) && validators.length > 0) {
        const list = validators.map((v, i) => {
          const rate = v.cosigner_success_rate ?? v.success_rate ?? 'N/A';
          const formatted = typeof rate === 'number' ? formatPercent(rate) : rate;
          return `${i + 1}. **${v.name}**: ${formatted}`;
        }).join('\n');
        const header = message ? `✅ ${message}\n\n` : '✅ **Top Cosigner Success Rates**\n';
        return `${header}${list}`;
      }
      return message || `✅ **Top Cosigners**: ${JSON.stringify(data)}`;
    }
    
    case 'getvalidatorapr':
    case 'validatorapr': {
      // Custom tool: APR calculated from earnings/stake
      const validators = (data.top_validators || data.validators) as Array<{ 
        name: string; 
        apr_percent: number;
        earnings_zil: number;
        stake_zil: number;
        period_days?: number;
      }>;
      if (Array.isArray(validators) && validators.length > 0) {
        const list = validators.map((v, i) => {
          const apr = v.apr_percent?.toFixed(2) || 'N/A';
          const earnings = formatNumber(v.earnings_zil || 0);
          const stake = formatNumber((v.stake_zil || 0) / 1_000_000);
          return `${i + 1}. **${v.name}**: ${apr}% APR (${earnings} ZIL earned / ${stake}M staked)`;
        }).join('\n');
        const header = message ? `📈 ${message}\n\n` : '📈 **Validator Performance (Effective APR)**\n';
        return `${header}${list}`;
      }
      return message || `📈 **Validator APR**: ${JSON.stringify(data)}`;
    }
    
    default:
      // For unknown tools, return message if available, otherwise raw data
      if (message) return message;
      return `**${toolName}**: ${JSON.stringify(data)}`;
  }
}

/**
 * Format error response for failed validator lookups
 */
export function formatValidatorError(validatorName: string, reason: string): string {
  return `⚠️ **${validatorName}**: ${reason}\n\nTry different validator names like: PlunderSwap, Binance, Moonlet, Staked, Everstake`;
}

/**
 * Parse and format MCP tool result
 */
export function formatMCPToolResult(
  toolName: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toolResult: any
): string {
  // Extract the JSON data from MCP response
  let rawData = '';
  if (toolResult.output?.content && Array.isArray(toolResult.output.content)) {
    rawData = toolResult.output.content
      .filter((c: { type: string; text?: string }) => c.type === 'text' && c.text)
      .map((c: { text: string }) => c.text)
      .join('\n');
  }

  // Get validator name from the tool input
  const validatorName = toolResult.input?.validator as string | undefined;

  // Debug: log raw MCP response
  console.log(`[MCP] Raw response for ${toolName}:`, rawData);

  // Parse and format the response nicely
  try {
    const parsed = JSON.parse(rawData);
    console.log(`[MCP] Parsed data for ${toolName}:`, JSON.stringify(parsed, null, 2));
    
    if (parsed.status === 'success' && parsed.data) {
      return formatValidatorResponse(toolName, parsed.data, validatorName);
    }
    if (parsed.status === 'failed' && parsed.reason) {
      return formatValidatorError(validatorName || 'Validator', parsed.reason);
    }
    return `**${toolName}**: ${rawData}`;
  } catch {
    return `**${toolName}**: ${rawData || JSON.stringify(toolResult.output)}`;
  }
}

