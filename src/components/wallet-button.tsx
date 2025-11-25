"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = { 
  fullWidth?: boolean;
  onConnectClick?: () => void;
};

export function WalletButton({ fullWidth = false, onConnectClick }: Props) {
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
        const onClick = () => {
          // Close mobile menu if provided
          onConnectClick?.();
          // Small delay to ensure Sheet closes before modal opens
          setTimeout(() => {
            if (!connected) {
              openConnectModal();
            } else if (isUnsupported) {
              openChainModal();
            } else {
              openAccountModal();
            }
          }, 100);
        };
        const variant = isUnsupported
          ? ("destructive" as const)
          : ("default" as const);

        return (
          <Button
            onClick={onClick}
            variant={variant}
            className={cn(
              "touch-manipulation relative z-[100]",
              fullWidth && "w-full"
            )}
            style={{ touchAction: "manipulation" }}
          >
            {label}
          </Button>
        );
      }}
    </ConnectButton.Custom>
  );
}
