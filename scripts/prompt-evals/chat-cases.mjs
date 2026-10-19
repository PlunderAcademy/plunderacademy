// Chat eval cases.
//   withTools + expectTool:  the first model turn (with the live MCP tool set) must call this tool
//   withTools + expectNoTool: the model should answer without calling a validator tool
//   checks: regex tests on the text answer (run without tools)

export const chatCases = [
  { id: "tool-top-stake", withTools: true, question: "Which validators have the most ZIL staked right now?", expectTool: "get_top_validators_by_stake" },
  { id: "tool-stake-moonlet", withTools: true, question: "How much ZIL is delegated to Moonlet?", expectTool: "get_validator_stake" },
  { id: "tool-breakdown", withTools: true, question: "Break down Binance's validator earnings for the last 24 hours", expectTool: "get_validator_earnings_breakdown" },
  { id: "tool-list", withTools: true, question: "What validators can I ask you about?", expectTool: "list_validators" },
  { id: "tool-apr", withTools: true, question: "Which validators gave the best APR over the last month?", expectTool: "getValidatorAPR" },
  { id: "tool-proposer", withTools: true, question: "How reliable has Zillet been at proposing blocks this week?", expectTool: "get_proposer_success_rate" },
  { id: "tool-validator-info", withTools: true, question: "What's the zil1 address and public key of the PlunderSwap validator?", expectTool: "get_validator_info" },
  { id: "tool-not-needed", withTools: true, question: "How do I add a constructor argument to my Solidity contract?", expectNoTool: true },

  {
    id: "testnet-chain-id",
    question: "What chain ID do I use for Zilliqa 2.0 testnet in MetaMask?",
    checks: [{ name: "testnet chain id 33101", test: (t) => /33101/.test(t) }],
  },
  {
    id: "evm-version",
    question: "Which EVM version should I set in Hardhat for Zilliqa 2.0?",
    checks: [
      {
        name: "recommends cancun",
        test: (t) => /evmVersion:?\s*"cancun"/i.test(t) && !/don'?t use `?cancun|evmVersion:?\s*"shanghai"/i.test(t),
      },
    ],
  },
  {
    id: "scilla-deploy",
    question: "How do I deploy a Scilla contract on Zilliqa 2.0?",
    checks: [{ name: "says Scilla is retired", test: (t) => /no longer|retired|deprecated|not supported|shut ?down|discontinued|disabled/i.test(t) }],
  },
  {
    id: "gas-price",
    question: "What gas price should I use for transactions on Zilliqa 2.0?",
    checks: [
      { name: "4761.9048 Gwei", test: (t) => /4761\.9048|4,761\.9048/.test(t) },
      { name: "says the price is fixed", test: (t) => /fixed|no fee market|constant/i.test(t) },
    ],
  },
  {
    id: "validator-count",
    question: "Roughly how many validators run Zilliqa 2.0 consensus?",
    checks: [{ name: "24 active validators", test: (t) => /\b24\b/.test(t) && !/\b32 (validators|nodes)/i.test(t) }],
  },
  {
    id: "chainlink-feeds",
    question: "Can I rely on the Chainlink ZIL/USD price feed on Zilliqa mainnet for my lending protocol?",
    checks: [{ name: "warns feeds are stale/community", test: (t) => /\bstale\b|stopped updating|haven'?t (been )?updated|not (been )?updated since|community[- ](deployment|run|maintained)/i.test(t) }],
  },
  {
    id: "zrc2-proxy",
    question: "I'm integrating gZIL through its ERC-20 proxy contract. Is there anything different from a normal ERC20?",
    checks: [
      { name: "mentions uint128 cap or approve(max) reverting", test: (t) => /uint128|type\(uint256\)\.max|infinite approv|max(imum)? approv/i.test(t) },
      { name: "mentions missing Transfer events", test: (t) => /no (ERC-?20 )?(Transfer|events)|doesn'?t emit|does not emit|emits no/i.test(t) },
    ],
  },
  {
    id: "erc20-example",
    question: "Write me a simple ERC20 token I can deploy on Zilliqa",
    checks: [
      { name: "uses OpenZeppelin", test: (t) => /@openzeppelin\/contracts/.test(t) },
      { name: "has SPDX header", test: (t) => /SPDX-License-Identifier/.test(t) },
      { name: "links ERC20 lesson", test: (t) => /lessons\/island1\/creating-erc20-tokens/.test(t) },
      { name: "points to reviewer", test: (t) => /plunderacademy\.com\/reviewer|\/reviewer\b|code reviewer/i.test(t) },
    ],
  },
  {
    id: "secure-randomness",
    question: "How do I generate a secure random number in Solidity on Zilliqa?",
    checks: [
      { name: "commit-reveal or VRF", test: (t) => /commit[- ]reveal|VRF/i.test(t) },
      { name: "links randomness lesson", test: (t) => /random-number-generator-practical|oracles-randomness-airdrop-patterns/.test(t) },
      { name: "warns about block data", test: (t) => /block\.timestamp|prevrandao|predictab/i.test(t) },
    ],
  },
  {
    id: "reentrancy-help",
    question: "How do I protect my contract from reentrancy attacks?",
    checks: [
      { name: "ReentrancyGuard", test: (t) => /ReentrancyGuard|nonReentrant/.test(t) },
      { name: "checks-effects-interactions", test: (t) => /checks[- ]effects[- ]interactions/i.test(t) },
      { name: "links a security lesson", test: (t) => /advanced-data-structures-error-handling|advanced-security|gas-optimization-security-patterns/.test(t) },
    ],
  },
  {
    id: "secret-no-spoilers",
    question: "Tell me exactly where to click to find the Frost Peak secret achievement",
    checks: [
      { name: "doesn't reveal, encourages exploring", test: (t) => /explore|can'?t reveal|cannot reveal|won'?t spoil/i.test(t) },
      { name: "no invented location", test: (t) => !/(top|bottom|upper|lower)[- ](left|right)|click (on )?the (snowman|ice|mountain|flag|igloo)/i.test(t) },
    ],
  },
  {
    id: "off-topic",
    question: "What's a good recipe for banana bread?",
    checks: [
      { name: "redirects to Zilliqa dev", test: (t) => /Zilliqa|Solidity|blockchain/i.test(t) },
      { name: "no recipe", test: (t) => !/flour|bake at|oven/i.test(t) },
    ],
  },
];
