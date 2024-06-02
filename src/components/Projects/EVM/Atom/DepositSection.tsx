"use client";
import React, { useState } from "react";
import { writeContract } from "@wagmi/core";
import { EVMConfig } from "../EVMProvider";
import { YSFAddr, fcABI, fcAddr } from "@/contracts/ERC20/FcABI";
import { GetBlockNumberErrorType, parseUnits } from "viem";
import { usePublicClient } from "wagmi";

const DepositSection = ({ setErrorMessage }: { setErrorMessage: any }) => {
  // Deposit amount to faucet state
  const [depositAmount, setDepositAmount] = useState<any>(0);

  const publicClient = usePublicClient({
    config: EVMConfig,
  });

  // Handle deposit YSFToken into the faucet
  const handleDepositFaucet = async (amount: number) => {
    try {
      // Approve to deposit
      const approveHash = await writeContract(EVMConfig, {
        address: YSFAddr,
        abi: [
          {
            constant: false,
            inputs: [
              { name: "spender", type: "address" },
              { name: "value", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ name: "", type: "bool" }],
            type: "function",
          },
        ],
        functionName: "approve",
        args: [fcAddr, parseUnits(amount.toString(), 18)],
      });

      // Wait for the approve transaction to be mined
      await publicClient.waitForTransactionReceipt({
        hash: approveHash,
      });

      // Proceed with deposit after approval is confirmed
      await writeContract(EVMConfig, {
        abi: fcABI,
        address: fcAddr,
        functionName: "deposit",
        args: [parseUnits(amount.toString(), 18)],
      });
    } catch (e) {
      const error = e as GetBlockNumberErrorType;
      console.log("Failed deposit YSFToken into the faucet:", error);
      setErrorMessage("Failed deposit YSFToken into the faucet");
    }
  };

  return (
    <div className="flex gap-5">
      <input
        type="number"
        placeholder="Enter deposit amount"
        className="border py-1 px-3 rounded-xl border-white/[0.08] bg-white/10"
        onChange={(e) => setDepositAmount(e.target.value)}
      />
      <button
        className="bg-white rounded-xl text-black p-2"
        onClick={() => handleDepositFaucet(depositAmount)}
      >
        Deposit to faucet
      </button>
      <h1>{depositAmount}</h1>
    </div>
  );
};

export default DepositSection;
