/**
 * Configuration utility for environment-specific settings.
 * Handles mainnet/testnet switching based on NEXT_PUBLIC_MAINNET flag.
 */

const isMainnet = process.env.NEXT_PUBLIC_MAINNET === 'true';

export const config = {
  /**
   * Whether the application is running in mainnet mode
   */
  isMainnet,

  /**
   * API base URL for backend services
   */
  apiBaseUrl: isMainnet
    ? process.env.NEXT_PUBLIC_PLUNDER_ACADEMY_API_MAINNET
    : process.env.NEXT_PUBLIC_PLUNDER_ACADEMY_API_TESTNET,

  /**
   * Training Registry contract address
   */
  contractAddress: (isMainnet
    ? process.env.NEXT_PUBLIC_PLUNDER_ACADEMY_CONTRACT_ADDRESS_MAINNET
    : process.env.NEXT_PUBLIC_PLUNDER_ACADEMY_CONTRACT_ADDRESS_TESTNET) as `0x${string}`,

  /**
   * Token Factory contract addresses
   */
  factoryAddress: {
    testnet: process.env.NEXT_PUBLIC_FACTORY_ADDRESS_TESTNET as `0x${string}`,
    mainnet: process.env.NEXT_PUBLIC_FACTORY_ADDRESS_MAINNET as `0x${string}`,
  },

  /**
   * WalletConnect project ID
   */
  walletConnectProjectId:
    process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'missing-project-id',

  /**
   * Current network name for display purposes
   */
  networkName: isMainnet ? 'Mainnet' : 'Testnet',

  /**
   * Chain ID for the current network
   */
  chainId: isMainnet ? 32769 : 33101,
} as const;

/**
 * Validates that all required environment variables are set
 */
export function validateConfig(): { valid: boolean; missing: string[] } {
  const missing: string[] = [];

  if (!config.apiBaseUrl) {
    missing.push(
      isMainnet
        ? 'NEXT_PUBLIC_PLUNDER_ACADEMY_API_MAINNET'
        : 'NEXT_PUBLIC_PLUNDER_ACADEMY_API_TESTNET'
    );
  }

  if (!config.contractAddress || config.contractAddress === '0x') {
    missing.push(
      isMainnet
        ? 'NEXT_PUBLIC_PLUNDER_ACADEMY_CONTRACT_ADDRESS_MAINNET'
        : 'NEXT_PUBLIC_PLUNDER_ACADEMY_CONTRACT_ADDRESS_TESTNET'
    );
  }

  if (!config.factoryAddress.testnet || config.factoryAddress.testnet === '0x') {
    missing.push('NEXT_PUBLIC_FACTORY_ADDRESS_TESTNET');
  }

  // Only validate mainnet factory if we're in mainnet mode
  if (isMainnet && (!config.factoryAddress.mainnet || config.factoryAddress.mainnet === '0x')) {
    missing.push('NEXT_PUBLIC_FACTORY_ADDRESS_MAINNET');
  }

  if (config.walletConnectProjectId === 'missing-project-id') {
    missing.push('NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID');
  }

  return {
    valid: missing.length === 0,
    missing,
  };
}

