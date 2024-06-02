/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { EVMConfig } from "../EVMProvider";
import { fcABI, fcAddr } from "@/contracts/ERC20/FcABI";
import { readContract, writeContract } from "@wagmi/core";
import { useDispatch, useSelector } from "react-redux";
import { setCallTrigger } from "@/redux/slices/evmSlice";

const RequestTokenSection = ({ setErrorMessage }: any) => {
  // Redux
  const dispatch = useDispatch();

  // Address state
  const address = useSelector((state: any) => state.evm.address);

  // Claim Amount Show state
  const [claimAmountShow, setClaimAmountShow] = useState<any>(null);

  // Get claimAmount
  const getClaimAmount = async () => {
    try {
      const claimAmount = await readContract(EVMConfig, {
        abi: fcABI,
        address: fcAddr,
        functionName: "getClaimAmount",
      });
      setClaimAmountShow(Number(claimAmount) / 10 ** 18);
    } catch (error) {
      console.log("Failed get claimAmount:", error);
      setErrorMessage("Failed get claim amount");
    }
  };
  useEffect(() => {
    getClaimAmount();
  }, [address]);

  //   Handle add token to metamask
  async function addTokenToMetaMask() {
    if (!window || !window?.ethereum!) return;
    const tokenAddress = "0x1aD8B2a631551A790Fc64daC7539FCF528Cb7121";
    const tokenSymbol = "YSF";
    const tokenDecimals = 18;

    try {
      const wasAdded = await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: tokenAddress,
            symbol: tokenSymbol,
            decimals: tokenDecimals,
          },
        },
      });

      if (wasAdded) {
        console.log("Token added to MetaMask!");
      } else {
        console.log("Token not added to MetaMask.");
      }
    } catch (error) {
      console.error("Error adding token to MetaMask:", error);
    }
  }

  // Handle get YSFToken
  const handleGetYSFToken = async () => {
    try {
      if (address) {
        await writeContract(EVMConfig, {
          abi: fcABI,
          address: fcAddr,
          functionName: "requestToken",
        })
          dispatch(setCallTrigger());
          await addTokenToMetaMask();
      }
    } catch (error) {
      console.log("Failed get YSFToken:", error);
      setErrorMessage("Failed get YSFToken");
    }
  };

  return (
    <>
      <button
        className="bg-white rounded-xl text-black p-2"
        onClick={handleGetYSFToken}
      >
        Get {claimAmountShow || "-"} YSF
      </button>
    </>
  );
};

export default RequestTokenSection;
