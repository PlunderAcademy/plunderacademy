export type ArticleLevel = "beginner" | "intermediate" | "advanced";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  level: ArticleLevel;
  tags: string[];
  hero?: string;
  contentHtml: string;
};

export const articles: Article[] = [
  // Beginner – Zilliqa
  {
    slug: "zilliqa-evm-introduction",
    title: "Introduction to Zilliqa EVM",
    excerpt:
      "Overview of Zilliqa's EVM execution layer, accounts, gas, and tooling.",
    level: "beginner",
    tags: ["zilliqa", "evm", "basics"],
    hero: "/articles/zilliqa-evm-intro.svg",
    contentHtml: `
      <h2>What is the Zilliqa EVM?</h2>
      <p>The Zilliqa EVM brings familiar Ethereum-style development to Zilliqa. You write Solidity, deploy with standard tooling, and interact using common wallets.</p>
      <img src="/articles/zilliqa-evm-intro.svg" alt="Zilliqa EVM overview" />
      <h3>Key Concepts</h3>
      <ul>
        <li><strong>Accounts & Nonces</strong>: Same account model and transaction nonces as Ethereum.</li>
        <li><strong>Gas</strong>: Transactions consume gas based on execution and storage.</li>
        <li><strong>Tooling</strong>: Works with viem, wagmi, and RainbowKit for dapps.</li>
      </ul>
      <h3>Hello World</h3>
      <pre><code>// Example minimal contract
pragma solidity ^0.8.24;
contract HelloZil { function hi() external pure returns (string memory) { return "Hi Zilliqa"; } }
</code></pre>
      <h3>Next Steps</h3>
      <p>Set up a project, connect RainbowKit, and deploy to Zilliqa testnet. Validate events and gas.</p>
    `,
  },
  {
    slug: "zilliqa-wallets-and-rpc",
    title: "Connecting Wallets and RPC on Zilliqa",
    excerpt:
      "How to connect with RainbowKit and wagmi, pick RPCs, and query chain data.",
    level: "beginner",
    tags: ["zilliqa", "wallets", "rpc"],
    hero: "/articles/zilliqa-wallets-rpc.svg",
    contentHtml: `
      <h2>Wallets & RPC on Zilliqa</h2>
      <p>Use WalletConnect via RainbowKit, and viem to talk to Zilliqa EVM. Keep your RPC keys secure and prefer provider failover in production.</p>
      <img src="/articles/zilliqa-wallets-rpc.svg" alt="Wallets and RPC flow" />
      <h3>Recommended Stack</h3>
      <ul>
        <li><strong>wagmi + RainbowKit</strong> for connections and UI.</li>
        <li><strong>viem</strong> for robust RPC calls.</li>
        <li><strong>WalletConnect</strong> project ID via NEXT_PUBLIC env.</li>
      </ul>
      <pre><code>// viem example
import { createPublicClient, http } from 'viem';
import { zilliqa } from 'viem/chains';
const client = createPublicClient({ chain: zilliqa, transport: http() });
</code></pre>
      <h3>Queries</h3>
      <p>Read contract state with <code>client.readContract</code>, and simulate writes with <code>client.simulateContract</code> before sending.</p>
    `,
  },
  // Beginner – EVM
  {
    slug: "evm-storage-layout",
    title: "EVM Storage Layout Explained",
    excerpt:
      "How Solidity maps state variables to storage slots, with diagrams and examples.",
    level: "beginner",
    tags: ["evm", "storage", "solidity"],
    hero: "/articles/evm-storage-layout.svg",
    contentHtml: `
      <h2>Storage Slots & Packing</h2>
      <p>State variables are placed into 32-byte slots. Smaller types can pack together to save gas.</p>
      <img src="/articles/evm-storage-layout.svg" alt="EVM storage slots" />
      <h3>Mappings & Arrays</h3>
      <ul>
        <li><strong>Mappings</strong> hash the key with a seed slot.</li>
        <li><strong>Dynamic arrays</strong> store length at the base and elements at hashed offsets.</li>
      </ul>
      <pre><code>struct S { uint128 a; uint128 b; } // packs into one slot
mapping(address =&gt; uint256) balances; // keccak(slot, key)
</code></pre>
      <h3>Calldata & Memory</h3>
      <p>Prefer <code>calldata</code> for external function parameters to avoid memory copies where possible.</p>
    `,
  },
  // Intermediate – Zilliqa
  {
    slug: "zilliqa-deployment-and-testing",
    title: "Deploying and Testing on Zilliqa",
    excerpt:
      "Local dev, testnet flows, and contract deployment strategies on Zilliqa.",
    level: "intermediate",
    tags: ["zilliqa", "testing", "deployment"],
    hero: "/articles/zilliqa-deploy-testing.svg",
    contentHtml: `
      <h2>From Local to Testnet</h2>
      <p>Iterate quickly with local tooling, then stage on Zilliqa testnet before mainnet.</p>
      <img src="/articles/zilliqa-deploy-testing.svg" alt="Deployment workflow" />
      <h3>Checklist</h3>
      <ul>
        <li>Automate tests (unit, fuzz, invariants).</li>
        <li>Use deterministic deployments and verify source.</li>
        <li>Record addresses and ABI artifacts per environment.</li>
      </ul>
      <h3>Promotion</h3>
      <p>Use feature flags and phased rollouts. Capture telemetry on failures.</p>
    `,
  },
  // Intermediate – EVM
  {
    slug: "gas-optimizations",
    title: "Practical Gas Optimizations",
    excerpt: "Real-world micro-optimizations that actually matter in 2025.",
    level: "intermediate",
    tags: ["evm", "gas", "solidity"],
    hero: "/articles/gas-optimizations.svg",
    contentHtml: `
      <h2>Gas: Focus on Hot Paths</h2>
      <p>Optimize code that runs often or in tight loops. Prefer clarity unless a hotspot warrants change.</p>
      <img src="/articles/gas-optimizations.svg" alt="Gas optimization themes" />
      <ul>
        <li>Pack storage and minimize SSTORE writes.</li>
        <li>Use unchecked arithmetic when safe.</li>
        <li>Avoid redundant external calls; cache values.</li>
      </ul>
      <pre><code>unchecked { ++i; } // when overflows are impossible
bytes32 slot = keccak256(abi.encode(key, base)); // computed once
</code></pre>
      <h3>Benchmarks</h3>
      <p>Back changes with <code>gas-report</code> and reproducible benchmarks.</p>
    `,
  },
  {
    slug: "foundry-testing",
    title: "Testing Smart Contracts with Foundry",
    excerpt:
      "Patterns for unit, fuzz, and invariant tests that catch critical bugs.",
    level: "intermediate",
    tags: ["foundry", "testing", "solidity"],
    hero: "/articles/foundry-testing.svg",
    contentHtml: `
      <h2>Beyond Unit Tests</h2>
      <p>Combine fuzzing and invariants to explore unexpected states and ensure key properties hold.</p>
      <img src="/articles/foundry-testing.svg" alt="Foundry testing pyramid" />
      <ul>
        <li>Unit: narrow behavior</li>
        <li>Fuzz: random inputs</li>
        <li>Invariant: global properties across time</li>
      </ul>
      <pre><code>// forge test -vvvv
// Invariants validate properties across sequences of calls
</code></pre>
      <h3>Stateful Fuzzing</h3>
      <p>Model complex actors with handlers to explore multi-step attacks and integrations.</p>
    `,
  },
  // Advanced – Zilliqa
  {
    slug: "zilliqa-performance-and-fees",
    title: "Performance Tuning and Fees on Zilliqa",
    excerpt:
      "Throughput, finality, and cost considerations when scaling on Zilliqa.",
    level: "advanced",
    tags: ["zilliqa", "performance", "fees"],
    hero: "/articles/zilliqa-performance.svg",
    contentHtml: `
      <h2>Performance & Fees</h2>
      <p>Design with throughput and finality in mind. Batch operations and tune storage patterns to reduce costs.</p>
      <img src="/articles/zilliqa-performance.svg" alt="Performance and fees" />
      <ul>
        <li>Amortize expensive writes.</li>
        <li>Use events for indexing off-chain.</li>
        <li>Prefer pull over push where possible.</li>
      </ul>
      <h3>Observability</h3>
      <p>Budget gas and storage, track usage over time, and alert on regressions.</p>
    `,
  },
  // Advanced – EVM
  {
    slug: "proxy-upgrades-and-patterns",
    title: "Upgradeable Contracts and Proxy Patterns",
    excerpt:
      "Transparent vs UUPS proxies, storage collisions, and upgrade safety guidelines.",
    level: "advanced",
    tags: ["solidity", "upgrades", "patterns"],
    hero: "/articles/proxy-upgrades.svg",
    contentHtml: `
      <h2>Proxy Patterns</h2>
      <p>Choose between Transparent and UUPS based on trust and flexibility. Guard upgradeability with access control and timelocks.</p>
      <img src="/articles/proxy-upgrades.svg" alt="Proxy pattern diagram" />
      <ul>
        <li>Prevent storage collisions with fixed slots (EIP-1967).</li>
        <li>Comprehensive upgrade tests and simulations.</li>
      </ul>
      <pre><code>// EIP-1967 implementation slot example
bytes32 constant IMPLEMENTATION_SLOT = 0x360894...;
</code></pre>
      <h3>Governance</h3>
      <p>Define clear upgrade owners, timelocks, and emergency procedures.</p>
    `,
  },
  {
    slug: "security-checklist",
    title: "Smart Contract Security Checklist",
    excerpt:
      "A pragmatic checklist: auth, reentrancy, checks-effects, oracles, and more.",
    level: "advanced",
    tags: ["security", "audits", "best-practices"],
    hero: "/articles/security-checklist.svg",
    contentHtml: `
      <h2>Security Checklist</h2>
      <p>Practical steps to reduce risk before deployment.</p>
      <img src="/articles/security-checklist.svg" alt="Security checklist" />
      <ul>
        <li>Access control & pausability where needed.</li>
        <li>Reentrancy guards on external-facing state changes.</li>
        <li>Checks-Effects-Interactions pattern.</li>
        <li>Oracle data validation and circuit breakers.</li>
        <li>Test coverage, fuzzing, and invariants.</li>
      </ul>
      <h3>Audits & Reviews</h3>
      <p>Run internal reviews and external audits. Address findings and document fixes before mainnet.</p>
    `,
  },
];
