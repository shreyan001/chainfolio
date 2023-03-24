import React from 'react';
import { useEffect, useState } from 'react';
import './Component.css';
import Web3 from "web3";


const contractAddress = "0xe57b336779a346e6d2b6f82ddc38b3a21333c2c8"; // replace with your contract address
const userAddress = "0x7dfc5048581126dbb03c6e06a11ba3d63b6d39bb"; // replace with the user's address you want to fetch NFTs for



const abi = [
    {
      constant: true,
      inputs: [{ name: "_tokenId", type: "uint256" }],
      name: "tokenURI",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "from", type: "address" },
        { indexed: true, name: "to", type: "address" },
        { indexed: true, name: "tokenId", type: "uint256" },
      ],
      name: "Transfer",
      type: "event",
    },
  ];

const ComponentPage = ({ workList, nftList }) => {

    const [nfts, setNfts] = useState();
    const web3 = new Web3(
        new Web3.providers.HttpProvider(`https://polygon-mainnet.g.alchemy.com/v2/AfCiqxRK3Dbe3P796qZHxoLJKmgu9s76`),
        {
            headers: [{
              name: 'Access-Control-Allow-Origin',
              value: 'https://rinkeby.infura.io/v3/key'
            }]});
    useEffect(() => {
      const contract = new web3.eth.Contract(abi, contractAddress);
  
      const fetchNFTs = async () => {
        const transferEvents = await contract.getPastEvents("Transfer", {
          fromBlock: 0,
          toBlock: "latest",
          filter: { from: null, to: userAddress },
        });
  
        const nftObjects = [];

        await Promise.all(
          transferEvents.map(async (event) => {
            const tokenId = event.returnValues.tokenId.toString();
            const tokenURI = await contract.methods.tokenURI(tokenId).call();
            const metadata = await fetch(tokenURI).then((res) => res.json());
  
            const nft = {
              tokenId,
              name: metadata.name,
              description: metadata.description,
              image: metadata.image,
            };
  
            nftObjects.push(nft);
          })
        );
  
        setNfts([...nftObjects]);
        
      };
  
      fetchNFTs();
    }, []);
    
  
  return (<div className='w-full m-auto mt-20'>
    <div className="w-11/12 m-auto flex flex-col justify-center items-center">
    <div className='flex flex-row w-11/12 justify-around items-start'>
    <div className='list'>   {console.log(nfts) }
    <h2 className="work-list-title my-3">Your Contributions and bounties</h2>
      <div className="work-list">
      {workList.map((work, index) => (
          <div className="work-item" key={index}>
            <div className="work-item-badge">{work.orgName}</div>
            <div className="work-item-details">{work.contribution}</div>
          </div>
        ))}</div>
        <button className="mint-button">Mint</button>
      </div>
</div>
      <div className="nft-list-horizontal">
        {nfts?.map((nft, index) => (
          <img className="nft-item-horizontal" src={nft.image} alt={nft.title} key={index} />
        ))}
      </div>
    </div></div>
  );
};

export default ComponentPage;
