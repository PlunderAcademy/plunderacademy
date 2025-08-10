"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@/components/ui/button";

type Props = { fullWidth?: boolean };

export function WalletButton({ fullWidth = false }: Props) {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        mounted,
        openAccountModal,
        openChainModal,
        openConnectModal,
      }) => {
        const ready = mounted;
        const connected = ready && account && chain;

        const isUnsupported = Boolean(chain?.unsupported);
        const label = !connected
          ? "Connect Wallet"
          : isUnsupported
          ? "Wrong network"
          : account?.displayName ?? "Wallet";
        const onClick = !connected
          ? openConnectModal
          : isUnsupported
          ? openChainModal
          : openAccountModal;
        const variant = isUnsupported
          ? ("destructive" as const)
          : ("default" as const);

        return (
          <Button
            onClick={onClick}
            variant={variant}
            className={fullWidth ? "w-full" : undefined}
          >
            {label}
          </Button>
        );
      }}
    </ConnectButton.Custom>
  );
}
