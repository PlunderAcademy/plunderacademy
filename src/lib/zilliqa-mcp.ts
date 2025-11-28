/**
 * Zilliqa Insights MCP Server Integration
 * 
 * Connects to the Zilliqa Insights MCP server for real-time validator data.
 * See: https://github.com/Zilliqa/insights-mcp-server
 */

import { experimental_createMCPClient as createMCPClient } from "@ai-sdk/mcp";

// ============================================================================
// Configuration
// ============================================================================
const ZILLIQA_MCP_URL = "https://insights.mcp.zilliqa.com/mcp";

// ============================================================================
// Validator Nickname Mapping
// ============================================================================
// Maps common names to MCP server names
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
  'avely': '2ZilMoon',
  'zilpay': '2ZilMoon',
  'r3to': 'r3to',
  'amazing pool': 'Amazing Pool',
  'amazingpool': 'Amazing Pool',
};

/**
 * Normalize validator name using nickname mapping
 */
function normalizeValidatorName(name: string): string {
  const lowercased = name.toLowerCase().trim();
  return VALIDATOR_NICKNAMES[lowercased] || name;
}

// ============================================================================
// MCP Client Cache
// ============================================================================
let mcpClient: Awaited<ReturnType<typeof createMCPClient>> | null = null;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let mcpTools: Record<string, any> | null = null;

/**
 * Get Zilliqa Insights MCP tools (cached after first request)
 * Tools are wrapped to normalize validator names automatically
 */
export async function getZilliqaInsightsTools() {
  // Return cached tools if available
  if (mcpTools) {
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
    
    // Wrap tools to normalize validator names before execution
    mcpTools = Object.fromEntries(
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
    
    return mcpTools;
  } catch (error) {
    console.error("[MCP] Failed to connect:", error);
    return null;
  }
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
  const validator = validatorName || 'Validator';
  const rawMessage = data.message as string | undefined;
  const message = rawMessage ? formatMessage(rawMessage, validator) : undefined;
  
  switch (toolName) {
    case 'get_validator_stake': {
      const stake = data.total_stake_zil as number;
      if (stake === null || stake === undefined || isNaN(stake)) {
        return message || `📊 **${validator} Stake**: No data available`;
      }
      return `📊 **${validator} Stake**: ${formatZil(stake)} (≈${formatNumber(stake / 1_000_000)}M ZIL)`;
    }
    
    case 'get_total_validator_earnings': {
      if (message) return `💰 ${message}`;
      const earnings = data.total_earnings_zil as number;
      if (earnings === null || earnings === undefined || isNaN(earnings)) {
        return `💰 **${validator} Total Earnings**: No data available for this period`;
      }
      return `💰 **${validator} Total Earnings**: ${formatZil(earnings)}`;
    }
    
    case 'get_validator_earnings_breakdown': {
      if (message) return `📈 ${message}`;
      const proposal = (data.proposal_earnings_zil as number) || 0;
      const cosigning = (data.cosigning_earnings_zil as number) || 0;
      if (isNaN(proposal) && isNaN(cosigning)) {
        return `📈 **${validator} Earnings**: No data available for this period`;
      }
      const total = (isNaN(proposal) ? 0 : proposal) + (isNaN(cosigning) ? 0 : cosigning);
      return `📈 **${validator} Earnings**\n• Proposal Rewards: ${formatZil(proposal)}\n• Cosigning Rewards: ${formatZil(cosigning)}\n• **Total**: ${formatZil(total)}`;
    }
    
    case 'get_proposer_success_rate': {
      if (message) return `🎯 ${message}`;
      const rate = data.proposer_success_rate as string;
      if (!rate) {
        return `🎯 **${validator} Proposer Success Rate**: No data available`;
      }
      return `🎯 **${validator} Proposer Success Rate**: ${rate}`;
    }
    
    case 'get_cosigner_success_rate': {
      if (message) return `✅ ${message}`;
      const rate = data.cosigner_success_rate as string;
      if (!rate) {
        return `✅ **${validator} Cosigner Success Rate**: No data available`;
      }
      return `✅ **${validator} Cosigner Success Rate**: ${rate}`;
    }
    
    case 'get_validator_info': {
      if (message) return `ℹ️ ${message}`;
      const entries = Object.entries(data)
        .filter(([k]) => k !== 'message')
        .map(([k, v]) => {
          const label = k.replace(/_/g, ' ').replace(/zil/gi, 'ZIL');
          return `• ${label}: ${typeof v === 'number' ? formatNumber(v) : v}`;
        });
      return `ℹ️ **${validator} Info**\n${entries.join('\n')}`;
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

