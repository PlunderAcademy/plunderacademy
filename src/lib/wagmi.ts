import { http } from "wagmi";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { zilliqa, zilliqaTestnet } from "viem/chains";

// Mainnet
// export const wagmiConfig = getDefaultConfig({
//   appName: "Plunder Academy",
//   projectId:
//     process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "missing-project-id",
//   chains: [zilliqa],
//   ssr: true,
//   transports: {
//     [zilliqa.id]: http()
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
