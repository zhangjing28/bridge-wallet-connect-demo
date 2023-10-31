"use client";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { mainnet, WagmiConfig } from "wagmi";
import * as allChains from "@wagmi/core/chains";

import Home from "./Home";

// 1. Get projectId
const projectId = "76ef70a7ae6ad9c1da590b083c200209";

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = Object.values(allChains);
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains, defaultChain: mainnet });

export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <Home />
    </WagmiConfig>
  );
}
