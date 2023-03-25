import Head from 'next/head'
import Image from 'next/image'
import { BrowserProvider, ethers, getDefaultProvider, parseUnits, Signer } from "ethers";
import { Provider, useState } from 'react';
import { WalletConnect } from '@/components/Wallet';
import { ChainfolioAttestation } from '@/components/Chainfolio';
declare var window: any


export default function Home() {

  const [walletAddress, setWalletAddress] = useState<String>("");
  const [signer, setSigner] = useState<Signer>();
  const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false)


  return (
    <>
      Hello World


      {
        isWalletConnected ? (
          <div>

            {walletAddress}



            <ChainfolioAttestation signer={signer} />




          </div>
        ) :
          (

            <WalletConnect
              setIsWalletConnected={setIsWalletConnected}
              setSigner={setSigner}
              setWalletAddress={setWalletAddress}
            />
          )
      }

    </>
  )
}
