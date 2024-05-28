"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useWallet } from "@solana/wallet-adapter-react";
import bs58 from "bs58";
const CustomConnectButtonNoSSR = dynamic(
  () => import("../../../components/Projects/Solana/CustomConnectButton"),
  {
    ssr: false,
  }
);

const Solana = () => {
  // Solana
  const {
    publicKey,
    sendTransaction,
    wallet,
    signMessage,
    connected,
    disconnect,
  } = useWallet();

  // Detect Public Key
  useEffect(() => {
    // Do a sign message when there's a public key but the wallet session is null
    // && localStorage.getItem("wallet-session") == null
    if (publicKey) {
      const encodedMessage = new TextEncoder().encode(
        `Authorize your wallet to get faucet on ysfik`
      );

      signMessage!(encodedMessage)
        .then((signed) => {
          // getInfo(publicKey.toString()).then(() => {
          //   dispatch(setPhase("burn"));
          //   dispatch(setAddress(publicKey.toString()));
          // });

          // Set LS
          const walletSession = JSON.stringify({
            signature: bs58.encode(signed),
            publicKey: publicKey.toString(),
          });
          localStorage.setItem("wallet-session", walletSession);
        })
        .catch((err) => {
          // User cancel sign message | Set Load to False and Disconnect Wallet
          disconnect();
        });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publicKey]);

  return (
    <>
      <CustomConnectButtonNoSSR />
    </>
  );
};

export default Solana;
