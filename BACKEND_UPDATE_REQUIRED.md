# Backend API Update Required

## Issue
Quiz submission for the new Island 5 Module 4 (`advanced-security`) is failing with error:
```
Error: Invalid achievement number format
```

## Root Cause
The backend API at `NEXT_PUBLIC_PLUNDER_ACADEMY_API` does not recognize achievement number `0054` as valid.

## Frontend Status ✅
All frontend code is correctly configured:
- Module slug: `advanced-security`
- Achievement mapping in `src/components/interactive-elements/shared/utils.ts`: `'advanced-security': '0054'`
- Quiz file: `src/content/modules/island5/quizzes/advanced-security-quiz.mdx`
- Mission file: `src/content/modules/island5/missions/advanced-security-mission.mdx`
- Module content: `src/content/modules/island5/advanced-security/secure-dapp-operations.mdx`
- Module metadata in `src/lib/mdx.ts`: order 23, title "Frontend Security & Safe Contract Calls"
- UI integration: Island 5 animated map, module progress list, achievement card

## Required Backend Changes
The API endpoint `/api/v1/vouchers/submit` needs to:

1. **Add `0054` to the list of valid achievement numbers**
2. **Configure achievement metadata** for Island 5, Module 4:
   - Achievement Number: `0054`
   - Module: `advanced-security`
   - Title: "Module 4: Security Best Practices - Comprehensive Quiz"
   - Description: "Test your mastery of smart contract security across all 8 lessons: vulnerabilities, AI auditing, access control, testing, emergency response, advanced attacks, audit methodology, and incident response."
   - Island: "Neon Haven" (Island 5)
   - Submission Type: `quiz`
   - Total Questions: 25
   - Passing Score: 80%

## Test Payload
Once backend is updated, test with this payload structure:
```json
{
  "walletAddress": "0x...",
  "achievementNumber": "0054",
  "submissionType": "quiz",
  "submissionData": {
    "answers": {
      "q1": "A",
      "q2": "B",
      "q3": "D",
      "q4": "C",
      "q5": "A",
      "q6": "B",
      "q7": "D",
      "q8": "B",
      "q9": "A",
      "q10": "B",
      "q11": "C",
      "q12": "A",
      "q13": "A",
      "q14": "C",
      "q15": "B",
      "q16": "D",
      "q17": "A",
      "q18": "C",
      "q19": "B",
      "q20": "D",
      "q21": "C",
      "q22": "A",
      "q23": "B",
      "q24": "D",
      "q25": "A"
    }
  },
  "metadata": {
    "timestamp": "2025-11-11T...",
    "timeSpent": 2400
  }
}
```

Note: This quiz now contains 25 multiple choice questions (total 100 points, 4 points each).

## Verification Steps
After backend update:
1. Navigate to http://localhost:3000/lessons/island5/advanced-security
2. Complete the quiz
3. Submit answers
4. Verify voucher is generated successfully
5. Confirm achievement can be claimed on-chain

## Contact
Update the backend API configuration to accept achievement `0054` before this module can be fully tested and deployed.

