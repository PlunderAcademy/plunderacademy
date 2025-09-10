import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of Plunder Academy.",
};

export default function TermsPage() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-3xl">
      <h1>Terms of Service</h1>
      <p>
        Last updated: {new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>

      <h2>Overview</h2>
      <p>
        These Terms govern your access to and use of Plunder Academy (the &quot;Service&quot;), including but not limited to:
      </p>
      <ul>
        <li>The AI Solidity reviewer</li>
        <li>The AI chatbot for generating code</li>
        <li>Interactive EVM developer training lessons</li>
        <li>Any related websites, applications, or services</li>
      </ul>
      <p>
        By accessing or using the Service, you agree to be bound by these Terms.
      </p>

      <h2>Eligibility</h2>
      <p>
        You must be at least 16 years old (or the age of digital consent in your jurisdiction) to use the Service.
      </p>

      <h2>Educational content; no advice</h2>
      <p>
        All content, including AI‑generated outputs, is provided for educational and informational purposes only and does
        not constitute financial, investment, or legal advice.
      </p>

      <h2>User responsibilities</h2>
      <ul>
        <li>You are solely responsible for your use of the Service and any outcomes or decisions.</li>
        <li>Do not submit unlawful, harmful, or confidential information you are not authorized to share.</li>
        <li>Validate AI outputs before relying on them in development, audits, or deployments.</li>
      </ul>

      <h2>Wallets and transactions</h2>
      <p>
        We do not custody digital assets. Wallet interactions occur directly between you and your wallet provider. You are
        responsible for all transactions you initiate.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The Service, including content and UI, is owned by Plunder Academy or its licensors. You retain ownership of your
        submissions but grant us a limited license to process them for operating the Service.
      </p>

      <h2>AI features and limitations</h2>
      <p>
        Our services may generate automated outputs, including but not limited to code suggestions, analysis, and security reviews.
      </p>
      <ul>
        <li>
          <strong>No warranties</strong>: Such outputs are provided &quot;as is&quot; and &quot;as available&quot;, without any warranties of accuracy, completeness, or fitness for purpose.
        </li>
        <li>
          <strong>Not professional advice</strong>: AI outputs are not a substitute for professional advice, code review, or security audits.
        </li>
        <li>
          <strong>Your responsibility</strong>: You are solely responsible for verifying and validating any outputs before using them.
        </li>
        <li>
          <strong>Third-party processing</strong>: We may use service providers to process prompts and responses. Provider‑side retention may occur for operational, security, and abuse‑prevention purposes.
        </li>
      </ul>

      <h2>Prohibited uses</h2>
      <ul>
        <li>Reverse engineering, disrupting, or overloading the Service.</li>
        <li>Using the Service for unlawful activities, spam, or malware.</li>
        <li>Attempting to bypass security or abuse rate limits.</li>
      </ul>

      <h2>Disclaimers</h2>
      <p>
        The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, whether express or implied,
        including merchantability, fitness for a particular purpose, and non‑infringement.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Plunder Academy will not be liable for any indirect, incidental, special,
        consequential, or punitive damages, or loss of profits or data, arising from or related to your use of the
        Service.
      </p>

      <h2>Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Plunder Academy from any claims, liabilities, damages, and expenses
        arising from your use of the Service or violation of these Terms.
      </p>

      <h2>Changes to the Service and Terms</h2>
      <p>
        We may modify or discontinue the Service (in whole or part) and update these Terms from time to time. Continued use
        after changes constitutes acceptance of the updated Terms.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms will be governed by applicable law, without regard to conflict‑of‑laws principles. Venue and
        jurisdiction will be determined by the location of the operator.
      </p>

      <h2>Contact</h2>
      <p>
        We currently do not maintain a public support email. Updates to contact information will be posted on the site.
      </p>
    </div>
  );
}



