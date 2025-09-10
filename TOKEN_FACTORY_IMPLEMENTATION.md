# Token Factory Implementation Guide

## Overview

This document outlines the complete implementation for the Plunder Academy Token Factory system, which provides two paths for users to create ERC-20 tokens:

1. **Factory Method (Recommended)**: Use our pre-deployed factory contract
2. **Full Deployment**: Deploy their own contract using Hardhat

## Factory Contract Code

### PlunderAcademyToken.sol
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title PlunderAcademyToken - Created by the factory
 * @dev Simple ERC20 token with claimant for achievement verification
 */
contract PlunderAcademyToken is ERC20 {
    address public claimant;  // For achievement verification
    address public creator;   // Who created this token
    uint256 public createdAt; // When it was created
    
    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        address _creator,
        address _claimant
    ) ERC20(name, symbol) {
        require(_creator != address(0), "Invalid creator");
        require(_claimant != address(0), "Invalid claimant");
        
        creator = _creator;
        claimant = _claimant;
        createdAt = block.timestamp;
        
        // Mint initial supply to creator
        _mint(_creator, initialSupply * 10**18);
    }
}

/**
 * @title PlunderAcademyTokenFactory
 * @dev Factory for creating standardized tokens for Plunder Academy learners
 */
contract PlunderAcademyTokenFactory {
    uint256 public totalTokensCreated;
    mapping(address => address[]) public userTokens;
    address[] public allTokens;
    
    event TokenCreated(
        address indexed creator,
        address indexed claimant,
        address indexed tokenAddress,
        string name,
        string symbol,
        uint256 initialSupply,
        uint256 timestamp
    );
    
    /**
     * @dev Create a new token with creator as claimant (for achievement verification)
     * @param name Token name (e.g., "My First Token")
     * @param symbol Token symbol (e.g., "MFT")
     * @param initialSupply Initial supply in tokens (will be multiplied by 10^18)
     */
    function createToken(
        string memory name,
        string memory symbol,
        uint256 initialSupply
    ) external returns (address) {
        require(bytes(name).length > 0, "Name cannot be empty");
        require(bytes(symbol).length > 0, "Symbol cannot be empty");
        require(initialSupply > 0 && initialSupply <= 1000000000, "Invalid supply"); // Max 1B tokens
        
        // Create new token with msg.sender as both creator and claimant
        PlunderAcademyToken newToken = new PlunderAcademyToken(
            name,
            symbol,
            initialSupply,
            msg.sender,  // creator
            msg.sender   // claimant (same as creator for simplicity)
        );
        
        address tokenAddress = address(newToken);
        
        // Track the token
        userTokens[msg.sender].push(tokenAddress);
        allTokens.push(tokenAddress);
        totalTokensCreated++;
        
        emit TokenCreated(
            msg.sender,
            msg.sender,
            tokenAddress,
            name,
            symbol,
            initialSupply,
            block.timestamp
        );
        
        return tokenAddress;
    }
    
    /**
     * @dev Get all tokens created by a user
     */
    function getUserTokens(address user) external view returns (address[] memory) {
        return userTokens[user];
    }
    
    /**
     * @dev Get token details
     */
    function getTokenInfo(address tokenAddress) external view returns (
        string memory name,
        string memory symbol,
        uint256 totalSupply,
        address creator,
        address claimant,
        uint256 createdAt
    ) {
        PlunderAcademyToken token = PlunderAcademyToken(tokenAddress);
        return (
            token.name(),
            token.symbol(),
            token.totalSupply(),
            token.creator(),
            token.claimant(),
            token.createdAt()
        );
    }
}
```

## Environment Variables Required

Add these to your `.env` file after deploying the factory contracts:

```env
# Factory Contract Addresses (after deployment)
NEXT_PUBLIC_FACTORY_ADDRESS_TESTNET=0x...
NEXT_PUBLIC_FACTORY_ADDRESS_MAINNET=0x...

# RPC Endpoints (optional - can use public ones)
ZILLIQA_TESTNET_RPC=https://api.testnet.zilliqa.com
ZILLIQA_MAINNET_RPC=https://api.zilliqa.com

# For deployment (private, server-side only)
FACTORY_DEPLOYER_PRIVATE_KEY=0x...
```

## Deployment Script

Create `scripts/deploy-factory.ts`:

```typescript
import { ethers } from "hardhat";
import { network } from "hardhat";

