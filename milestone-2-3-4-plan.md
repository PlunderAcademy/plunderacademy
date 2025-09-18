# Plunder Academy Curriculum Plan: Extra Islands and Modules

## Overview

This document outlines the focused smart contract development curriculum for Plunder Academy modules 6-22, building on the foundation established in modules 1-5. The curriculum is organized into 4 main islands with practical deployments using battle-tested contracts.

**Total Modules:** 17 additional (22 total) then Module 23 to do in Milestone 3
**Focus:** Practical EVM Solidity Development
**Practicals:** 6 major deployments using real contracts
**Interactive Elements:** Varied beyond quizzes (puzzles, code builders, simulators)
**Security Integration:** Security best practices woven throughout each section

---

## Island 2: Advanced Solidity (Modules 1-5)

Building on the token from Island 1 (Jungle)

### Module 1: Advanced Solidity Foundations

- Contract inheritance patterns & abstract contracts
- Interface design and implementation
- Events and indexing for dApp integration
- Creating and using libraries
- OpenZeppelin ecosystem deep dive
- Contract-to-contract interactions

**Interactive Element:** *Code Completion* - Complete inheritance patterns, library imports, contract calls, and event indexing

### Module 2: Advanced Data Structures & Error Handling

- Complex mappings, structs, and arrays
- Storage vs memory vs calldata optimization
- Custom errors and gas-efficient error handling
- Revert patterns and error recovery
- Security patterns: Reentrancy guards, access control modifiers
- Checks-Effects-Interactions pattern

**Interactive Element:** *Quiz* - Multiple choice on gas optimization, error patterns, and security vulnerabilities

### Module 3: Testing Fundamentals

- Testing framework setup (Hardhat with Foundry)
- Unit testing patterns and best practices
- Test-driven development for smart contracts
- Testing state changes and events
- Security-focused testing basics

**Interactive Element:** *Code Completion* - Complete test functions and security tests

### Module 4: Staking Concepts & Time-Based Logic

- Staking contract architecture and patterns
- Time-based logic: block.timestamp, durations, locks
- Reward calculation algorithms
- Custom modifiers for time constraints
- Staking security considerations

**Interactive Element:** *Configuration Builder* - Set staking parameters and reward rates

### Module 5: PRACTICAL

Deploy: Staking Contract

- Stake tokens created in previous modules
- Time-locked staking with reward distribution
- Withdrawal mechanisms and penalties
- Event logging for frontend integration
- Comprehensive testing including edge cases

---

## ISLAND 3: Token & NFT Launchpad (Modules 1-3)

Focused NFT mastery anchored to deployables

### Module 1: ERC721 Standards & Implementation

- ERC721 core implementation
- Enumerable and burnable extensions
- Gas-efficient minting strategies
- NFT security considerations: Access control and mint limits
- Basic metadata handling

**Interactive Element:** *Code Completion* - Complete NFT contract functions and security checks

### Module 2: Advanced NFT Features

- Metadata standards and best practices
- IPFS integration basics
- Reveal mechanics and placeholder URIs
- Royalty standards (EIP-2981)
- Multi-phase minting concepts

**Interactive Element:** *Configuration Builder* - Set up metadata URIs and minting phases

### Module 3: PRACTICAL

Deploy: NFT Collection

- ERC721 with reveal mechanics
- Royalty implementation
- Multi-phase minting system
- IPFS metadata integration
- Gas optimization strategies

---

## ISLAND 4: On-Chain Systems & Upgradeability (Modules 1-6)

Consolidated blockchain concepts with double practicals using real contracts

### Module 1: DeFi Fundamentals & Simple Swaps

- Token economics and liquidity concepts
- Simple swap mechanics (deposit token A for token B at set rate)
- Understanding slippage and price impact
- DeFi security considerations
- Contract-to-contract token transfers

**Interactive Element:** *Configuration Builder* - Set swap parameters and exchange rates

### Module 2: Oracles, Randomness & Airdrop Patterns

- Oracle problem and decentralized solutions (Chainlink Price feeds)
- Commit-reveal sequences and verifiable randomness inputs
- Timeboxed commits, reveals, and claim windows
- Airdrops for gas efficiency and fair distribution
- Whitelist creation and claiming mechanisms
- Multi-signature guardians for sensitive operations

