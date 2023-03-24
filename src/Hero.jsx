import React from 'react';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAccount } from 'wagmi';

const Crossfolio = () => {
  const {isConnected} = useAccount();
  const navigate = useNavigate();
  return (
    <div className="container">
     <ToastContainer />
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="Crossfolio logo" />
          <h1>Crossfolio</h1>
        </div>
        <ConnectButton/>
      </nav>
      <div className="hero">
     <div className='text-holder'>
        <h2 className='my-4'>Showcase Your Cross-Chain Contributions</h2>
        <p className='my-2'>Are you a blockchain developer, community contributor, or avid blockchain enthusiast? Crossfolio is the perfect way to showcase your cross-chain contributions and build your reputation in the decentralized ecosystem.</p>
        <div className="hero-buttons">
          <button onClick={()=>{if(isConnected){navigate('/create')} else{toast.error('Please connect your wallet')}}}
           className="btn1">Get Started</button>
        <a href='https://github.com/shreyan001/chainfolio' target='_blank'> <button className="btn1 mx-4">Learn More</button></a> 
          </div>
         </div> <img src="/landing.svg" alt="Crossfolio" />
      </div>
    </div>
  );
};

export default Crossfolio;