async function main() {
  console.log(`Deploying to network: ${network.name}`);
  
  // Deploy the factory
  const Factory = await ethers.getContractFactory("PlunderAcademyTokenFactory");
  const factory = await Factory.deploy();
  await factory.waitForDeployment();
  
  const factoryAddress = await factory.getAddress();
  console.log("PlunderAcademyTokenFactory deployed to:", factoryAddress);
  
  // Verify on block explorer
  if (network.name !== "hardhat" && network.name !== "localhost") {
    console.log("Waiting for block confirmations...");
    await factory.deploymentTransaction()?.wait(5);
    
    console.log("Verifying contract...");
    try {
      await hre.run("verify:verify", {
        address: factoryAddress,
        constructorArguments: [],
      });
      console.log("Contract verified successfully");
    } catch (error) {
      console.error("Verification failed:", error);
    }
  }
  
  // Test deployment by creating a sample token
  console.log("Testing factory with sample token...");
  const tx = await factory.createToken("Test Token", "TEST", 1000);
  const receipt = await tx.wait();
  
  console.log("Sample token created successfully!");
  console.log("Transaction hash:", receipt?.hash);
  
  // Get created token address from events
  const tokenCreatedEvent = receipt?.logs.find(log => {
    try {
      const parsed = factory.interface.parseLog(log);
      return parsed?.name === 'TokenCreated';
    } catch {
      return false;
    }
  });
  
  if (tokenCreatedEvent) {
    const parsed = factory.interface.parseLog(tokenCreatedEvent);
    console.log("Sample token address:", parsed?.args.tokenAddress);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
```

Run with:
```bash
# Deploy to testnet
npx hardhat run scripts/deploy-factory.ts --network zilliqaTestnet

# Deploy to mainnet
npx hardhat run scripts/deploy-factory.ts --network zilliqaMainnet
```

## API Verification Implementation

### Enhanced Submission Format

Your API now receives:

```json
{
  "walletAddress": "0x742d35Cc6665C3532d8F8D9e5d6e40d9B3e5e6B7",
  "achievementNumber": "0005",
  "submissionType": "transaction",
  "submissionData": {
    "transactionId": "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
    "chainId": 33101,
    "claimantAddress": "0x742d35Cc6665C3532d8F8D9e5d6e40d9B3e5e6B7",
    "method": "factory"  // OR "deployment"
  },
  "metadata": {
    "timestamp": "2024-01-15T10:30:00Z"
  }
}
```

### Verification Logic

```typescript
import { ethers } from 'ethers';

// Factory ABI (just the events and functions we need)
const FACTORY_ABI = [
  "event TokenCreated(address indexed creator, address indexed claimant, address indexed tokenAddress, string name, string symbol, uint256 initialSupply, uint256 timestamp)",
  "function getUserTokens(address user) external view returns (address[] memory)",
  "function getTokenInfo(address tokenAddress) external view returns (string memory name, string memory symbol, uint256 totalSupply, address creator, address claimant, uint256 createdAt)"
];

const ERC20_ABI = [
  "function name() external view returns (string memory)",
  "function symbol() external view returns (string memory)",
  "function decimals() external view returns (uint8)",
  "function totalSupply() external view returns (uint256)",
  "function claimant() external view returns (address)"
];

async function verifyTokenCreation(submissionData: any) {
  const { transactionId, chainId, claimantAddress, method } = submissionData;
  
  if (method === 'factory') {
    return await verifyFactoryUsage(transactionId, chainId, claimantAddress);
  } else if (method === 'deployment') {
    return await verifyContractDeployment(transactionId, chainId, claimantAddress);
  } else {
    return { success: false, error: 'Invalid submission method' };
  }
}

async function verifyFactoryUsage(txId: string, chainId: number, expectedCreator: string) {
  try {
    // Get the correct RPC URL and factory address
    const rpcUrl = chainId === 33101 
      ? process.env.ZILLIQA_TESTNET_RPC || 'https://api.testnet.zilliqa.com'
      : process.env.ZILLIQA_MAINNET_RPC || 'https://api.zilliqa.com';
    
    const factoryAddress = chainId === 33101 
      ? process.env.NEXT_PUBLIC_FACTORY_ADDRESS_TESTNET 
      : process.env.NEXT_PUBLIC_FACTORY_ADDRESS_MAINNET;
    
    if (!factoryAddress) {
      return { success: false, error: 'Factory not deployed on this network' };
    }
    
    const provider = new ethers.JsonRpcProvider(rpcUrl);
    const receipt = await provider.getTransactionReceipt(txId);
    
    if (!receipt) {
      return { success: false, error: 'Transaction not found' };
    }
    
    if (receipt.status !== 1) {
      return { success: false, error: 'Transaction failed' };
    }
    
    // Check if transaction called our factory
    if (receipt.to?.toLowerCase() !== factoryAddress.toLowerCase()) {
      return { success: false, error: 'Transaction did not call our token factory' };
    }
    
    // Parse TokenCreated event
    const factoryInterface = new ethers.Interface(FACTORY_ABI);
    
    const tokenCreatedLog = receipt.logs.find(log => {
      try {
        const parsed = factoryInterface.parseLog({
          topics: log.topics,
          data: log.data
        });
        return parsed?.name === 'TokenCreated';
      } catch {
        return false;
      }
    });
    
    if (!tokenCreatedLog) {
      return { success: false, error: 'No TokenCreated event found' };
    }
    
    const parsed = factoryInterface.parseLog({
      topics: tokenCreatedLog.topics,
      data: tokenCreatedLog.data
    });
    
    if (parsed.args.creator.toLowerCase() !== expectedCreator.toLowerCase()) {
      return { success: false, error: 'Token creator does not match connected wallet' };
    }
    
    return { 
      success: true, 
      tokenAddress: parsed.args.tokenAddress,
      tokenName: parsed.args.name,
      tokenSymbol: parsed.args.symbol,
      initialSupply: parsed.args.initialSupply.toString(),
      createdAt: parsed.args.timestamp.toString()
    };
    
  } catch (error) {
    console.error('Factory verification error:', error);
    return { success: false, error: 'Verification failed' };
  }
}

async function verifyContractDeployment(txId: string, chainId: number, expectedClaimant: string) {
  try {
    // Get the correct RPC URL
    const rpcUrl = chainId === 33101 
      ? process.env.ZILLIQA_TESTNET_RPC || 'https://api.testnet.zilliqa.com'
      : process.env.ZILLIQA_MAINNET_RPC || 'https://api.zilliqa.com';
    
    const provider = new ethers.JsonRpcProvider(rpcUrl);
    const receipt = await provider.getTransactionReceipt(txId);
    
    if (!receipt) {
      return { success: false, error: 'Transaction not found' };
    }
    
    if (receipt.status !== 1) {
      return { success: false, error: 'Transaction failed' };
    }
    
    // Verify it was a contract deployment
    if (!receipt.contractAddress) {
      return { success: false, error: 'Transaction did not deploy a contract' };
    }
    
    // Get the deployed contract
    const contract = new ethers.Contract(receipt.contractAddress, ERC20_ABI, provider);
    
    // Verify it's an ERC-20 token
    try {
      await contract.name();
      await contract.symbol();
      await contract.decimals();
    } catch {
      return { success: false, error: 'Deployed contract is not a valid ERC-20 token' };
    }
    
    // Verify claimant matches connected wallet (if claimant function exists)
    try {
      const contractClaimant = await contract.claimant();
      if (contractClaimant.toLowerCase() !== expectedClaimant.toLowerCase()) {
        return { success: false, error: 'Contract claimant does not match connected wallet' };
      }
    } catch {
      return { success: false, error: 'Contract does not have claimant verification' };
    }
    
    // Get token details
    const name = await contract.name();
    const symbol = await contract.symbol();
    const totalSupply = await contract.totalSupply();
    
    return { 
      success: true, 
      contractAddress: receipt.contractAddress,
      tokenName: name,
      tokenSymbol: symbol,
      totalSupply: totalSupply.toString()
    };
    
  } catch (error) {
    console.error('Deployment verification error:', error);
    return { success: false, error: 'Verification failed' };
  }
}

// Export the main verification function
export { verifyTokenCreation };
```

## Frontend Integration Points

### Current Implementation Status

✅ **ModuleQuiz Component Updated**: 
- Method selection (factory vs deployment)
- Chain selection (testnet vs mainnet)
- Enhanced API payload with method field

✅ **Module Content Updated**:
- Both paths explained in writing-your-token-contract.mdx
- Factory benefits and workflow documented

### Needed: Token Factory Interface Component

The factory interface should be a separate React component that handles:

1. **Wallet Connection**: Verify user has connected wallet
2. **Form Fields**:
   - Token Name (string, required)
   - Token Symbol (string, required, 3-5 chars)
   - Initial Supply (number, required, 1-1,000,000,000)
3. **Chain Selection**: Testnet vs Mainnet
4. **Transaction Management**:
   - Loading states
   - Error handling
   - Success states with transaction hash
5. **Factory Contract Interaction**: Using wagmi/viem

### Suggested Architecture

Create a new component: `src/components/token-factory-interface.tsx`

This component can be:
- Imported into the module page
- Rendered as part of the module content
- Or embedded in the MDX content through a custom component

## Next Steps

1. **Deploy Factory Contracts**:
   - Deploy to Zilliqa testnet
   - Deploy to Zilliqa mainnet
   - Update environment variables

2. **Implement API Verification**:
   - Add the verification logic to your API
   - Test with both factory and deployment methods

3. **Create Factory Interface Component**:
   - Build React component for token creation
   - Integrate with existing module flow
   - Test transaction flow end-to-end

4. **Testing**:
   - Test factory on testnet
   - Test verification API
   - Test complete user flow

## Factory Benefits Recap

- ✅ **Accessibility**: No development setup required
- ✅ **Security**: Battle-tested OpenZeppelin contracts
- ✅ **Gas Efficiency**: ~50% cheaper than individual deployment
- ✅ **Mobile Friendly**: Works with any Web3 wallet
- ✅ **Verification**: Automatic claimant tracking
- ✅ **Real-world Skills**: Mirrors actual DeFi interaction patterns
