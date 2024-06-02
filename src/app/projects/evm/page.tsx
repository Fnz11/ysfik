/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useEffect, useState } from "react";
import { useAccount, usePublicClient, useWalletClient } from "wagmi";
import { YSFAddr, fcABI, fcAddr } from "@/contracts/ERC20/FcABI";
import { writeContract, getBalance } from "@wagmi/core";
import { EVMConfig } from "@/components/Projects/EVM/EVMProvider";
import DepositSection from "@/components/Projects/EVM/Atom/DepositSection";
import { useDispatch, useSelector } from "react-redux";
import { setAddress } from "@/redux/slices/evmSlice";
import RequestTokenSection from "@/components/Projects/EVM/Atom/RequestTokenSection";
import ClaimAmountSection from "@/components/Projects/EVM/Atom/ClaimAmountSection";

const EVM = () => {
  // Redux
  const dispatch = useDispatch();

  // ==================== STATE ====================
  // Call triger state
  const callTrigger = useSelector((state: any) => state.evm.callTrigger);

  // Account address
  const { address: initialAddress } = useAccount();

  // Wallet client
  const walletClient = useWalletClient({
    config: EVMConfig,
  });

  // Public client
  const publicClient = usePublicClient({
    config: EVMConfig,
  });

  // Error Message state
  const [errorMessage, setErrorMessage] = useState("");

  // Faucet balance state
  const [faucetBalance, setFaucetBalance] = useState<any>(null);

  // User Balance state
  const [userBalance, setUserBalance] = useState<any>(null);

  // ==================== HANDLE ====================

  // Get faucet balance
  const getFaucetBalance = async () => {
    if (!initialAddress) return;
    const balance = await getBalance(EVMConfig, {
      address: fcAddr,
      token: YSFAddr,
    });
    setFaucetBalance(balance?.formatted!);
  };

  // Get faucet balance
  const getUserBalance = async () => {
    if (!initialAddress) return;
    const balance = await getBalance(EVMConfig, {
      address: initialAddress,
      token: YSFAddr,
    });
    setUserBalance(balance?.formatted!);
  };

  // Call by trigger
  useEffect(() => {
    getFaucetBalance();
    getUserBalance();
  }, [callTrigger]);

  // Interval
  useEffect(() => {
    dispatch(setAddress(initialAddress));
    setInterval(() => {
      getFaucetBalance();
      getUserBalance();
    }, 10000);
  }, [initialAddress]);

  return (
    <div className="flex flex-col items-center justify-center w-[50rem] min-h-[80vh] gap-5 bg-white/[0.03] border border-white/[0.08] rounded-3xl p-5 text-2xl">
      <div className="flex flex-col items-center justify-center gap-3">
        <h1>Faucet balance: {faucetBalance || "-"} YSF</h1>
        <h1>Your balance: {userBalance || "-"} YSF</h1>
      </div>
      <ConnectButton />
      {errorMessage.length > 0 && (
        <h1 className="text-red-500">{errorMessage}</h1>
      )}

      {/* Public */}
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="mx-auto text-center text-5xl mt-5 mb-2 font-semibold">
          Public
        </h1>

        {/* Deposit */}
        <DepositSection setErrorMessage={setErrorMessage} />
        <RequestTokenSection setErrorMessage={setErrorMessage} />
      </div>

      {/* Owner Only */}
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="mx-auto text-center text-5xl mt-5 mb-2 font-semibold">
          Owner Only
        </h1>
        <ClaimAmountSection setErrorMessage={setErrorMessage} />
      </div>
    </div>
  );
};

export default EVM;
