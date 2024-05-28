"use client";
import {
  WalletMultiButton,
  useWalletModal,
} from "@solana/wallet-adapter-react-ui";
import { useWalletMultiButton } from "@solana/wallet-adapter-base-ui";
import Button from "@/components/Button";

const CustomConnectButton = () => {
  const { setVisible: setModalVisible } = useWalletModal();
  const { buttonState } = useWalletMultiButton({
    onSelectWallet() {
      setModalVisible(true);
    },
  });
  return (
    <>
      <WalletMultiButton>
        <Button bordered onClick={() => {}}>
          {buttonState == "no-wallet"
            ? "Select Wallet"
            : buttonState == "has-wallet"
            ? "Connect Wallet"
            : buttonState == "connecting"
            ? "Connecting..."
            : "Signing..."}
        </Button>
      </WalletMultiButton>
    </>
  );
};

export default CustomConnectButton;
