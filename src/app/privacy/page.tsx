import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Plunder Academy collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <div className="prose prose-gray dark:prose-invert max-w-3xl">
      <h1>Privacy Policy</h1>
      <p>
        Last updated: {new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>

      <h2>Who we are</h2>
      <p>
        Plunder Academy is an interactive EVM developer training hub focused on Zilliqa and related technologies. This
        Privacy Policy explains how we collect, use, and safeguard information in connection with your use of our
        website and services.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Account and wallet information</strong>: If you connect a wallet, we may process your public wallet
          address and basic connection metadata required to establish a session. We do not request or store private keys.
        </li>
        <li>
          <strong>Usage data</strong>: Standard server logs (e.g., IP address, user‑agent, timestamps) needed for
          reliability and security. We do not currently use analytics.
        </li>
        <li>
          <strong>AI interactions</strong>: When you use Chat or Reviewer features, the prompts and conversation content you
          submit are processed to generate responses. Operational logs may include request identifiers, timing, and token
          usage. Provider‑side retention may occur (see “Third‑party service providers”).
        </li>
        <li>
          <strong>Content submissions</strong>: Any code or text you upload or paste into the Reviewer is processed to
          generate an audit‑style report and may be transiently retained in logs for abuse prevention and debugging.
        </li>
      </ul>

      <h2>How we use information</h2>
      <ul>
        <li>Provide, operate, and improve the website, lessons, and interactive features.</li>
        <li>Deliver AI‑powered responses and code reviews.</li>
        <li>Monitor performance, detect abuse, and maintain service reliability and security.</li>
        <li>Understand aggregate usage to prioritize curriculum and feature development.</li>
      </ul>

      <h2>Third‑party service providers</h2>
      <p>
        We do not sell or share personal information with third parties for advertising. We may use essential service
        providers acting as our processors—for example, hosting/infrastructure and AI model providers needed to operate
        Chat/Reviewer—who may retain limited data for operational, security, and abuse‑prevention purposes. Where data is
        transferred internationally, providers may rely on Standard Contractual Clauses (SCCs) or equivalent safeguards.
      </p>

      <h2>Data retention</h2>
      <p>
        We retain information only as long as necessary for the purposes described above, including to provide the
        services, comply with legal obligations, resolve disputes, and enforce agreements. AI request logs and related
        metadata may be short‑lived but can be retained longer for security or debugging. [Retention periods to be added
        here.]
      </p>

      <h2>Children’s privacy</h2>
      <p>
        Our services are intended for individuals who are at least 16 years old (or the age of digital consent in your
        jurisdiction). We do not knowingly collect personal data from children under this age.
      </p>

      <h2>International data transfers</h2>
      <p>
        Service providers may process data in multiple regions, which can result in international data transfers. When
        applicable, transfers are supported by appropriate safeguards such as Standard Contractual Clauses (SCCs).
      </p>

      <h2>Your choices and rights</h2>
      <ul>
        <li>
          <strong>Limit AI submissions</strong>: Avoid including sensitive personal data in prompts or code sent to
          Chat/Reviewer.
        </li>
        <li>
          <strong>Opt‑out of analytics</strong>: We do not currently use analytics. If enabled in the future, we will
          provide a mechanism to opt out.
        </li>
        <li>
          <strong>Access/Deletion</strong>: You may request access to, correction, or deletion of certain information we
          store. Contact details will be published here when available.
        </li>
      </ul>

      <h2>Security</h2>
      <p>
        We use reasonable administrative, technical, and organizational measures to protect information. However, no
        method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee
        absolute security.
      </p>

      <h2>Legal basis</h2>
      <p>
        Where applicable, we may process information based on legitimate interests (to provide and improve our services),
        performance of a contract (when you use interactive features), compliance with legal obligations, and consent (for
        optional features where required).
      </p>

      <h2>Disclaimers</h2>
      <ul>
        <li>
          <strong>No financial or legal advice</strong>: Educational content and AI outputs are provided for informational
          purposes only and do not constitute financial, investment, or legal advice. Use at your own risk.
        </li>
        <li>
          <strong>Model limitations</strong>: AI systems can generate incorrect or incomplete outputs. Always validate
          results before use in production or deployments.
        </li>
        <li>
          <strong>No custody of funds</strong>: We do not custody digital assets. Wallet interactions occur directly via
          your wallet provider; transactions are your responsibility.
        </li>
      </ul>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material changes will be indicated by updating the “Last
        updated” date above and, where appropriate, additional notice.
      </p>

      <h2>Contact</h2>
      <p>
        We currently do not maintain a public support email. Updates to contact information and submission methods for data
        requests will be posted here when available.
      </p>

      <hr />
      <p className="text-sm text-muted-foreground">
        This Privacy Policy is provided for informational purposes and to describe our current practices based on the
        services available today. Specific integrations and settings may evolve over time.
      </p>
    </div>
  );
}


