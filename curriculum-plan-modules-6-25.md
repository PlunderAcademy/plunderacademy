# 🏴‍☠️ Plunder Academy Curriculum Plan: Modules 6-24

## Overview

This document outlines the focused smart contract development curriculum for Plunder Academy modules 6-24, building on the foundation established in modules 1-5. The curriculum is organized into 5 main sections with practical deployments using battle-tested contracts.

**Total Modules:** 19 additional (24 total)
**Focus:** Practical EVM Solidity Development
**Practicals:** 6 major deployments using real contracts
**Interactive Elements:** Varied beyond quizzes (puzzles, code builders, simulators)
**Security Integration:** Security best practices woven throughout each section

---

## SECTION 2: Advanced Solidity (Modules 6-9)

Building on the token from Section 1

### Module 6: Advanced Solidity Foundations

- Contract inheritance patterns & abstract contracts
- Interface design and implementation
- Events and indexing for dApp integration
- Creating and using libraries
- OpenZeppelin ecosystem deep dive
- Contract-to-contract interactions

**Interactive Element:** *Code Completion* - Complete inheritance patterns, library imports, contract calls, and event indexing

### Module 7: Advanced Data Structures & Error Handling

- Complex mappings, structs, and arrays
- Storage vs memory vs calldata optimization
- Custom errors and gas-efficient error handling
- Revert patterns and error recovery
- Security Patterns: Reentrancy guards, access control modifiers
- Checks-Effects-Interactions pattern

**Interactive Element:** *Quiz* - Multiple choice on gas optimization, error patterns, and security vulnerabilities

### Module 8: Testing Fundamentals

- Testing framework setup (Hardhat with Foundry)
- Unit testing patterns and best practices
- Test-driven development for smart contracts
- Testing state changes and events
- Security-focused testing basics

**Interactive Element:** *Code Completion* - Complete test functions and security tests

### Module 9: Staking Concepts & Time-Based Logic

- Staking contract architecture and patterns
- Time-based logic: block.timestamp, durations, locks
- Reward calculation algorithms
- Custom modifiers for time constraints
- Staking security considerations

**Interactive Element:** *Configuration Builder* - Set staking parameters and reward rates

### Module 10: PRACTICAL 🎯

Deploy: Staking Contract

- Stake tokens created in previous modules
- Time-locked staking with reward distribution
- Withdrawal mechanisms and penalties
- Event logging for frontend integration
- Comprehensive testing including edge cases

## SECTION 3: NFT Development (Modules 11-13)

Focused NFT mastery - condensed for efficiency

### Module 11: ERC721 Standards & Implementation

- ERC721 core implementation
- Enumerable and burnable extensions
- Gas-efficient minting strategies
- NFT security considerations: Access control and mint limits
- Basic metadata handling

**Interactive Element:** *Code Completion* - Complete NFT contract functions and security checks

### Module 12: Advanced NFT Features

- Metadata standards and best practices
- IPFS integration basics
- Reveal mechanics and placeholder URIs
- Royalty standards (EIP-2981)
- Multi-phase minting concepts

**Interactive Element:** *Configuration Builder* - Set up metadata URIs and minting phases

### Module 13: ERC1155 Multi-Token Standards

- ERC1155 implementation and use cases
- Batch operations and gas efficiency
- Gaming asset patterns
- When to use ERC721 vs ERC1155

**Interactive Element:** *Quiz* - Multiple choice on token standard selection and use cases

### Module 14: PRACTICAL 🎯

Deploy: NFT Collection

- ERC721 with reveal mechanics
- Royalty implementation
- Multi-phase minting system
- IPFS metadata integration
- Gas optimization strategies

---

## SECTION 4: Blockchain Concepts & Patterns (Modules 15-18)

Consolidated blockchain concepts with double practicals using real contracts

### Module 15: DeFi Fundamentals & Simple Swaps

- Token economics and liquidity concepts
- Simple swap mechanics (deposit token A for token B at set rate)
- Understanding slippage and price impact
- DeFi security considerations
- Contract-to-contract token transfers

**Interactive Element:** *Configuration Builder* - Set swap parameters and exchange rates

### Module 16: Oracles & Randomness

- Oracle problem and solutions
- Commit-reveal patterns for fair randomness
- Time-based commitments and reveals
- Preventing manipulation and front-running
- Simple lottery/gaming mechanics using commit-reveal

**Interactive Element:** *Drag & Drop* - Order commit-reveal steps and timing

### Module 17: Access Control & Airdrop Patterns

