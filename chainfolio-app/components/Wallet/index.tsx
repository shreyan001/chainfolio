import {BrowserProvider, ethers, getDefaultProvider, Signer } from "ethers";
declare var window: any


interface IWalletProps {
    setWalletAddress:any,
    setSigner: any,
    setIsWalletConnected: any
}

export const WalletConnect: React.FC<IWalletProps> = ({setIsWalletConnected, setSigner, setWalletAddress }) => {


    async function handleWalletConnect() {

        if (window.ethereum) {
            let _provider = null;
            let _signer = null;
            _provider = new BrowserProvider(window.ethereum)
            _signer = await _provider.getSigner();
            let _address = await _signer.getAddress();
            _address = ethers.getAddress(_address)
            setWalletAddress(_address)
            setSigner(_signer)
            setIsWalletConnected(true)

        } else {
            alert('Install Metamask');
        }
    }
    return (
        <>
            Hello World

            <button onClick={handleWalletConnect}> connect to metamask</button>
        </>
    )
}
