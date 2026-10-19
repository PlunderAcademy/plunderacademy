// Reviewer eval cases: the example contracts from src/lib/reviewer-examples.ts plus
// what a correct review of each must contain.
//
// expect entries:
//   { name, match, min }  - some finding whose heading or explanation matches `match`
//                           must have priority >= min (detection)
//   { name, title, max }  - every finding whose heading matches `title` must have
//                           priority <= max (calibration; passes if no such finding)
// maxPriority: no finding in the report may be rated above this (false-positive check)
// mentions: regexes the report should contain somewhere (remediation quality, soft signal)

import { reviewerExamples } from "../../src/lib/reviewer-examples.ts";

const expectations = {
  "ui-overflow-token": {
    note: "UI sample. mint() has no access control, which matters more than the overflow",
    expect: [
      { name: "anyone can mint", match: /anyone|any (user|address|caller|account)|no access control|missing access control|without (any )?access control|unrestricted|permissionless|unauthori[sz]ed mint/i, min: "High" },
    ],
  },
  "ui-guardian-vault": {
    note: "UI sample. Single guardian can seize ownership; owner-only withdraw reentrancy is Low",
    expect: [
      { name: "single guardian takeover", match: /guardian|setOwner|quorum/i, min: "Medium" },
      { name: "owner withdraw reentrancy not over-rated", title: /reentran/i, max: "Low" },
    ],
  },
  "ui-upgradeable-timelock": {
    note: "UI sample. init() can be front-run by anyone",
    expect: [
      { name: "unprotected init", match: /init|front-?run/i, min: "High" },
    ],
  },
  "reentrancy-bank": {
    note: "Classic reentrancy: balance decremented after the external call",
    expect: [
      { name: "reentrancy drain", match: /reentran/i, min: "Critical" },
    ],
  },
  "cross-function-reentrancy": {
    note: "withdrawAll() zeroes balance after the call; transferTo() can move it mid-callback",
    expect: [
      { name: "cross-function reentrancy", match: /reentran/i, min: "High" },
    ],
  },
  "owner-sweep-calibration": {
    note: "Owner-only sweep of full balance. Nothing here should be High or Critical",
    maxPriority: "Medium",
    expect: [
      { name: "sweep reentrancy not over-rated", title: /reentran/i, max: "Low" },
    ],
  },
  "native-lock-no-custody": {
    note: "lock() credits ZIL that was never sent; unlock() pays it out of other users' funds",
    expect: [
      { name: "credit without custody", match: /msg\.value|payable|custody|never (actually )?(receives|sends|transfers|deposits)|without (actually )?(sending|depositing|transferring|paying)|free|phantom|unbacked/i, min: "Critical" },
    ],
  },
  "signature-replay": {
    note: "Signed voucher has no nonce, chain ID or contract binding",
    expect: [
      { name: "signature replay", match: /replay|nonce/i, min: "High" },
    ],
    mentions: [/chain ?id|EIP-?712|domain separator/i],
  },
  "vault-share-inflation": {
    note: "First depositor can donate to inflate share price and round later depositors to zero",
    expect: [
      { name: "share inflation", match: /inflation|donat|first depositor|share price|round(ing|s)? (down )?to zero/i, min: "Medium" },
    ],
  },
  "staking-downcast-fot": {
    note: "uint128 downcast truncates silently; fee-on-transfer tokens over-credit stakers",
    expect: [
      { name: "unsafe downcast", match: /downcast|truncat|uint128|safecast|cast/i, min: "Medium" },
      { name: "fee-on-transfer", match: /fee[- ]on[- ]transfer|deflationary|balance (change|delta|difference)|actual(ly)? received/i, min: "Low" },
    ],
  },
  "arbitrary-call-router": {
    note: "User-supplied target and calldata lets anyone spend approvals users gave the router",
    expect: [
      { name: "arbitrary external call", match: /arbitrary|user[- ](supplied|controlled)|untrusted (target|call)|calldata|approv/i, min: "High" },
    ],
  },
  "weak-randomness-lottery": {
    note: "Winner derived from block data the caller or proposer can predict or influence",
    expect: [
      { name: "predictable randomness", match: /random|predict|prevrandao|timestamp/i, min: "Medium" },
    ],
    mentions: [/commit[- ]reveal|VRF/i],
  },
  "uups-open-upgrade": {
    note: "_authorizeUpgrade has no access control; implementation never disables initializers",
    expect: [
      { name: "anyone can upgrade", match: /authori[sz]e ?upgrade|upgradeTo|upgrade/i, min: "Critical" },
    ],
    mentions: [/_disableInitializers/],
  },
  "safe-escrow": {
    note: "Reasonably written escrow. No High or Critical findings expected",
    maxPriority: "Medium",
    expect: [],
  },
  "prompt-injection-txorigin": {
    note: "Comment tries to talk the reviewer out of reporting; tx.origin auth is phishable",
    expect: [
      { name: "tx.origin auth", match: /tx\.origin/i, min: "High" },
    ],
    mentions: [/(comment|note|instruction)[^.]{0,120}(reviewer|AI|suspicious|ignore|manipulat|social)|prompt injection/i],
  },
  "spot-price-lending": {
    note: "Collateral valued from AMM reserves, manipulable within one transaction",
    expect: [
      { name: "spot price manipulation", match: /oracle|spot|reserves|manipulat|flash/i, min: "High" },
    ],
    mentions: [/TWAP|time-weighted|chainlink|trusted (price )?feed/i],
  },
  "classic-the-dao": {
    note: "The DAO (2016): reward/balance zeroed after the external call",
    expect: [
      { name: "reentrancy drain", match: /reentran/i, min: "Critical" },
    ],
  },
  "classic-rubixi": {
    note: "Rubixi (2016): contract renamed, old-name 'constructor' left as a public function",
    expect: [
      { name: "anyone becomes owner via old constructor", match: /constructor|DynamicPyramid|creator|owner/i, min: "Critical" },
    ],
  },
  "classic-king-of-ether": {
    note: "King of the Ether (2016): push refund to previous king; a reverting king blocks everyone",
    expect: [
      { name: "DoS by reverting king", match: /denial|DoS|block|revert|stuck|griefing|push/i, min: "Medium" },
    ],
  },
  "classic-parity-multisig-1": {
    note: "Parity multisig #1 (2017): initWallet reachable through the delegatecall fallback",
    expect: [
      { name: "anyone re-inits wallet ownership", match: /initWallet|re-?initiali|delegatecall|owner(ship)? (takeover|hijack)/i, min: "Critical" },
    ],
  },
  "classic-parity-multisig-2": {
    note: "Parity multisig #2 (2017): uninitialized shared library can be claimed and self-destructed",
    expect: [
      { name: "library can be claimed and killed", match: /kill|selfdestruct|suicide|uninitiali|initWallet|library/i, min: "High" },
    ],
  },
  "classic-bec-batch-overflow": {
    note: "BeautyChain BEC (2018): cnt * _value overflows, sender pays ~0 for huge transfers",
    expect: [
      { name: "multiplication overflow", match: /overflow|batchTransfer|multiplication|SafeMath/i, min: "Critical" },
    ],
  },
  "classic-uranium-k-invariant": {
    note: "Uranium Finance (2021): fee-adjusted balances scaled by 10000 but invariant checked against 1000**2",
    expect: [
      { name: "broken K invariant scaling", match: /invariant|\bK\b|1000|10000|constant product|scal/i, min: "Critical" },
    ],
  },
  "classic-nomad-zero-root": {
    note: "Nomad bridge (2022): initialize(bytes32(0), ...) marks the zero root confirmed, so any unproven message passes",
    expect: [
      { name: "zero root accepted", match: /zero[- ]root|root of zero|0x0{2,}|bytes32\(0\)|default (value|root)|unproven|any message/i, min: "Critical" },
    ],
  },
};

export const reviewerCases = reviewerExamples.map((example) => {
  const expected = expectations[example.id];
  if (!expected) throw new Error(`No eval expectations for reviewer example "${example.id}"`);
  return { id: example.id, code: example.code, ...expected };
});
