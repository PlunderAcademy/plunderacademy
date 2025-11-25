export const trainingRegistryABI = [
  // Events
  {
    type: "event",
    name: "IssuerUpdated",
    inputs: [
      { name: "issuer", type: "address", indexed: true },
      { name: "allowed", type: "bool", indexed: false }
    ]
  },
  {
    type: "event",
    name: "TaskCompleted",
    inputs: [
      { name: "taskCode", type: "uint256", indexed: true },
      { name: "wallet", type: "address", indexed: true }
    ]
  },
  {
    type: "event",
    name: "BaseURISet",
    inputs: [
      { name: "newBaseURI", type: "string", indexed: false }
    ]
  },
  {
    type: "event",
    name: "UriPadDigitsSet",
    inputs: [
      { name: "newPadDigits", type: "uint8", indexed: false }
    ]
  },
  // ERC1155 Transfer event for badges
  {
    type: "event",
    name: "TransferSingle",
    inputs: [
      { name: "operator", type: "address", indexed: true },
      { name: "from", type: "address", indexed: true },
      { name: "to", type: "address", indexed: true },
      { name: "id", type: "uint256", indexed: false },
      { name: "value", type: "uint256", indexed: false }
    ]
  },
  
  // Main Functions
  {
    type: "function",
    name: "submitVoucher",
    stateMutability: "nonpayable",
    inputs: [
      { name: "taskCode", type: "uint256" },
      { name: "signature", type: "bytes" }
    ],
    outputs: []
  },
  
  // View Functions
  {
    type: "function",
    name: "getWalletAchievements",
    stateMutability: "view",
    inputs: [
      { name: "wallet", type: "address" }
    ],
    outputs: [
      { name: "", type: "uint256[]" }
    ]
  },
  {
    type: "function",
    name: "hasAchievement",
    stateMutability: "view",
    inputs: [
      { name: "wallet", type: "address" },
      { name: "tokenId", type: "uint256" }
    ],
    outputs: [
      { name: "", type: "bool" }
    ]
  },
  {
    type: "function",
    name: "completed",
    stateMutability: "view",
    inputs: [
      { name: "wallet", type: "address" },
      { name: "taskCode", type: "uint256" }
    ],
    outputs: [
      { name: "", type: "bool" }
    ]
  },
  {
    type: "function",
    name: "isIssuer",
    stateMutability: "view",
    inputs: [
      { name: "issuer", type: "address" }
    ],
    outputs: [
      { name: "", type: "bool" }
    ]
  },
  {
    type: "function",
    name: "uriPadDigits",
    stateMutability: "view",
    inputs: [],
    outputs: [
      { name: "", type: "uint8" }
    ]
  },
  {
    type: "function",
    name: "uri",
    stateMutability: "view",
    inputs: [
      { name: "tokenId", type: "uint256" }
    ],
    outputs: [
      { name: "", type: "string" }
    ]
  },
  
  // ERC1155 Standard Functions
  {
    type: "function",
    name: "balanceOf",
    stateMutability: "view",
    inputs: [
      { name: "account", type: "address" },
      { name: "id", type: "uint256" }
    ],
    outputs: [
      { name: "", type: "uint256" }
    ]
  },
  {
    type: "function",
    name: "balanceOfBatch",
    stateMutability: "view",
    inputs: [
      { name: "accounts", type: "address[]" },
      { name: "ids", type: "uint256[]" }
    ],
    outputs: [
      { name: "", type: "uint256[]" }
    ]
  },
  
  // Admin Functions (for demo purposes)
  {
    type: "function",
    name: "setIssuer",
    stateMutability: "nonpayable",
    inputs: [
      { name: "issuer", type: "address" },
      { name: "allowed", type: "bool" }
    ],
    outputs: []
  },
  {
    type: "function",
    name: "pause",
    stateMutability: "nonpayable",
    inputs: [],
    outputs: []
  },
  {
    type: "function",
    name: "unpause",
    stateMutability: "nonpayable",
    inputs: [],
    outputs: []
  }
] as const;

export type TrainingRegistryABI = typeof trainingRegistryABI;
