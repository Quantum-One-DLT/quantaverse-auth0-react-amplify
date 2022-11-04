import { useEffect } from "react"
import { useConnectWallet } from "@web3-onboard/react"
import { ethers } from "ethers"

const ConnectWallet = () => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
  const [ethersProvider, setProvider] = useState()

  useEffect(() => {
    // If the wallet has a provider than the wallet is connected
    if (wallet?.provider) {
      setProvider(new ethers.providers.Web3Provider(wallet.provider, "any"))
    }
  }, [wallet])

  return (
    <div>
      <button disabled={connecting} onClick={connect}>
        Connect
      </button>
    </div>
  )
};

export default ConnectWallet;