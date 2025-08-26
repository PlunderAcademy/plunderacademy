export type LessonModule = {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  quiz?: Quiz;
};

export type Lesson = {
  id: string;
  module: string;
  number: string;
  title: string;
  objective: string;
  content: string;
  practicalTakeaway?: string;
};

export type Quiz = {
  moduleId: string;
  questions: QuizQuestion[];
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
};

export const modules: LessonModule[] = [
  {
    id: "module-1",
    title: "Module 1: Blockchain Fundamentals",
    description: "Gain a thorough understanding of blockchain's fundamental characteristics, technical structure, and growing real-world impact.",
    lessons: [
      {
        id: "1-1",
        module: "1",
        number: "1.1",
        title: "Blockchain Basics",
        objective: "Gain a thorough understanding of blockchain's fundamental characteristics, technical structure, and growing real-world impact. Learn how modern blockchains like Zilliqa 2.0 are shaping finance, identity, and digital ecosystems in 2025.",
        content: `
          <h2>What Is Blockchain?</h2>
          <p>Blockchain is a revolutionary digital infrastructure: a decentralized, distributed ledger that records data across many independent computers (nodes). Unlike centralized databases owned by a single organization, blockchain's data is secured, verified, and maintained by a global community. This design radically enhances security, transparency, and fault tolerance.</p>
          
          <h3>Key Concepts</h3>
          
          <h4>Decentralization</h4>
          <p>No single entity controls a blockchain network. This means trust and verification come from open mathematical consensus rather than private authority. Decentralization enables censorship resistance and collective security.</p>
          
          <h4>Transparency and Immutability</h4>
          <p>All transactions are globally visible and time-stamped. Once added to a blockchain, data cannot be altered or removed. This system builds accountability and a perfect audit trail; ideal for finance, supply chains, and public records.</p>
          
          <h4>Blocks and Linking</h4>
          <p>Data is grouped into blocks, each containing transactions, cryptographic hashes, and timestamps. Blocks are mathematically linked to prior blocks, forming a chronological chain. Tampering with one block disrupts the entire chain, making fraud virtually impossible.</p>
          
          <h3>How Blockchain Works: Step-by-Step</h3>
          <ol>
            <li><strong>Transaction Creation:</strong> A user initiates a transaction (e.g., sending digital currency, updating ownership, interacting with a smart contract).</li>
            <li><strong>Broadcast and Verification:</strong> The transaction is propagated to all nodes in the network. Specialized nodes (validators or miners) check its validity using consensus algorithms such as Proof of Stake or Proof of Work.</li>
            <li><strong>Block Formation:</strong> Valid transactions are bundled together into a new block.</li>
            <li><strong>Block Addition:</strong> Through a consensus process, the network agrees to add the block to the chain. This guarantees everyone sees the same chronological record of events.</li>
            <li><strong>Immutability and Accessibility:</strong> Once confirmed, this block and all its transactions are permanent and publicly accessible. This provides proof and finality.</li>
          </ol>
          
          <h3>The Three Layers of Modern Blockchain Architecture</h3>
          <ul>
            <li><strong>Consensus Layer:</strong> The mechanism that lets all nodes agree on what is true. Proof of Stake (staking tokens to validate) and Proof of Authority (trusted identities) are popular models.</li>
            <li><strong>Data Availability Layer:</strong> Stores all transaction and state data in ways that anyone can verify. Emerging technologies like Celestia or EigenDA specialize in this layer for speed and scalability.</li>
            <li><strong>Execution Layer:</strong> Where smart contracts and application logic are processed. This is the programmable heart of the blockchain; users swap tokens, mint NFTs, access DeFi, and more.</li>
          </ul>
          
          <h3>Real-World Adoption and Use Cases</h3>
          <ul>
            <li><strong>Tokenization of Real-World Assets:</strong> Real estate, commodities, and funds can be tokenized and traded instantly.</li>
            <li><strong>Compliant Institutional DeFi:</strong> Banks and companies leverage on-chain finance with built-in risk, compliance, and identity management.</li>
            <li><strong>Digital Identity:</strong> Governments and enterprises are implementing self-sovereign digital IDs and credentials stored on blockchains.</li>
            <li><strong>Supply Chain and Logistics:</strong> Every step of a product's journey can be recorded, verified, and audited.</li>
            <li><strong>Gaming, Rewards, and Payments:</strong> In-game assets, loyalty points, and cross-border payments operate round-the-clock.</li>
          </ul>
          
          <h3>Strengths and Challenges</h3>
          <h4>Benefits</h4>
          <ul>
            <li><strong>Enhanced Security:</strong> Tamper-resistance via cryptography and decentralized validation.</li>
            <li><strong>Reduced Costs and Efficiency:</strong> Cuts out intermediaries; faster payments and settlements.</li>
            <li><strong>Global Participation:</strong> Anyone with an internet connection can access public blockchains.</li>
          </ul>
          
          <h4>Challenges</h4>
          <ul>
            <li><strong>Scalability:</strong> Handling large transaction volumes remains a technical challenge.</li>
            <li><strong>Regulatory Uncertainty:</strong> Laws are evolving as governments learn how to regulate decentralized assets.</li>
            <li><strong>User Education:</strong> Adoption increases as tools and courses make blockchain accessible to all.</li>
          </ul>
        `,
        practicalTakeaway: "Blockchain is the foundation for digital ownership, programmable applications, and transparent systems worldwide. As you continue through Plunder Academy, you'll learn how to create, deploy, and interact with this technology, building the secure, decentralized future yourself."
      },
      {
        id: "1-2",
        module: "1",
        number: "1.2",
        title: "Blockchain Decentralization and Consensus",
        objective: "Explain how decentralization and consensus mechanisms secure the blockchain, protecting it from fraud, manipulation, and single points of failure.",
        content: `
          <h2>Decentralization: The Foundation of Blockchain Security</h2>
          <p>Decentralization refers to the distribution of authority, data storage, and control across a broad network of independent computers called nodes. Unlike traditional systems, where a single institution or server controls the database, a decentralized blockchain allows thousands of participants to share responsibility for verifying and storing information.</p>
          
          <h3>Consensus Mechanisms: Achieving Agreement Without Central Authorities</h3>
          <p>Consensus mechanisms are the automated protocols that bring all nodes together to agree on the current state of the blockchain. These mechanisms ensure that every new transaction is validated honestly and consistently, even in a distributed, leaderless community.</p>
          
          <h4>The Process of Consensus</h4>
          <ol>
            <li>A new transaction or block is proposed by a participant.</li>
            <li>The proposal is broadcasted to all nodes for review.</li>
            <li>Each node checks whether the transaction follows the network's rules and is free of fraud.</li>
            <li>Nodes vote or signal approval using a defined algorithm.</li>
            <li>If enough nodes reach agreement, the transaction is permanently added to the blockchain ledger.</li>
            <li>If a node attempts to introduce errors or malicious data, it is quickly identified and rejected.</li>
          </ol>
          
          <h3>Popular Consensus Mechanisms</h3>
          <ul>
            <li><strong>Proof of Work (PoW):</strong> Participants (miners) compete to solve complex puzzles. The first to find a solution can add a new block, which is verified by others. While highly secure, PoW can be energy intensive.</li>
            <li><strong>Proof of Stake (PoS):</strong> Participants (validators) are selected based on their stake in the network. Validators propose and confirm blocks in exchange for rewards, using much less energy and enabling efficient scaling.</li>
            <li><strong>Sharding (used by Zilliqa):</strong> The network breaks itself into smaller groups (shards), allowing multiple sets of nodes to process transactions in parallel, greatly boosting scalability and throughput while maintaining consensus.</li>
            <li><strong>Other Mechanisms:</strong> Delegated Proof of Stake (DPoS), Practical Byzantine Fault Tolerance (PBFT), and Proof of Authority (PoA) each offer alternative approaches for niche use cases.</li>
          </ul>
          
          <h3>Security and Integrity Through Decentralized Consensus</h3>
          <ul>
            <li>Protection against fraud, as no one participant can introduce invalid data alone.</li>
            <li>Guaranteed accuracy, since each addition to the blockchain requires majority agreement.</li>
            <li>Elimination of central points of failure, making the network resilient and available.</li>
            <li>Automatic rejection of mistakes or attacks, preserving trust and stability.</li>
          </ul>
        `,
        practicalTakeaway: "Decentralization and consensus mechanisms empower blockchains to operate securely, transparently, and without any central authority. These principles are the backbone of blockchain's success in protecting financial data, streamlining supply chains, and enabling trusted digital interactions worldwide."
      },
      {
        id: "1-3",
        module: "1",
        number: "1.3",
        title: "Comparing Ethereum and Zilliqa EVM Blockchains",
        objective: "Understand the differences between Ethereum and Zilliqa blockchains and recognize the improvements and advantages Zilliqa 2.0 brings to developers and users.",
        content: `
          <h2>Ethereum: The Pioneer Programmable Blockchain</h2>
          <p>Ethereum introduced the concept of programmable smart contracts running on a distributed virtual machine, the Ethereum Virtual Machine (EVM). It has built the largest ecosystem of decentralized applications, tools, and developer communities. However, Ethereum faces significant challenges, including limited transaction throughput, resulting in network congestion, slower transaction finality, and high gas fees during peak demand periods.</p>
          
          <h2>Zilliqa 2.0: EVM Compatibility with Scalability Enhancements</h2>
          <p>Zilliqa 2.0 maintains full compatibility with Ethereum Virtual Machine, allowing developers to reuse familiar tools, languages like Solidity, and deployment workflows. The critical improvement is Zilliqa's implementation of sharding, where the network splits itself into multiple parallel processing shards that handle transactions simultaneously.</p>
          
          <h3>Key Advantages of Zilliqa</h3>
          <ul>
            <li>Processes thousands of transactions per second, far surpassing Ethereum's legacy throughput</li>
            <li>Delivers faster transaction finality</li>
            <li>Significantly lower fees compared to Ethereum</li>
            <li>Ideal for developers seeking a high-performance EVM platform</li>
          </ul>
          
          <h2>Developer Experience and Ecosystem</h2>
          <p>For Ethereum developers, moving to Zilliqa means leveraging existing knowledge of EVM, Solidity, and Ethereum tooling, such as Remix, Hardhat, and OpenZeppelin, with minimal adaptation. Zilliqa's compatibility lowers the learning curve and accelerates time to market for smart contracts and dApps.</p>
        `,
        practicalTakeaway: "When choosing an EVM chain, Zilliqa offers a promising environment for dApps requiring fast transactions and low fees, making it highly attractive for DeFi, NFT projects, and enterprise applications."
      },
      {
        id: "1-4",
        module: "1",
        number: "1.4",
        title: "Understanding Blockchain Transactions and Their Lifecycle",
        objective: "Understand the detailed structure of blockchain transactions and the step-by-step lifecycle from initiation to final confirmation on the blockchain.",
        content: `
          <h2>What Is a Blockchain Transaction?</h2>
          <p>A blockchain transaction is a digitally signed message that represents the transfer of value or interaction with smart contract logic on the blockchain. It is the fundamental data unit that moves assets, triggers program execution, or updates state within the decentralized network.</p>
          
          <h3>Critical Transaction Components</h3>
          <ul>
            <li><strong>Sender Address:</strong> The public key or address initiating the transaction</li>
            <li><strong>Receiver Address:</strong> The destination address, which could be another user or a smart contract</li>
            <li><strong>Amount:</strong> The value being transferred, typically expressed in the native cryptocurrency</li>
            <li><strong>Data Payload:</strong> Optional data included to invoke specific contract functions or actions</li>
            <li><strong>Digital Signature:</strong> A cryptographic signature proving authorization and preventing forgery</li>
            <li><strong>Nonce:</strong> A sequential number preventing replay attacks and ensuring transaction order</li>
            <li><strong>Gas Limit and Gas Price:</strong> Specifications of computational effort payment</li>
          </ul>
          
          <h3>The Transaction Lifecycle</h3>
          <ol>
            <li><strong>Creation:</strong> The sender creates a transaction digitally signed with their private key.</li>
            <li><strong>Broadcast:</strong> The transaction is sent to the blockchain peer-to-peer network and relayed to nodes.</li>
            <li><strong>Validation:</strong> Network nodes verify authenticity, check signature, ensure sufficient balance, and correct nonce.</li>
            <li><strong>Inclusion in a Block:</strong> Valid transactions are bundled into a new block by validators or miners.</li>
            <li><strong>Consensus and Finality:</strong> The network reaches consensus on the validity of the block containing the transaction.</li>
            <li><strong>State Update:</strong> The blockchain's state updates with the effects of the transaction.</li>
          </ol>
          
          <h3>Gas Fees: Incentivizing and Securing the Network</h3>
          <ul>
            <li>Gas serves as the fuel for executing transaction operations and smart contract instructions</li>
            <li>Fees go to validators or miners as compensation for maintaining network security</li>
            <li>Users specify maximum gas they're willing to pay; exceeded limits revert transactions</li>
            <li>In Zilliqa EVM, gas is paid in ZIL, benefiting from efficient network design</li>
          </ul>
        `,
        practicalTakeaway: "Understanding transactions' anatomy and lifecycle is essential for developing, debugging, and optimizing decentralized applications on platforms like Zilliqa 2.0 and Ethereum."
      },
      {
        id: "1-5",
        module: "1",
        number: "1.5",
        title: "Introduction to Zilliqa Ecosystem and Developer Tools",
        objective: "Set up and prepare to interact confidently with Zilliqa EVM developer ecosystem by installing fundamental tools, configuring wallets, obtaining test tokens, and deploying simple contracts.",
        content: `
          <h2>The Zilliqa Developer Ecosystem Overview</h2>
          <p>Zilliqa 2.0 offers a high-performance, scalable blockchain platform fully compatible with Ethereum's EVM standards. Developers can use popular Ethereum development tools like MetaMask, Remix, Hardhat, and OpenZeppelin to build decentralized applications on Zilliqa with minimal adaptation.</p>
          
          <h3>Essential Tooling to Get Started</h3>
          <ul>
            <li><strong>MetaMask Wallet:</strong> The most widely used browser wallet for Ethereum-compatible chains</li>
            <li><strong>Remix IDE:</strong> An intuitive, browser-based Solidity development environment</li>
            <li><strong>Hardhat and Truffle:</strong> Command-line developer tools for advanced workflows</li>
            <li><strong>OpenZeppelin Contracts:</strong> Battle-tested, secure smart contract templates</li>
          </ul>
          
          <h3>Step 1: MetaMask Setup for Zilliqa EVM</h3>
          <ol>
            <li>Install MetaMask if you have not already</li>
            <li>Add a new network with the following details:
              <ul>
                <li>Network Name: Zilliqa EVM</li>
                <li>RPC URL: https://api.zilliqa.com</li>
                <li>Chain ID: 32769</li>
                <li>Currency Symbol: ZIL</li>
                <li>Block Explorer URL: [To be configured]</li>
              </ul>
            </li>
            <li>Switch to the Zilliqa EVM network inside MetaMask</li>
          </ol>
          
          <h3>Step 2: Obtain Testnet ZIL</h3>
          <ul>
            <li>Use official faucets linked in the developer portal or community channels</li>
            <li>Provide your MetaMask wallet address on Zilliqa EVM testnet to receive free test ZIL</li>
            <li>Confirm receipt in your wallet before proceeding</li>
          </ul>
          
          <h3>Step 3: Deploy Simple Contracts with Remix</h3>
          <ul>
            <li>Write or import sample Solidity contracts</li>
            <li>Compile and deploy on Zilliqa EVM testnet connected via MetaMask</li>
            <li>Interact with your deployed contracts and observe state changes</li>
            <li>Use the Zilliqa block explorer to verify transactions and contract status</li>
          </ul>
        `,
        practicalTakeaway: "Setting up your wallet and tools to connect with Zilliqa EVM ecosystem is your gateway to blockchain development. The Zilliqa ecosystem balances Ethereum familiarity with powerful innovations including sharding and low fees."
      }
    ],
    quiz: {
      moduleId: "module-1",
      questions: [
        {
          id: "1-1",
          question: "What is a blockchain?",
          options: [
            "A centrally controlled database",
            "A decentralized, distributed ledger shared across many computers",
            "A type of cryptocurrency wallet"
          ],
          correctAnswer: 1,
          explanation: "Blockchain is a decentralized, distributed ledger that records data across many independent computers (nodes)."
        },
        {
          id: "1-2",
          question: "What does it mean when blockchain data is immutable?",
          options: [
            "Data can be easily changed",
            "Data cannot be altered once recorded without consensus of the network",
            "Data is temporary"
          ],
          correctAnswer: 1,
          explanation: "Immutability means once data is added to the blockchain, it cannot be altered or removed without network consensus."
        },
        {
          id: "1-3",
          question: "Which consensus mechanism involves nodes competing to solve complex mathematical puzzles?",
          options: [
            "Proof of Stake",
            "Proof of Work",
            "Sharding"
          ],
          correctAnswer: 1,
          explanation: "Proof of Work (PoW) requires miners to compete to solve complex puzzles to add new blocks."
        },
        {
          id: "1-4",
          question: "What is Zilliqa's main scalability innovation?",
          options: [
            "Upgraded Ethereum consensus algorithm",
            "Sharding for parallel transaction processing",
            "Replacing EVM with a new virtual machine"
          ],
          correctAnswer: 1,
          explanation: "Zilliqa implements sharding, splitting the network into parallel processing shards for enhanced scalability."
        },
        {
          id: "1-5",
          question: "What does the nonce in a blockchain transaction prevent?",
          options: [
            "Unauthorized access",
            "Replay attacks and transaction replay",
            "High transaction fees"
          ],
          correctAnswer: 1,
          explanation: "The nonce is a sequential number that prevents replay attacks and ensures transaction order."
        }
      ]
    }
  },
  {
    id: "module-2",
    title: "Module 2: EVM Fundamentals",
    description: "Gain a thorough understanding of Ethereum Virtual Machine, the virtualized computing environment that executes smart contracts.",
    lessons: [
      {
        id: "2-1",
        module: "2",
        number: "2.1",
        title: "Introduction to Ethereum Virtual Machine (EVM)",
        objective: "Gain a thorough understanding of Ethereum Virtual Machine, the virtualized computing environment that executes smart contracts for Ethereum-compatible blockchains including Zilliqa 2.0.",
        content: `
          <h2>What is Ethereum Virtual Machine?</h2>
          <p>Ethereum Virtual Machine is a decentralized virtual computer that runs executable code on thousands of nodes simultaneously across the blockchain network. It acts as a deterministic, sandboxed environment that abstracts away hardware and software differences between nodes to deliver a consistent runtime for all smart contracts.</p>
          
          <h3>Core Characteristics of EVM</h3>
          <ul>
            <li><strong>Deterministic Execution:</strong> Regardless of who runs smart contract code, the output remains the same, ensuring network consistency.</li>
            <li><strong>Isolation:</strong> Contracts operate in a protected sandbox, isolating their execution from the underlying node environment.</li>
            <li><strong>Gas Metering:</strong> Each computational step consumes a quantifiable amount of gas. This mechanism restricts infinite loops and allocates resources efficiently.</li>
            <li><strong>Stack-Based Computing:</strong> EVM uses a stack architecture, operating similar to an assembly language.</li>
            <li><strong>Memory and Storage:</strong>
              <ul>
                <li>Memory is temporary and reset after contract execution</li>
                <li>Storage is permanent and stored on-chain, holding contract state variables securely</li>
              </ul>
            </li>
          </ul>
          
          <h3>Why Does Zilliqa Use the EVM?</h3>
          <p>Zilliqa 2.0's adoption of the EVM provides seamless compatibility with Ethereum's vast developer ecosystem. Solidity smart contracts designed for Ethereum can thus be deployed to Zilliqa with minimal changes. Zilliqa complements EVM with its sharding architecture, which enables higher transaction throughput, lower fees, and fast confirmation times.</p>
        `,
        practicalTakeaway: "The Ethereum Virtual Machine is the core runtime that enables the execution of trustless, decentralized applications on EVM-compatible blockchains."
      },
      {
        id: "2-2",
        module: "2",
        number: "2.2",
        title: "Understanding EVM Execution and Bytecode",
        objective: "Learn how Solidity contracts are compiled into bytecode and executed by the EVM.",
        content: `
          <h2>Compilation and Contract Interaction</h2>
          <p>Solidity contracts are compiled into bytecode, a concise, low-level set of instructions executable by EVM. Along with bytecode, the Application Binary Interface (ABI) specifies how external actors call functions, handle inputs, and receive output from contracts.</p>
          
          <h3>EVM Resources and Data Structures</h3>
          <ul>
            <li><strong>Stack:</strong> A temporary, last-in-first-out data structure for intermediate values during execution</li>
            <li><strong>Memory:</strong> A volatile byte array used during the contract's runtime, cleaned up after execution ends</li>
            <li><strong>Storage:</strong> A persistent key-value store unique to each contract, used to store state variables on-chain</li>
            <li><strong>Calldata:</strong> Read-only data passed with transactions or calls, serving as function input parameters</li>
          </ul>
          
          <h3>Execution Flow</h3>
          <p>EVM processes bytecode sequentially except for control instructions like jumps or external contract calls. It executes opcodes that perform arithmetic operations, control flow, storage access, and communicate with other contracts or users. Events emitted during execution provide real-time data visibility.</p>
        `
      },
      {
        id: "2-3",
        module: "2",
        number: "2.3",
        title: "Gas as the Fuel of EVM",
        objective: "Understand how gas quantifies computational effort and resource usage on the EVM.",
        content: `
          <h2>The Role of Gas</h2>
          <p>Gas quantifies computational effort and resource usage on the EVM. By attaching a cost to every executed operation, it prevents wasteful or malicious consumption of network resources. Users must pay gas fees to incentivize miners or validators to include and execute their transactions.</p>
          
          <h3>Gas Costs and Pricing Mechanics</h3>
          <p>EVM instructions have predefined gas costs proportional to their computation and storage demands. More complex operations and writes to storage require significantly more gas. Before execution, users specify:</p>
          <ul>
            <li><strong>Gas Price:</strong> Payment per unit of gas, influencing transaction inclusion priority</li>
            <li><strong>Gas Limit:</strong> Upper gas expenditure bound protecting users from unexpectedly high fees</li>
          </ul>
          
          <h3>Gas Payments on Zilliqa</h3>
          <p>Zilliqa's native token ZIL is used to pay fees. Its scalable design keeps typical gas prices low, facilitating affordable and rapid dApp interactions.</p>
        `
      },
      {
        id: "2-4",
        module: "2",
        number: "2.4",
        title: "Contract Lifecycle on EVM",
        objective: "Learn the phases of a smart contract's life from writing to deployment and interaction.",
        content: `
          <h2>Phases of a Contract's Life</h2>
          <ol>
            <li><strong>Write:</strong> Code is authored in Solidity</li>
            <li><strong>Compile:</strong> Translation into EVM bytecode and the ABI interface</li>
            <li><strong>Deploy:</strong> Bytecode is sent as a transaction creating the contract on-chain; deployment consumes gas</li>
            <li><strong>Interact:</strong> Users or other contracts send transactions or calls to invoke functions</li>
            <li><strong>Update:</strong> Contracts can be upgraded via proxy patterns or redeployment</li>
          </ol>
          
          <h3>Deployment Details</h3>
          <p>The deployment transaction carries initialization data, resulting in a contract address once mined. This address becomes the persistent locator allowing interaction with the deployed logic and state.</p>
        `
      },
      {
        id: "2-5",
        module: "2",
        number: "2.5",
        title: "Developer Tooling Overview",
        objective: "Explore essential development tools for building on EVM-compatible blockchains.",
        content: `
          <h2>Essential Developer Tools</h2>
          <ul>
            <li><strong>Remix IDE:</strong> Browser-based Solidity editor and testing environment ideal for rapid prototyping and deployment</li>
            <li><strong>Hardhat:</strong> Flexible local development framework for scripting deployments, testing, and complex workflows</li>
            <li><strong>Foundry (Forge):</strong> High-performance Solidity build and test framework designed for developer speed</li>
            <li><strong>OpenZeppelin:</strong> Widely-used contract libraries and security modules, providing secure token standards</li>
          </ul>
        `,
        practicalTakeaway: "An in-depth understanding of EVM's operation equips developers to write performant smart contracts and build scalable applications in today's evolving blockchain ecosystem."
      }
    ],
    quiz: {
      moduleId: "module-2",
      questions: [
        {
          id: "2-1",
          question: "What does EVM provide?",
          options: [
            "A centralized server to run smart contracts",
            "A decentralized sandboxed environment where smart contracts execute identically on all nodes",
            "A database for storing Ethereum transactions"
          ],
          correctAnswer: 1
        },
        {
          id: "2-2",
          question: "Why is deterministic execution critical in EVM operations?",
          options: [
            "So contracts produce different results on different nodes",
            "So all nodes compute the same contract output ensuring consensus",
            "To speed up contract compilation"
          ],
          correctAnswer: 1
        },
        {
          id: "2-3",
          question: "What happens if a transaction exceeds its gas limit?",
          options: [
            "The transaction proceeds without limits",
            "The transaction is reverted and no state changes occur",
            "The transaction is paused"
          ],
          correctAnswer: 1
        },
        {
          id: "2-4",
          question: "Which token is used to pay gas fees on Zilliqa?",
          options: [
            "ETH",
            "ZIL",
            "BTC"
          ],
          correctAnswer: 1
        },
        {
          id: "2-5",
          question: "Which tool lets you develop Solidity contracts in-browser without setup?",
          options: [
            "Hardhat",
            "Remix IDE",
            "Foundry"
          ],
          correctAnswer: 1
        }
      ]
    }
  },
  {
    id: "module-3",
    title: "Module 3: Intro to Solidity",
    description: "Learn Solidity, the primary programming language for writing smart contracts on Ethereum and all EVM-compatible blockchains.",
    lessons: [
      {
        id: "3-1",
        module: "3",
        number: "3.1",
        title: "Solidity Fundamentals: Getting Started",
        objective: "Learn the basics of Solidity syntax, data types, and foundational constructs for building robust and secure decentralized applications.",
        content: `
          <h2>Introduction</h2>
          <p>Solidity is the primary programming language for writing smart contracts on Ethereum and all EVM-compatible blockchains, including Zilliqa. It is statically typed and contract-oriented. Solidity's syntax draws inspiration from JavaScript and C++ but is specifically designed for secure and deterministic execution in decentralized environments.</p>
          
          <h3>Structure of a Solidity Contract</h3>
          <pre><code>// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    string public greeting = "Hello, Zilliqa!";
    
    function setGreeting(string calldata _greeting) public {
        greeting = _greeting;
    }
}</code></pre>
          
          <ul>
            <li><code>contract HelloWorld { ... }</code> defines the contract as a class-like blueprint</li>
            <li><code>string public greeting</code> declares a state variable stored permanently on-chain</li>
            <li>The <code>setGreeting</code> function allows external users to update the greeting</li>
          </ul>
          
          <h3>Key Solidity Types</h3>
          <ul>
            <li><strong>uint:</strong> Unsigned integer for non-negative whole numbers</li>
            <li><strong>address:</strong> Blockchain account identifier, used for contracts or external users</li>
            <li><strong>bool:</strong> Boolean logic true or false</li>
            <li><strong>string:</strong> Text data encoded in UTF-8</li>
          </ul>
        `
      },
      {
        id: "3-2",
        module: "3",
        number: "3.2",
        title: "Functions, Visibility, and Access Control",
        objective: "Learn how to define functions and implement access control patterns in Solidity.",
        content: `
          <h2>Defining Functions</h2>
          <p>Functions are the interface for users and contracts to interact with your smart contract.</p>
          
          <pre><code>function multiply(uint a, uint b) public pure returns (uint) {
    return a * b;
}</code></pre>
          
          <ul>
            <li><code>public</code> means anyone can call this function externally</li>
            <li><code>private</code>/<code>internal</code> restrict calls to the contract itself or derived contracts</li>
            <li><code>view</code> functions read state without modifying it</li>
            <li><code>pure</code> functions neither read nor write state</li>
          </ul>
          
          <h3>Access Control Patterns</h3>
          <p>To secure sensitive operations, modifiers enforce access restrictions:</p>
          
          <pre><code>address public owner;

modifier onlyOwner() {
    require(msg.sender == owner, "Not the owner");
    _;
}

function changeGreeting(string calldata newGreeting) public onlyOwner {
    greeting = newGreeting;
}</code></pre>
          
          <p><code>msg.sender</code> is the caller's address, and combining this with modifiers restricts function execution to designated owners or roles.</p>
        `
      },
      {
        id: "3-3",
        module: "3",
        number: "3.3",
        title: "Data Structures: Structs, Arrays, Mappings",
        objective: "Learn about complex data structures in Solidity including structs, arrays, and mappings.",
        content: `
          <h2>Structs</h2>
          <p>Group related data fields:</p>
          <pre><code>struct Person {
    string name;
    uint age;
}</code></pre>
          
          <h2>Arrays</h2>
          <p>Lists of data:</p>
          <pre><code>Person[] public people;</code></pre>
          <p>You can add, remove, or iterate over arrays to manage collections.</p>
          
          <h2>Mappings</h2>
          <p>Key-value stores resembling hash maps:</p>
          <pre><code>mapping(address => uint) public balances;</code></pre>
          <p>Mappings efficiently store associations like user balances or permissions.</p>
          
          <h3>Interactive Assignment</h3>
          <p>Expand HelloWorld to hold personalized greetings per user:</p>
          <pre><code>mapping(address => string) public greetings;</code></pre>
        `
      },
      {
        id: "3-4",
        module: "3",
        number: "3.4",
        title: "Events and Error Handling",
        objective: "Learn how to emit events and handle errors in Solidity smart contracts.",
        content: `
          <h2>Events</h2>
          <p>Events emit logs that off-chain applications and listeners use to track contract activity.</p>
          
          <pre><code>event GreetingChanged(address indexed user, string newGreeting);

function setGreeting(string calldata newGreeting) public {
    greetings[msg.sender] = newGreeting;
    emit GreetingChanged(msg.sender, newGreeting);
}</code></pre>
          
          <p><code>indexed</code> fields are searchable in logs.</p>
          
          <h2>Error Handling</h2>
          <p>Solidity provides mechanisms to enforce constraints and revert transactions:</p>
          
          <pre><code>function withdraw(uint amount) public {
    require(balances[msg.sender] >= amount, "Insufficient funds");
    balances[msg.sender] -= amount;
    payable(msg.sender).transfer(amount);
}</code></pre>
          
          <ul>
            <li><code>require</code> reverts with an error message if conditions fail</li>
            <li><code>assert</code> used for internal invariants</li>
            <li><code>revert</code> explicitly stops execution and rolls back</li>
          </ul>
        `
      },
      {
        id: "3-5",
        module: "3",
        number: "3.5",
        title: "Bringing It All Together: Your First Real Contract",
        objective: "Create a complete SimpleBank contract implementing deposits, withdrawals, and event logging.",
        content: `
          <h2>Project Assignment</h2>
          <p>Create SimpleBank contract implementing:</p>
          <ul>
            <li>User deposits and withdrawals of ZIL</li>
            <li>Tracking balances with a <code>mapping(address => uint)</code></li>
            <li>Withdrawal allowed only if the user has sufficient balance</li>
            <li>Emitting events on deposits and withdrawals for auditability</li>
            <li>Deploy the contract on Zilliqa EVM testnet using Remix IDE</li>
            <li>Use MetaMask to test deposits and withdrawals interactively</li>
          </ul>
          
          <h3>Sample Implementation</h3>
          <pre><code>// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleBank {
    mapping(address => uint) public balances;
    
    event Deposit(address indexed user, uint amount);
    event Withdrawal(address indexed user, uint amount);
    
    function deposit() public payable {
        balances[msg.sender] += msg.value;
        emit Deposit(msg.sender, msg.value);
    }
    
    function withdraw(uint amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
        emit Withdrawal(msg.sender, amount);
    }
}</code></pre>
        `,
        practicalTakeaway: "Hands-on projects like SimpleBank bridge the gap between theory and practice, deepening understanding of real-world contract development workflows, gas management, and user interactions."
      }
    ],
    quiz: {
      moduleId: "module-3",
      questions: [
        {
          id: "3-1",
          question: "What is the purpose of the pragma statement in Solidity?",
          options: [
            "To define license",
            "To specify compiler version",
            "To declare the contract name"
          ],
          correctAnswer: 1
        },
        {
          id: "3-2",
          question: "Which variable type is used for storing blockchain wallet addresses?",
          options: [
            "string",
            "uint",
            "address"
          ],
          correctAnswer: 2
        },
        {
          id: "3-3",
          question: "What does msg.sender represent in a smart contract?",
          options: [
            "The address of the current contract",
            "The address of the transaction sender or function caller",
            "The network node's address"
          ],
          correctAnswer: 1
        },
        {
          id: "3-4",
          question: "What keyword is used to emit an event in Solidity?",
          options: [
            "event",
            "log",
            "emit"
          ],
          correctAnswer: 2
        },
        {
          id: "3-5",
          question: "What happens when a require statement's condition fails during a transaction?",
          options: [
            "The transaction continues",
            "The transaction is reverted and all state changes are rolled back",
            "The state changes proceed partially"
          ],
          correctAnswer: 1
        }
      ]
    }
  },
  {
    id: "module-4",
    title: "Module 4: Setting Up the Zilliqa EVM Development Environment",
    description: "Set up your development environment with MetaMask, Remix IDE, and other essential tools for Zilliqa EVM development.",
    lessons: [
      {
        id: "4-1",
        module: "4",
        number: "4.1",
        title: "Installing and Configuring MetaMask for Zilliqa EVM",
        objective: "Learn how to install and configure MetaMask wallet for Zilliqa EVM network.",
        content: `
          <h2>Introduction</h2>
          <p>MetaMask is the most widely used Ethereum-compatible browser wallet, allowing users to manage accounts, sign transactions, and connect with decentralized applications. With Zilliqa's EVM support, you can use MetaMask similarly to how you use it on Ethereum.</p>
          
          <h3>Step-by-Step MetaMask Setup Guide</h3>
          <ol>
            <li><strong>Install MetaMask</strong>
              <p>Download the MetaMask browser extension and add it to your preferred browser. Follow the prompts to create a new wallet or import an existing one. Carefully record and securely store your seed phrase.</p>
            </li>
            
            <li><strong>Add the Zilliqa EVM Network to MetaMask</strong>
              <p>Open MetaMask and click the network dropdown menu. Select "Add Network" and fill in the following:</p>
              <ul>
                <li>Network Name: Zilliqa EVM Mainnet</li>
                <li>RPC URL: https://api.zilliqa.com</li>
                <li>Chain ID: 32769</li>
                <li>Currency Symbol: ZIL</li>
                <li>Block Explorer URL: [To be configured]</li>
              </ul>
            </li>
            
            <li><strong>Save and Connect</strong>
              <p>After entering these details, save the network. Switch your MetaMask wallet network to Zilliqa EVM before proceeding.</p>
            </li>
            
            <li><strong>Verify Connection</strong>
              <p>Confirm that your MetaMask wallet shows the current ZIL balance and can send test transactions on the Zilliqa EVM network.</p>
            </li>
          </ol>
          
          <h3>Security Recommendations</h3>
          <ul>
            <li>Store your seed phrase safely offline and never share it</li>
            <li>Avoid entering seed phrases on websites or pasting them into digital files</li>
            <li>Consider enhancing security by using a hardware wallet for key management</li>
          </ul>
        `
      },
      {
        id: "4-2",
        module: "4",
        number: "4.2",
        title: "Getting Testnet ZIL and Using the Block Explorer",
        objective: "Learn how to obtain test tokens and use the block explorer for transaction verification.",
        content: `
          <h2>Introduction</h2>
          <p>To develop on Zilliqa EVM testnet without spending real cryptocurrency, you need to acquire test ZIL tokens. These tokens facilitate testing contract deployments and interactions without financial risk.</p>
          
          <h3>Steps</h3>
          <ol>
            <li><strong>Locate an Official Faucet</strong>
              <p>Find a Zilliqa testnet faucet through official documentation or developer portals.</p>
            </li>
            
            <li><strong>Request Tokens</strong>
              <p>Input your Zilliqa EVM-compatible wallet address from MetaMask into the faucet form. After submission, test tokens are usually distributed within minutes.</p>
            </li>
            
            <li><strong>Verify Balance in MetaMask</strong>
              <p>Your MetaMask wallet should reflect the new test ZIL balance.</p>
            </li>
            
            <li><strong>Use the Zilliqa Block Explorer</strong>
              <p>Navigate to the block explorer platform and enter your wallet or contract address to view transactions, contract creations, balance updates, and block confirmations.</p>
            </li>
          </ol>
        `
      },
      {
        id: "4-3",
        module: "4",
        number: "4.3",
        title: "Writing and Deploying Contracts with Remix IDE",
        objective: "Learn how to write, compile, and deploy smart contracts using Remix IDE.",
        content: `
          <h2>Introduction</h2>
          <p>Remix IDE is a powerful browser-based Solidity editor providing an accessible environment to write, compile, deploy, and test contracts quickly without special local setup.</p>
          
          <h3>Development Steps</h3>
          <ol>
            <li><strong>Open Remix IDE</strong>
              <p>Visit the Remix IDE web app through your browser.</p>
            </li>
            
            <li><strong>Write Your Contract</strong>
              <p>Create a new Solidity file, for example HelloZil.sol:</p>
              <pre><code>// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloZil {
    string public message = "Hello, Zilliqa!";
    
    function setMessage(string calldata newMessage) public {
        message = newMessage;
    }
}</code></pre>
            </li>
            
            <li><strong>Compile the Contract</strong>
              <p>Select the appropriate Solidity compiler version (at least 0.8.0) and compile the contract.</p>
            </li>
            
            <li><strong>Deploy Using MetaMask</strong>
              <p>In the "Deploy & Run Transactions" tab, set environment to "Injected Provider - MetaMask". Confirm your MetaMask network is set to Zilliqa EVM. Click "Deploy" and approve the transaction in MetaMask.</p>
            </li>
            
            <li><strong>Interact with Your Contract</strong>
              <p>Once deployed, use Remix to call contract functions such as reading or updating the message variable.</p>
            </li>
          </ol>
        `
      },
      {
        id: "4-4",
        module: "4",
        number: "4.4",
        title: "Using Hardhat or Truffle for Local Development (Advanced)",
        objective: "Learn how to use professional development frameworks for advanced smart contract development.",
        content: `
          <h2>Introduction</h2>
          <p>For advanced users, Hardhat and Truffle provide flexible, programmable environments enabling scripting, testing, and automated deployment of Solidity contracts on the Zilliqa EVM network.</p>
          
          <h3>Example Hardhat Workflow</h3>
          <ol>
            <li><strong>Installation</strong>
              <pre><code>npm install --save-dev hardhat
npx hardhat</code></pre>
              <p>Choose the option to create a basic sample project.</p>
            </li>
            
            <li><strong>Configure Hardhat</strong>
              <p>Edit hardhat.config.js:</p>
              <pre><code>module.exports = {
  networks: {
    zilliqa: {
      url: "https://api.zilliqa.com",
      chainId: 32769,
      accounts: [PRIVATE_KEY], // Use environment variables securely
    }
  },
  solidity: "0.8.20",
};</code></pre>
            </li>
            
            <li><strong>Deploy Contract</strong>
              <p>Write deployment scripts, then run:</p>
              <pre><code>npx hardhat run scripts/deploy.js --network zilliqa</code></pre>
            </li>
            
            <li><strong>Verify and Interact</strong>
              <p>Check your contract's deployment on the block explorer and interact with it via scripts or frontends.</p>
            </li>
          </ol>
        `
      },
      {
        id: "4-5",
        module: "4",
        number: "4.5",
        title: "Capstone Project — Full Deployment Journey",
        objective: "Complete a full deployment journey from wallet setup to contract deployment.",
        content: `
          <h2>Complete Development Setup Project</h2>
          <ol>
            <li>Set up MetaMask for Zilliqa EVM and install the network</li>
            <li>Obtain test ZIL from a faucet and validate your balance</li>
            <li>Write and deploy your first smart contract in Remix IDE</li>
            <li>Confirm contract deployment on the block explorer</li>
            <li>Optionally, repeat deployment using Hardhat or Truffle</li>
            <li>Reflect on the process: discuss which steps were intuitive, where difficulties arose</li>
          </ol>
        `,
        practicalTakeaway: "Development on Zilliqa EVM employs familiar Ethereum tools and patterns, enabling fast onboarding and powerful scalability. Understanding and practicing these tools builds a solid foundation for smart contract development."
      }
    ],
    quiz: {
      moduleId: "module-4",
      questions: [
        {
          id: "4-1",
          question: "What is the first step in configuring MetaMask for Zilliqa EVM?",
          options: [
            "Import existing wallet only",
            "Add the Zilliqa EVM network with RPC, Chain ID, and other details",
            "Install mining software"
          ],
          correctAnswer: 1
        },
        {
          id: "4-2",
          question: "Which network Chain ID corresponds to Zilliqa EVM mainnet?",
          options: [
            "1",
            "32769",
            "56"
          ],
          correctAnswer: 1
        },
        {
          id: "4-3",
          question: "What environment should you select in Remix to deploy contracts via MetaMask on Zilliqa EVM?",
          options: [
            "JavaScript VM",
            "Injected Provider - MetaMask",
            "Web3 Provider"
          ],
          correctAnswer: 1
        },
        {
          id: "4-4",
          question: "What is a faucet used for in blockchain testnet environments?",
          options: [
            "Generating private keys",
            "Obtaining free test tokens to interact on a testnet",
            "Deploying contracts"
          ],
          correctAnswer: 1
        },
        {
          id: "4-5",
          question: "What command runs a deployment script on Zilliqa network with Hardhat?",
          options: [
            "npx hardhat deploy",
            "npx hardhat run scripts/deploy.js --network zilliqa",
            "npm start"
          ],
          correctAnswer: 1
        }
      ]
    }
  },
  {
    id: "module-5",
    title: "Module 5: Creating Your Own Token on Zilliqa EVM",
    description: "Learn how to create, deploy, and manage ERC-20 tokens on Zilliqa EVM using OpenZeppelin's secure contract libraries.",
    lessons: [
      {
        id: "5-1",
        module: "5",
        number: "5.1",
        title: "Introduction to ERC-20 Tokens",
        objective: "Understand the ERC-20 token standard and its importance in the blockchain ecosystem.",
        content: `
          <h2>What Is an ERC-20 Token?</h2>
          <p>ERC-20 is the widely accepted standard defining fungible tokens. Fungibility means every token unit is identical and interchangeable, just like fiat currencies. This standard defines a common interface for tokens, allowing wallets, exchanges, and dApps to support any ERC-20 compliant token seamlessly.</p>
          
          <h3>Core ERC-20 Functions and Their Purpose</h3>
          <ul>
            <li><strong>totalSupply():</strong> Returns total number of tokens in circulation</li>
            <li><strong>balanceOf(address):</strong> Gets the token balance of a specified address</li>
            <li><strong>transfer(address, uint):</strong> Moves tokens from the sender's address to another</li>
            <li><strong>approve(address, uint):</strong> Authorizes another address to spend tokens on the owner's behalf</li>
            <li><strong>transferFrom(address, address, uint):</strong> Executes transfer of tokens on behalf of another address</li>
          </ul>
          
          <p>Popular stablecoins and tokens like USDT, USDC, and DAI conform to the ERC-20 standard.</p>
        `
      },
      {
        id: "5-2",
        module: "5",
        number: "5.2",
        title: "Writing Your Token Contract",
        objective: "Learn how to write a secure ERC-20 token contract using OpenZeppelin libraries.",
        content: `
          <h2>Step 1: Using OpenZeppelin's Secure Token Templates</h2>
          <p>OpenZeppelin provides battle-tested smart contract libraries including the ERC-20 implementation. This approach prevents security pitfalls in token development.</p>
          
          <ol>
            <li>Open Remix IDE and create a new Solidity file named MyToken.sol</li>
            <li>Paste the following contract code:</li>
          </ol>
          
          <pre><code>// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("MyToken", "MTK") {
        // Mint the initial supply to the deployer's address
        _mint(msg.sender, initialSupply * (10 ** decimals()));
    }
}</code></pre>
          
          <ul>
            <li>Modify "MyToken" and "MTK" to reflect your token's name and symbol</li>
            <li>initialSupply represents the total tokens you mint initially, counted in whole units</li>
          </ul>
          
          <p>Using OpenZeppelin's ERC-20 contracts ensures your token inherits secure, compliant functionality automatically.</p>
        `
      },
      {
        id: "5-3",
        module: "5",
        number: "5.3",
        title: "Deploying Your Token on Zilliqa EVM Testnet",
        objective: "Deploy your ERC-20 token to the Zilliqa EVM testnet.",
        content: `
          <h2>Prerequisites</h2>
          <ul>
            <li>MetaMask configured for Zilliqa EVM testnet with a funded test ZIL wallet</li>
            <li>Familiarity with Remix IDE basics as covered in previous modules</li>
          </ul>
          
          <h3>Deployment Steps</h3>
          <ol>
            <li>Compile MyToken.sol in Remix, targeting Solidity compiler version 0.8.0 or later</li>
            <li>Navigate to the "Deploy & Run Transactions" tab</li>
            <li>Select "Injected Provider - MetaMask" environment, confirming MetaMask is connected to Zilliqa EVM testnet</li>
            <li>Enter your desired initial token supply in the constructor input field (e.g., 1000000 for one million tokens)</li>
            <li>Click "Deploy" and confirm the transaction signature in MetaMask</li>
            <li>After deployment, save the generated contract address for future interaction</li>
          </ol>
        `
      },
      {
        id: "5-4",
        module: "5",
        number: "5.4",
        title: "Exploring and Interacting with Your Token",
        objective: "Learn how to interact with your deployed token and add it to MetaMask.",
        content: `
          <h2>Verification and Tracking</h2>
          <p>Use the Zilliqa EVM block explorer to input your contract address and view your token, contract code, and transaction history.</p>
          
          <h3>Checking Balances</h3>
          <p>Within Remix's deployed contracts panel, call balanceOf with your wallet address. This should return your full token balance considering decimals (usually 18).</p>
          
          <h3>Token Transfers</h3>
          <p>Invoke transfer in Remix, entering the recipient's address and the amount to transfer (adjusted by decimals). Verify the recipient's updated balance on Remix or their MetaMask wallet.</p>
          
          <h3>Adding Token to MetaMask</h3>
          <p>Add the deployed token contract address and symbol as a custom token in MetaMask. This enables seeing token balances directly in your wallet and enables transfers or dApp interactions.</p>
        `,
        practicalTakeaway: "Creating a fungible token is a foundational blockchain development skill. Leveraging OpenZeppelin's robust ERC-20 framework accelerates development while integrating security best practices."
      }
    ],
    quiz: {
      moduleId: "module-5",
      questions: [
        {
          id: "5-1",
          question: "What does ERC-20 define?",
          options: [
            "A standard for non-fungible tokens",
            "A standard for fungible tokens that are interchangeable",
            "A private token standard for Zilliqa only"
          ],
          correctAnswer: 1
        },
        {
          id: "5-2",
          question: "What is the benefit of using OpenZeppelin's token contracts?",
          options: [
            "Pre-written, audited, and secure token functionality",
            "Lower transaction fees by design",
            "Unique token standards different from Ethereum"
          ],
          correctAnswer: 0
        },
        {
          id: "5-3",
          question: "What must be done before deploying a token contract on Zilliqa EVM testnet?",
          options: [
            "Purchase real ZIL on an exchange",
            "Configure MetaMask for Zilliqa EVM testnet and obtain test ZIL from a faucet",
            "Set up a local node only"
          ],
          correctAnswer: 1
        },
        {
          id: "5-4",
          question: "How can you check your token balance after deployment?",
          options: [
            "Call the balanceOf function with your wallet address in Remix",
            "Use a standard bank app",
            "Only with a special token viewer app"
          ],
          correctAnswer: 0
        },
        {
          id: "5-5",
          question: "What is required to add your newly created token to MetaMask?",
          options: [
            "Contract address and token symbol",
            "Only the contract address",
            "Only the token symbol"
          ],
          correctAnswer: 0
        }
      ]
    }
  }
];