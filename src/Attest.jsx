import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { Attestooooooor } from "./components";

export function Attest() {
  /**
   * Wagmi hook for getting account information
   * @see https://wagmi.sh/docs/hooks/useAccount
   */
  const { isConnected } = useAccount();

  return (
    <div className="container">
   <nav className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Crossfolio logo" />
          <h1>Crossfolio</h1>
        </div>
        <ConnectButton/>
      </nav>
      
      {isConnected && (
        <>
          <hr />
          <Attestooooooor />
          <hr />
        </>
      )}
    </div>
  );
}
