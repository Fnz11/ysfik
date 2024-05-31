"use client";
import {
  WalletMultiButton,
  useWalletModal,
} from "@solana/wallet-adapter-react-ui";
import { useWalletMultiButton } from "@solana/wallet-adapter-base-ui";
import Button from "@/components/Button";

const CustomConnectButtonSolana = () => {
  const { setVisible: setModalVisible } = useWalletModal();
  const { buttonState } = useWalletMultiButton({
    onSelectWallet() {
      setModalVisible(true);
    },
  });
  return (
    <>
      <WalletMultiButton>
        <Button color="bg-gradient-to-r from-teal-500 via-blue-500 via-[40%] to-[100%] to-fuchsia-600" bordered onClick={() => {}}>
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

export default CustomConnectButtonSolana;
