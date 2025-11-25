import { http, createConfig } from "wagmi";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  injectedWallet,
  walletConnectWallet,
  metaMaskWallet,
  coinbaseWallet,
  rainbowWallet,
  zilPayWallet,
  rabbyWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { type Chain } from "viem";
import { config } from "./config";

// Custom Zilliqa chain definitions with correct RPC URLs
export const zilliqaMainnet: Chain = {
  id: 32769,
  name: "Zilliqa",
  nativeCurrency: {
    name: "Zilliqa",
    symbol: "ZIL",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://api.zilliqa.com"],
    },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://zilliqa.blockscout.com",
    },
  },
  contracts: {
    ensUniversalResolver: {
      address: "0x2b6a7953c510392aE88c7C302a984460Daa8AF24",
    },
    ensRegistry: {
      address: "0x2196b67Ca97bBcA07C01c7Bdf4f35209CC615389",
    },
    multicall3: {
      address: "0x38899efb93d5106d3adb86662c557f237f6ecf57",
      blockCreated: 5313022,
    },
  },
  testnet: false,
};

export const zilliqaTestnet: Chain = {
  id: 33101,
  name: "Zilliqa Testnet",
  nativeCurrency: {
    name: "Zilliqa",
    symbol: "ZIL",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://api.testnet.zilliqa.com"],
    },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://testnet.zilliqa.blockscout.com",
    },
  },
  contracts: {
    ensUniversalResolver: {
      address: "0x579C72c5377a5a4A8Ce6d43A1701F389c8FDFC8e",
    },
    ensRegistry: {
      address: "0x716c7e7dC02f7E0FD44343C720233DB57896Fb1b",
    },
    multicall3: {
      address: "0x3c2ffc98284b2f6e1035eaeed75e9273b5b63223",
      blockCreated: 3251173,
    },
  },
  testnet: true,
};

// Dynamically configure wagmi based on NEXT_PUBLIC_MAINNET flag
const activeChain = config.isMainnet ? zilliqaMainnet : zilliqaTestnet;
const activeRpcUrl = config.isMainnet
  ? "https://api.zilliqa.com"
  : "https://api.testnet.zilliqa.com";

// Configure wallets with explicit control
const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [
        injectedWallet, // This is critical for mobile - catches MetaMask, Trust, etc.
        metaMaskWallet,
        walletConnectWallet,
        rabbyWallet,
        zilPayWallet,
      ],
    },
  ],
  {
    appName: "Plunder Academy",
    projectId: config.walletConnectProjectId,
  }
);

export const wagmiConfig = createConfig({
  connectors,
  chains: [activeChain],
  ssr: true,
  transports: {
    [activeChain.id]: http(activeRpcUrl),
  },
});