- Role-based access control patterns
- Airdrops for gas efficiency
- Whitelist and claiming mechanisms
- Multi-signature patterns
- Emergency pause and recovery patterns

**Interactive Element:** *Deploy: Airdropper Contract* - Airdrop functions

### Module 18: PRACTICAL 🎯

Deploy: Random Number Generator with Commit/Reveal

- Fair randomness using commit-reveal pattern
- Time-locked commitments
- Reveal verification and number generation
- Anti-manipulation safeguards
- Integration with gaming or lottery mechanics

---

## SECTION 5: Advanced Patterns (Modules 19-20)

Professional development patterns and optimization

### Module 19: Proxy Patterns & Upgradeability

- Transparent vs UUPS proxy patterns
- Storage collision prevention
- Upgrade safety considerations
- OpenZeppelin upgrades framework
- Emergency pause patterns

**Interactive Element:** *Quiz* - Multiple choice on proxy patterns and upgrade safety

### Module 20: Gas Optimization & Security Patterns

- Advanced gas optimization techniques
- Storage packing and slot optimization
- Common vulnerability patterns and prevention
- Security checklist and audit preparation
- Performance measurement and profiling

**Interactive Element:** *Code Completion* - Complete optimization patterns and security checks

### Module 21: PRACTICAL 🎯

Deploy: Upgradable Contract

- Implement upgradable contract using proven template
- Safe upgrade mechanisms
- Storage layout management
- Version control and migration strategies
- Testing upgrade scenarios

---

## SECTION 6: Frontend Integration (Modules 22-23)

Essential Web3 frontend skills for contract interaction

### Module 22: Web3 Frontend Basics

- Wallet connection with RainbowKit
- Web3 libraries: viem and wagmi basics
- Reading contract data (view functions)
- Network switching and chain management
- Basic error handling patterns

**Interactive Element:** *Code Completion* - Complete wallet connection and contract reading

### Module 23: Contract Interactions & Error Handling

- Writing to contracts (transactions)
- Transaction status monitoring
- Gas estimation and fee management
- Error handling and user feedback
- Event listening and real-time updates

**Interactive Element:** *Code Completion* - Complete transaction handling and error management

### Module 24: PRACTICAL 🎯

Build: Simple dApp Interface

- Connect wallet with RainbowKit
- Display token balances and contract data
- Execute contract functions (mint, transfer, stake)
- Show transaction history and status
- Handle common errors gracefully
- Mobile-responsive design

## OPTIONAL MODULE 25: Advanced Security Patterns 🔒 (Future Addition)

Advanced security aligned with AI auditor

- AI auditor findings interpretation
- Security checklist and audit preparation  
- Common vulnerability patterns deep dive
- Incident response and emergency procedures
- Advanced attack vectors and prevention
- Smart contract audit methodology

**Interactive Element:** *Security Audit Simulator* - Upload contracts to AI reviewer and practice interpreting results
**Integration:** Direct connection to AI reviewer tool with guided security analysis

*Note: This module will be developed as part of a future security-focused expansion.*

---

## Interactive Element Types (4 Total + Quizzes)

### 1. Code Completion

**Description:** Fill-in-the-blank style coding exercises
**Usage:** Complete contract functions, imports, security implementations, frontend integration
**Modules:** 6, 8, 11, 17, 20, 22, 23

### 2. Drag & Drop

**Description:** Ordering and sequencing interactive elements  
**Usage:** Order process steps, sequence operations, match concepts
**Modules:** 16

### 3. Configuration Builder

**Description:** Parameter setting with sliders and interactive inputs
**Usage:** Contract parameters, staking rates, swap rates, metadata configuration
**Modules:** 9, 12, 15

### 4. Traditional Quiz

**Description:** Multiple choice questions
**Usage:** Knowledge assessment on concepts, security patterns, and best practices
**Modules:** 7, 13, 19

---

## Practical Deployment Summary

1. **Module 10:** Staking Contract (time-locked staking, rewards, withdrawal mechanisms)
2. **Module 14:** NFT Collection with Reveal Mechanics and Royalties
3. **Module 17:** Airdropper Contract (Airdrops, access control)
4. **Module 18:** Random Number Generator (commit-reveal pattern)
5. **Module 21:** Upgradable Contract (proxy patterns, safe upgrades)
6. **Module 24:** Simple dApp Interface (wallet connection, contract interactions)

---

*This focused curriculum covers smart contract development fundamentals, NFT creation, essential blockchain patterns, upgradeability, and basic frontend integration in 19 streamlined modules. The 6 practical deployments provide hands-on experience with real-world contracts, ensuring graduates can immediately contribute to EVM development projects.*
