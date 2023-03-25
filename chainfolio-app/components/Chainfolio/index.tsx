import { CHAINFOLIO_CONTRACT_ABI, CHAINFOLIO_CONTRACT_ADDRESS } from "@/constants";
import { stringifyAttestationBytes, encodeRawKey } from "@eth-opti mism/atst";
import { BrowserProvider, Contract, encodeBytes32String, ethers, getDefaultProvider, hexlify, isBytesLike, parseUnits, Signer } from "ethers";

declare var window: any

interface IChainfolioAttestation {
    signer: Signer
}




export const ChainfolioAttestation: React.FC<IChainfolioAttestation> = ({ signer }) => {



    async function testData() {


        try {
            console.log(signer)
            const contract = new Contract(CHAINFOLIO_CONTRACT_ADDRESS, CHAINFOLIO_CONTRACT_ABI, signer);
            console.log(contract)
            let txn = await contract.setData(workList)
            txn = await txn.wait();
            console.log('data added show txn data in smart contract')
            alert('TXN DONE CHECK LOG')
            console.log(txn)

        } catch (error) {
            console.log(error)
        }


    }


    return (
        <>
            <button onClick={testData}>set data</button>
        </>
    )
}

interface IWorkList {
    about: string,
    key: string,
    val: string
}


export const workList: IWorkList[] = [
    {
        about: "0x6B4c696B623FA9A2A6D5b6E9101Ef19CD973bc3C",
        key: "Example Org 1",
        val: "Contributed to project X",
    },
    {
        about: "0x6B4c696B623FA9A2A6D5b6E9101Ef19CD973bc3C",
        key: "Example Org 2",
        val: "Developed feature Y",
    },
    {
        about: "0x6B4c696B623FA9A2A6D5b6E9101Ef19CD973bc3C",
        key: "Example Org 3",
        val: "Designed UI for project Z",
    },
    {
        about: "0x6B4c696B623FA9A2A6D5b6E9101Ef19CD973bc3C",
        key: "Example Org 4",
        val: "Mentored new team members",
    },
    {
        about: "0x6B4c696B623FA9A2A6D5b6E9101Ef19CD973bc3C",
        key: "Example Org 5",
        val: "Organized community events",
    },
    {
        about: "0x6B4c696B623FA9A2A6D5b6E9101Ef19CD973bc3C",
        key: "Example Org 5",
        val: "Organized community events",
    },
    {
        about: "0x6B4c696B623FA9A2A6D5b6E9101Ef19CD973bc3C",
        key: "Example Org 5",
        val: "Organized community events",
    },
];



// interface IWorkList2 {
//     about: string,
//     key: any,
//     val: any
// }

// about about;
// bytes32 key;
// bytes val;

// hexlify
// const myBytes32: ethers.BytesLike = ethers.hexlify("xsdccsdc");
        // 1. convert data to bytes
        // let finaldata: IWorkList2[] = [];
        // for (let i = 0; i < workList.length; i++) {
        //     let temp: IWorkList = workList[i];

        //     let xn: IWorkList2 = { about: temp.about, key: encodeBytes32String(temp.key), val: encodeBytes32String(temp.val) };
        //     finaldata.push(xn)
        // }


        // // 2. call smart contract