**Interactive Element:** *Deploy: Airdropper Contract* - Build oracle-aware commit-reveal airdrop flows

### Module 3: PRACTICAL

Deploy: Random Number Generator with Commit/Reveal

- Fair randomness using commit-reveal pattern
- Time-locked commitments
- Reveal verification and number generation
- Anti-manipulation safeguards
- Integration with gaming or lottery mechanics

### Module 4: Proxy Patterns & Upgradeability

- Transparent vs UUPS proxy patterns
- Storage collision prevention
- Upgrade safety considerations
- OpenZeppelin upgrades framework
**Interactive Element:** *Quiz* - Multiple choice on proxy patterns and upgrade safety

### Module 5: Gas Optimization & Security Patterns

- Advanced gas optimization techniques
- Storage packing and slot optimization
- Common vulnerability patterns and prevention
- Security checklist and audit preparation
- Performance measurement and profiling

**Interactive Element:** *Code Completion* - Complete optimization patterns and security checks

### Module 6: PRACTICAL

Deploy: Upgradable Contract

- Implement upgradable contract using proven template
- Safe upgrade mechanisms
- Storage layout management
- Version control and migration strategies
- Testing upgrade scenarios

---

## ISLAND 5: Frontend Integration (Modules 1-3)

Essential Web3 frontend skills for contract interaction

### Module 1: Web3 Frontend Basics

- Wallet connection with RainbowKit
- Web3 libraries: viem and wagmi basics
- Reading contract data (view functions)
- Network switching and chain management
- Basic error handling patterns

**Interactive Element:** *Code Completion* - Complete wallet connection and contract reading

### Module 2: Contract Interactions & Error Handling

- Writing to contracts (transactions)
- Transaction status monitoring
- Gas estimation and fee management
- Error handling and user feedback
- Event listening and real-time updates

**Interactive Element:** *Code Completion* - Complete transaction handling and error management

### Module 3: PRACTICAL

Build: Simple dApp Interface

- Connect wallet with RainbowKit
- Display token balances and contract data
- Execute contract functions (mint, transfer, stake)
- Show transaction history and status
- Handle common errors gracefully
- Mobile-responsive design

---

## Interactive Element Types (4 Total + Quizzes)

### 1. Code Completion

**Description:** Fill-in-the-blank style coding exercises
**Usage:** Complete contract functions, imports, security implementations, frontend integration

### 2. Configuration Builder

**Description:** Parameter setting with sliders and interactive inputs
**Usage:** Contract parameters, staking rates, swap rates, metadata configuration

### 3. Deploy Challenge

**Description:** Guided build-and-deploy exercises using battle-tested templates
**Usage:** Staking, NFT collections, airdrops, randomness workflows, upgradeable contracts, full-stack dApps

### 4. Traditional Quiz

**Description:** Multiple choice questions
**Usage:** Knowledge assessment on concepts, security patterns, and best practices

---

## Practical Deployment Summary

1. Staking Contract (time-locked staking, rewards, withdrawal mechanisms)
2. NFT Collection with Reveal Mechanics and Royalties
3. Airdropper Contract
4. Random Number Generator (commit-reveal pattern)
5. Upgradable Contract (proxy patterns, safe upgrades)
6. Simple dApp Interface (wallet connection, contract interactions)

---

*This focused curriculum covers smart contract development fundamentals, NFT creation, essential blockchain patterns, upgradeability, and basic frontend integration in 17 streamlined modules. The 6 practical deployments provide hands-on experience with real-world contracts, ensuring graduates can immediately contribute to EVM development projects.*

## Interface Improvements

- Feedback loops/analytics logging, for modules and ai tools. see (milestone-2-feedback-analytics-design.md)

- Enhancements to the AI Auditor and AI Chatbot to take them from Alpha level, to Beta level.  Likely 80% there just more more buildout on the prompt.

- AI Auditor
Cross-function reentrancy patterns
Storage collision vulnerabilities
EIP-specific attack vectors
Add more code examples and fix demonstrations
Include links to relevant training modules
Severity scoring and risk assessment

