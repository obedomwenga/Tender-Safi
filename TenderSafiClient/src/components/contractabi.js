export const TenderSafiContractAbi =[
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_tenderSafiTokens",
          "type": "address"
        }
      ],
      "name": "activateTenderSafiTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_tenderbidsIndex",
          "type": "uint256"
        }
      ],
      "name": "approveTender",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "approves",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "buyTenderSafiTokens",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "changeconstTendersafiamount",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "deleteTender",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTotalBindsLength",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getconstApprovedAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getconstChargePerPost",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getconstTendersafiamount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_tenderbidsIndex",
          "type": "uint256"
        }
      ],
      "name": "onlyApproveTender",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "readBiderDetails",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address payable",
              "name": "bidowner",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "companyName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "contact",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "goodsDealsWith",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "tenderOwnerName",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "bidsTenderIndex",
              "type": "uint256"
            },
            {
              "internalType": "enum Bider.statuschoices",
              "name": "choice",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "goodsDescription",
              "type": "string"
            }
          ],
          "internalType": "struct Bider.biderDetails[]",
          "name": "props",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "readTenderDetails",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address payable",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "companyName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "tenderDescription",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "deadlineDate",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "contactEmail",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "phoneNumber",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "tenderAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "tendersindex",
              "type": "uint256"
            }
          ],
          "internalType": "struct TenderPoster.TenderDetails[]",
          "name": "props",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_tenderbidsIndex",
          "type": "uint256"
        }
      ],
      "name": "rejectTender",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "senderBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tenderTotals",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_tenderIndex",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_companyName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_contact",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_goodsDealsWith",
          "type": "string"
        }
      ],
      "name": "writeBiderDetails",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_companyName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_tenderDescription",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_deadlineDate",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_contactEmail",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_phoneNumber",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_tenderAmount",
          "type": "uint256"
        }
      ],
      "name": "writeTenderDetails",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ]

  