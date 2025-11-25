# Master Review Prompt for Island 5 Module 4 Lessons

Use this prompt in successive chat sessions to review each remaining lesson in the `advanced-security` module for production readiness.

---

## Review Instructions

Review the lesson titled attached located in `/src/content/modules/island5/advanced-security/` to ensure it is production-ready.

### 1. Lesson Reference Style
**Requirement:** Replace all numerical lesson references (e.g., "5.12", "5.13") with the actual lesson file names.

**Examples:**
- ❌ "next lesson (5.13)"
- ✅ "next lesson (ai-auditor-findings-interpretation)"
- ✅ "as covered in common-vulnerability-patterns"

**Action:** Search for patterns like "lesson 5.", "(5.", "Lesson 5", etc. and replace with file names.

### 2. Real-World Examples Validation
**Requirement:** All real-world examples, case studies, and historical incidents must be from **2021 or later** (no older than 4 years from current date).

**Examples to avoid:**
- DAO Hack (2016)
- Parity Multi-Sig (2017)
- Any pre-2021 incidents

**Acceptable examples though others can be considered (2021-2024):**
- Poly Network (2021) - $611M
- Wormhole Bridge (2022) - $325M
- Nomad Bridge (2022) - $190M
- Euler Finance (2023) - $197M
- Multichain (2023) - $126M
- Vyper Compiler Bug (2023) - $70M+ across multiple protocols

**Action:** Review all case studies and replace any examples older than 2021 with recent, relevant incidents.

### 3. AI Reviewer Route Verification
**Requirement:** Verify all references to the AI Reviewer at `/reviewer` are accurate.

**Check points:**
- Route exists: `/src/app/reviewer/page.tsx`
- API endpoint exists: `/src/app/api/reviewer/route.ts`
- References to functionality match implementation
- Any specific features mentioned are actually implemented

**Action:** Search for "/reviewer" mentions and verify against codebase.

### 4. OpenZeppelin Version Consistency
**Requirement:** Standardize ALL code examples to **OpenZeppelin Contracts v5.x**.

**Key v5.x changes:**
- `Ownable` constructor requires explicit `initialOwner` parameter: `Ownable(msg.sender)`
- `Pausable` unchanged in basic usage
- `AccessControl` unchanged in basic usage
- `ReentrancyGuard` unchanged

**Examples:**

❌ **Old v4.x pattern:**
```solidity
contract MyToken is Ownable {
    constructor() {
        // owner automatically set to msg.sender
    }
}
```

✅ **Correct v5.x pattern:**
```solidity
contract MyToken is Ownable {
    constructor() Ownable(msg.sender) {
        // explicit initial owner required
    }
}
```

**Action:** 
1. Update all import statements
2. Update constructor patterns
3. Remove any comments referencing "v4.x"
4. Ensure all examples compile with latest Solidity 0.8.x

### 5. Testing Framework Approach
**Requirement:** Keep BOTH Hardhat and Foundry examples when testing is shown (for educational value).

**Rationale:**
- Hardhat: Accessible for JS/TS developers, rich ecosystem
- Foundry: Faster execution, native Solidity, modern tooling
- Students benefit from seeing both approaches

**Action:**
- Add clear section headers: "#### Testing with Hardhat" and "#### Testing with Foundry (Alternative)"
- Ensure both examples test the same functionality
- Both should be accurate and runnable

### 6. Code Accuracy Review
**Check all code examples for:**
- [ ] Syntax errors
- [ ] Correct Solidity version pragmas
- [ ] Proper imports
- [ ] Logical correctness
- [ ] Security best practices
- [ ] Comments accurately describe code behavior
- [ ] No contradictory statements

**Action:** Manually review each code block or test compile if possible.

### 7. Formatting and Structure
**Ensure:**
- [ ] Proper markdown heading hierarchy (h2 → h3 → h4)
- [ ] Code blocks have language tags
- [ ] Consistent indentation in code
- [ ] Bullet points and numbered lists formatted correctly
- [ ] No broken links or references
- [ ] Emojis used sparingly (only for warnings/checkmarks in code comments)
- [ ] Dense pipe-separated tables converted to readable list formats (see below)

**Table formatting requirement:**

Replace dense multi-column tables (especially those with long text in cells) with clear list formats using:
- Bold headings for each item/scenario
- Arrows (→) to show relationships or outcomes
- Bullet points to break down details
- Clear visual separation between concepts

**Example transformation:**

❌ **Avoid this (hard to read):**
```markdown
| Vulnerability | Strategy | Impact |
|---------------|----------|--------|
| **Deposit bug** | Pause deposits | Users can't deposit (safe), but can withdraw and transfer (funds not locked) |
```

