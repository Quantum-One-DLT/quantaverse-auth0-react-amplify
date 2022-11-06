import React from "react";
import { useEffect, useState } from "react"
import { useConnectWallet } from "@web3-onboard/react"
import { ethers, ethersProvider } from "ethers"

const ConnectWallet = () => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
  const [ethersProvider, setProvider] = useState(ethers.providers.Web3Provider | null)()

  useEffect(() => {
    // If the wallet has a provider than the wallet is connected
    if (wallet?.provider) {
      setProvider(new ethers.providers.Web3Provider(wallet.provider, "any"))
    }
  }, [wallet])

  return (
    <div>
      <button className="btn" disabled={connecting} onClick={connect}>
        Connect
      </button>
    </div>
  )
};

export default ConnectWallet;