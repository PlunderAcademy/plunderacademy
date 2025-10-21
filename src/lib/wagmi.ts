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
      http: ["https://api.testnet.zilliqa.com"], // Correct testnet RPC URL
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
