export const CHAINFOLIO_CONTRACT_ADDRESS: string = "0xb79d5fc1A56eD63F7C33817857eF38466126cD2D" // optimisim testnet


export const CHAINFOLIO_CONTRACT_ABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "creator",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "about",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "key",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "val",
                "type": "bytes"
            }
        ],
        "name": "AttestationCreated",
        "type": "event"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "about",
                        "type": "address"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "key",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes",
                        "name": "val",
                        "type": "bytes"
                    }
                ],
                "internalType": "struct IAttestationStation.AttestationData[]",
                "name": "_data",
                "type": "tuple[]"
            }
        ],
        "name": "setData",
        "outputs": [
            {
                "internalType": "bool",
                "name": "_isTxnDone",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_about",
                "type": "address"
            },
            {
                "internalType": "bytes32",
                "name": "_key",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "_val",
                "type": "bytes"
            }
        ],
        "name": "setSingleData",
        "outputs": [
            {
                "internalType": "bool",
                "name": "_isTxnDone",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]
