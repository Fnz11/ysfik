"use client";
import React, { useState } from "react";
import { EVMConfig } from "../EVMProvider";
import { writeContract } from "@wagmi/core";
import { fcABI, fcAddr } from "@/contracts/ERC20/FcABI";

const ClaimAmountSection = ({ setErrorMessage }: any) => {
  // Claim amount state
  const [claimAmount, setClaimAmount] = useState<any>(null);

  // Handle setClaimAmount
  const handleSetClaimAmount = async (amount: number) => {
    try {
      await writeContract(EVMConfig, {
        abi: fcABI,
        address: fcAddr,
        functionName: "setClaimAmount",
        args: [BigInt(amount)],
      });
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Failed set claim amount");
    }
  };

  return (
    <div className="flex gap-5">
      <input
        type="number"
        placeholder="Enter claim amount"
        className="border py-1 px-3 rounded-xl border-white/[0.08] bg-white/10"
        onChange={(e) => setClaimAmount(e.target.value)}
      />
      <button
        className="bg-white rounded-xl text-black p-2"
        onClick={() => handleSetClaimAmount(claimAmount)}
      >
        Set Claim Amount
      </button>
    </div>
  );
};

export default ClaimAmountSection;