- AI Chatbot
Add specific code examples for common patterns
Include troubleshooting guides for development issues
Expand with real user questions from testing
Reference specific lessons in responses
Guide users to relevant modules based on questions
Context-aware responses based on user progress

- Code completion Interactive Element Type - Fill-in-the-blank style coding exercises

- Configuration Builder Interactive Element Type - Parameter setting with sliders and interactive inputs

## Graphics needed

- 4 new islands - note the sections have different amount of modules - not sure where module 23 fits in M3 but leave a feature on one of the islands.

- 2nd island - 5 modules
- 3rd island - 3 modules
- 4th island - 6 modules
- 5th island - 3 modules

- Top level map redesign, and island maps
- Top graphics for all of them - animate if time
- Achievement cards for 18 modules

## Milestone 3 (2-3 weeks)

### MODULE: Advanced Security Patterns"'

Advanced security aligned with AI auditor

- Role-based access control patterns
- Emergency pause and recovery procedures
- AI auditor findings interpretation
- Security checklist and audit preparation
- Common vulnerability patterns deep dive
- Incident response and escalation playbooks
- Advanced attack vectors and prevention
- Smart contract audit methodology

**Interactive Element:** *Security Audit Simulator* - Upload contracts to AI reviewer and practice interpreting results
**Integration:** Direct connection to AI reviewer tool with guided security analysis

*Note: This module will be developed as part of a future security-focused expansion.*

### Articles (Moved to Milestone 3)

These will be articles we will write up for the portal also

- Graphnode (inc https://basecamp.thegraph.com/)
- Thirdweb (need to ensure it works on Zilliqa)
- Scaffoldeth (https://scaffoldeth.io/)
- Remix
- Foundry
- OpenZepplin
- ERC1155 Multi-Token Standards & Use Cases

- Reporting
- User Feedback enhancements
- AI Tool "Optimization" - Add 2-3 more vulnerability patterns to system prompt, Expand system prompt with ~20 more query examples
- Security Best Practices Module

### Secret Achievement Ideas (Moved to Milestone 3)

- Graphics for Achievement cards for 5-10 secrets (We could move this to Milestone 3)

Reviewer

- "Mutiny Prevention" - Identify a reentrancy attack in the code reviewer
- "Dead Man's Chest" - Find a hidden overflow vulnerability
- "Parrot's Warning" - Catch an access control issue

Chatbot Interactions

- "Parley" - Ask the chatbot "What's the secret to being a good pirate?"
- "Buried Treasure Map" - Ask about "Where is the treasure buried?"
- "Davy Jones' Locker" - Type "Tell me about Davy Jones"
- "Pirate's Code" - Ask "What is the pirate's code?"
- "Message in a Bottle" - Use specific nautical terms in questions

Social & Community

- "Tavern Tales" - Share completion on social media
- "Fleet Formation" - Part of first 100 users to complete something?

Technical Easter Eggs

- "Blackbeard's Beard" - Deploy a contract with exactly 1337 gas units (no idea if this is possible)
- "Jolly Roger" - Include "0xDEADBEEF" in a contract address/transaction (no idea if this is possible, but similar idea)
- "Kraken Ink" - Write contract comments in pirate speak/special phrase
- "Jackpot" - On a VRF random number get 3 of the same number (666, 777, 888, etc)

Time-Based Secrets (Def Milestone 3/4)

- "Talk Like a Pirate Day" - Use the platform on September 19th "Special Event type achievements" - we can issue vouchers ourselves for ppl to claim.
- Any event we hold we can give out codes if ppl register their wallet

## Milestone 4 (1-2 weeks)

- Open-Source Release: All training materials and platform documentation released under permissive license, enabling community contributions and transparency.
- Comprehensive AI Tool Documentation: Detailed documentation of AI Auditor and Chatbot functionality, architecture, and implementation approach, enabling community understanding and potential recreation.
- Performance Optimization: Platform optimization for scalability, user experience, and long-term sustainability.
- Final Report: Complete Year 1 metrics analysis, comprehensive user feedback compilation, lessons learned documentation, and detailed sustainability plan.
