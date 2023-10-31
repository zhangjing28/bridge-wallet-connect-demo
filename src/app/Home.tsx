"use client";
import { useWeb3Modal, useWeb3ModalState } from "@web3modal/wagmi/react";
import { useAccount, useDisconnect, useNetwork, useSwitchNetwork } from "wagmi";

const Home = () => {
  const { open } = useWeb3Modal();
  const { switchNetworkAsync } = useSwitchNetwork();
  const { selectedNetworkId } = useWeb3ModalState();
  const { chain } = useNetwork();
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  const switchToOtherChain = async (chainId: number) => {
    if (!switchNetworkAsync) {
      return;
    }
    await switchNetworkAsync(chainId);
  };

  return (
    <div className="mx-auto flex flex-col max-w-[max-content]">
      <h3
        className="border border-cyan-500 mt-4 p-2"
        onClick={() => disconnect()}
      >
        connected to {address}, current chain: {chain?.id}
      </h3>
      {chain?.id !== selectedNetworkId && (
        <p className="text-red-600 mt-4 p-2">
          The current chain id get from "useNetwork" is(
          {chain?.id ?? "undefined"}) not the same as selectedNetworkId(
          {selectedNetworkId}) get from "useWeb3ModalState"
        </p>
      )}

      <button
        className="border border-cyan-500 mt-4 p-2"
        disabled={!!address}
        onClick={() => open()}
      >
        connect wallet
      </button>
      <button
        className="border border-cyan-500 mt-4 p-2"
        onClick={() => switchToOtherChain(5)}
      >
        switch to goerli
      </button>
      <button
        className="border border-cyan-500 mt-4 p-2"
        onClick={() => switchToOtherChain(3441005)}
      >
        switch to manta pacific testnet
      </button>
    </div>
  );
};

export default Home;
