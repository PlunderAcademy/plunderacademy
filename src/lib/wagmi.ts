import { http } from "wagmi";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { type Chain } from "viem";

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
      http: ["https://api.testnet.zilliqa.com"], // Correct testnet RPC URL
    },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://testnet.zilliqa.blockscout.com",
    },
  },
  testnet: true,
};

// Mainnet
// export const wagmiConfig = getDefaultConfig({
//   appName: "Plunder Academy",
//   projectId:
//     process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "missing-project-id",
//   chains: [zilliqaMainnet],
//   ssr: true,
//   transports: {
//     [zilliqaMainnet.id]: http("https://api.zilliqa.com"),
//   },
// });

// Testnet
export const wagmiConfig = getDefaultConfig({
  appName: "Plunder Academy",
  projectId:
    process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "missing-project-id",
  chains: [zilliqaTestnet],
  ssr: true,
  transports: {
    [zilliqaTestnet.id]: http("https://api.testnet.zilliqa.com"),
  },
});
