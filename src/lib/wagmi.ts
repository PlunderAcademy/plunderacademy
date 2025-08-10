import { http } from "wagmi";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { zilliqa } from "viem/chains";

export const wagmiConfig = getDefaultConfig({
  appName: "Plunder Academy",
  projectId:
    process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "missing-project-id",
  chains: [zilliqa],
  ssr: true,
  transports: {
    [zilliqa.id]: http(),
  },
});
