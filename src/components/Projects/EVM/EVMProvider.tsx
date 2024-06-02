"use client";
import { ReactNode, useMemo } from "react";

// ========== IMPORTS ==========

// Rainbow Kit
import "@rainbow-me/rainbowkit/styles.css";
import {
  Chain,
  getDefaultConfig,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";

// Polygon Amoy Chain
export const polgonAmoy = {
  id: 80002,
  name: "Polygon Amoy Testnet",
  nativeCurrency: { name: "Polygon", symbol: "MATIC", decimals: 18 },
  rpcUrls: {
    default: {
      http: [
        "https://side-neat-liquid.matic-amoy.quiknode.pro/e61001233830431fa64f85870b0a12edb9a102b1/",
      ],
    },
  },
  blockExplorers: {
    default: { name: "Polygonscan", url: "https://polygonscan.com/" },
  },
  // contracts: {
  //   ensRegistry: {
  //     address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
  //   },
  //   ensUniversalResolver: {
  //     address: "0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da",
  //     blockCreated: 16773775,
  //   },
  //   multicall3: {
  //     address: "0xca11bde05977b3631167028862be2a173976ca11",
  //     blockCreated: 14353601,
  //   },
  // },
} as const satisfies Chain;

const config = getDefaultConfig({
  appName: "Ysfik Project",
  projectId: "80002",
  chains: [polgonAmoy],
  // ssr: true, // If your dApp uses server side rendering (SSR)
});

const EVMProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <WagmiProvider config={config}>
        <RainbowKitProvider
          appInfo={{
            appName: "Ysfik Project",
            learnMoreUrl: "https://ysfik.my.id/",
          }}
          initialChain={80002}
        >
          {children}
        </RainbowKitProvider>
      </WagmiProvider>
    </>
  );
};

export { config as EVMConfig };
export default EVMProvider;