✅ **Use this instead (student-friendly):**
```markdown
**Deposit function bug** → Pause deposits only
- Users can't deposit (safe)
- Users can still withdraw and transfer existing balances
- Funds are not locked
```

**When to keep tables:**
- Simple reference tables with 2-3 columns of short data
- Timeline tables with clear date/event pairs
- Comparison tables where side-by-side format aids comprehension

### 7a. MDX Safety Rules (critical)

To prevent MDX parse errors during lesson rendering, apply these rules during reviews:

- Do not use raw `<` or `>` inside markdown tables. Prefer plain words instead:
  - Use "Under $100K" instead of "< $100K"
  - Use "Over $10M" instead of "> $10M"
  - Use "greater than 10%" instead of "> 10%"
- In prose, wrap any comparisons that include `<`, `>`, `<=`, `>=` in inline code:
  - Example: `require(block.timestamp <= deadline, "Signature expired")`
- Wrap any inline code expressions like `require(...)`, `if (...)`, `a <= b` in backticks.
- If an arrow symbol causes rendering issues in your environment, you may replace `→` with a colon `:` (e.g., "Concept: Outcome").
- Avoid HTML entities like `&lt;` and `&gt;` in table cells. If you must show them, wrap them in backticks: `` `&lt;` ``.
- Quick checks to run during review (conceptual):
  - Ensure tables have no raw `<` or `>` characters in cells.
  - Ensure prose has no un-backticked `<=` or `>=` expressions.
  - Ensure all code blocks are fenced and have a language tag where appropriate.

### 8. Relevance to Island 5 Security Theme
**Verify:**
- [ ] Content aligns with Module 4's security focus
- [ ] Builds on knowledge from previous modules
- [ ] References to wallet connections, frontend integration, and transaction handling are accurate
- [ ] Practical examples are relevant to dApp development
- [ ] Lessons connect to the AI Reviewer tool appropriately

---

## Review Checklist

Use this checklist for each lesson:

- [ ] **Lesson references**: All numerical references replaced with file names
- [ ] **Real-world examples**: All examples from 2021 or later
- [ ] **AI Reviewer refs**: All mentions verified against codebase
- [ ] **OpenZeppelin v5**: All code examples updated to v5.x syntax
- [ ] **Testing frameworks**: Both Hardhat and Foundry shown with clear labels
- [ ] **Code accuracy**: All examples reviewed and verified
- [ ] **Formatting**: Markdown structure consistent and correct
- [ ] **Table formatting**: Dense pipe-separated tables converted to readable list formats
- [ ] **MDX safety**: No raw `<` or `>` in tables; no un-backticked `<=`/`>=` in prose; inline comparisons wrapped in backticks
- [ ] **Relevance**: Content aligns with Island 5 module objectives
- [ ] **No linting errors**: Run linter on file after changes

---

## Lessons to Review in Module 4

Located in `/src/content/modules/island5/advanced-security/`:

1. ✅ `common-vulnerability-patterns.mdx` (COMPLETED)
2. ⏳ `ai-auditor-findings-interpretation.mdx`
3. ⏳ `advanced-attack-vectors.mdx`
4. ⏳ `role-based-access-control.mdx`
5. ⏳ `emergency-response-circuit-breakers.mdx`
6. ⏳ `security-testing-audit-preparation.mdx`
7. ⏳ `smart-contract-audit-methodology.mdx`
8. ⏳ `incident-response-playbooks.mdx`

---

## Sample Prompt for Next Review

```
Review the lesson at src/content/modules/island5/advanced-security/ai-auditor-findings-interpretation.mdx following the guidelines in MODULE-4-REVIEW-PROMPT.md:

1. Replace numerical lesson references with file names
2. Verify all real-world examples are from 2021+
3. Confirm AI Reviewer references are accurate
4. Standardize to OpenZeppelin v5.x
5. Ensure both Hardhat and Foundry testing examples are present with clear labels
6. Review all code for accuracy
7. Check formatting and structure
8. Convert dense pipe-separated tables to readable list formats
9. Verify relevance to Island 5 security theme

Make all necessary corrections to ensure the lesson meets production standards.
```

---

## Notes

- **Educational context**: These lessons are part of a comprehensive dApp development tutorial, so clarity and accuracy are paramount.
- **Production ready**: All lessons should be polished, error-free, and ready for students to follow.
- **Code examples**: Should be copy-paste ready and actually work when implemented.
- **Balance**: Maintain both depth and accessibility—students are learning, not experts yet.

