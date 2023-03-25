export const CHAINFOLIO_CONTRACT_ADDRESS: string = "0x83eA0a0F3ee64c7dde080954a3470375b3caE0bC" // optimisim testnet


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
                        "internalType": "string",
                        "name": "key",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "val",
                        "type": "string"
                    }
                ],
                "internalType": "struct Chainfolio.IAttestationData[]",
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
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "str",
                "type": "string"
            }
        ],
        "name": "stringToBytes",
        "outputs": [
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "str",
                "type": "string"
            }
        ],
        "name": "stringToBytes32",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    }
]
