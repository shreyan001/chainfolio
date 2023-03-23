import React from 'react';
import { ConnectButton } from "@rainbow-me/rainbowkit";


const Crossfolio = () => {
  return (
    <div className="container">
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
          <button className="btn1">Get Started</button>
          <button className="btn1 mx-4">Learn More</button>
          </div>
         </div> <img src="/landing.svg" alt="Crossfolio" />
      </div>
    </div>
  );
};

export default Crossfolio;
