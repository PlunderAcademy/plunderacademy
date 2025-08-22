"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useCompletion } from "@ai-sdk/react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ReviewerPage() {
  const LABEL_REGEX = /\b(Risk|Impact|Fix|Severity|Priority)\s*:/g;

  function highlightLabels(content: React.ReactNode): React.ReactNode {
    if (typeof content === "string") {
      const parts: React.ReactNode[] = [];
      let lastIndex = 0;
      let match: RegExpExecArray | null;
      while ((match = LABEL_REGEX.exec(content)) !== null) {
        const start = match.index;
        const end = start + match[0].length;
        if (start > lastIndex) parts.push(content.slice(lastIndex, start));
        parts.push(
          <strong key={`lbl-${start}`}>{match[1]}:</strong>
        );
        lastIndex = end;
      }
      if (lastIndex < content.length) parts.push(content.slice(lastIndex));
      return parts;
    }

    if (Array.isArray(content)) {
      return content.map((child, i) => (
        <React.Fragment key={i}>{highlightLabels(child)}</React.Fragment>
      ));
    }

    return content;
  }

  function toPlainText(node: React.ReactNode): string {
    let result = "";
    const walk = (n: React.ReactNode): void => {
      if (n == null || typeof n === "boolean") return;
      if (typeof n === "string" || typeof n === "number") {
        result += String(n);
        return;
      }
      if (Array.isArray(n)) {
        n.forEach(walk);
        return;
      }
      if (React.isValidElement(n)) {
        walk((n.props as { children?: React.ReactNode }).children);
      }
    };
    walk(node);
    return result.trim();
  }

  function isSectionTitle(text: string): boolean {
    if (!text) return false;
    // Treat short, title-like lines or lines ending with ':' as section headings
    const wordCount = text.split(/\s+/).length;
    return /:$/u.test(text) || (wordCount <= 6 && /^[A-Z][A-Za-z0-9()\-,' ]+$/.test(text));
  }
  const markdownComponents: Components = {
    h1: ({ children }) => (
      <h1 className="mt-2 mb-3 text-2xl font-bold tracking-tight">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-6 border-b pb-1 text-xl font-semibold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-4 text-lg font-semibold">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-3 text-base font-semibold">{children}</h4>
    ),
    p: ({ children }) => {
      const text = toPlainText(children);
      if (isSectionTitle(text)) {
        return <h4 className="mt-3 text-base font-semibold">{text.replace(/:$/,'')}</h4>;
      }
      return <p className="my-3 leading-relaxed">{highlightLabels(children)}</p>;
    },
    ul: ({ children }) => <ul className="my-3 list-disc pl-6">{children}</ul>,
    ol: ({ children }) => <ol className="my-3 list-decimal pl-6">{children}</ol>,
    li: ({ children }) => <li className="my-1">{highlightLabels(children)}</li>,
    code: (props: { inline?: boolean; children?: React.ReactNode }) => {
      const isInline = Boolean(props.inline);
      const { children } = props;
      return isInline ? (
        <code className="rounded bg-muted px-1 py-0.5 text-[0.9em]">{children}</code>
      ) : (
        <code>{children}</code>
      );
    },
    pre: ({ children }) => (
      <div className="my-3">
        <pre className="overflow-x-auto rounded-lg border bg-card p-3 text-sm">
          {children}
        </pre>
      </div>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-3 border-l-4 border-muted pl-4 italic">{children}</blockquote>
    ),
    hr: () => <hr className="my-6 border-border" />,
    table: ({ children }) => (
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border-b bg-muted/50 px-3 py-2 text-left font-semibold">{children}</th>
    ),
    td: ({ children }) => <td className="border-b px-3 py-2 align-top">{children}</td>,
  };
  const [code, setCode] = React.useState<string>(
    `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract OverflowToken {
    mapping(address => uint256) public balanceOf;

    constructor() {
        balanceOf[msg.sender] = type(uint256).max - 10;
    }

    // BUG: unchecked addition can wrap around
    function mint(uint256 amount) external {
        unchecked {
            balanceOf[msg.sender] += amount; // overflow if amount > 10
        }
    }
}`
  );
  const { completion, complete, isLoading, error } = useCompletion({
    api: "/api/reviewer",
    streamProtocol: "text",
  });

  async function onReview() {
    const prompt = `Please audit the following Solidity code and provide findings, fixes and risks as markdown.\n\n${code}`;
    await complete(prompt);
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            AI Solidity Reviewer
          </h1>
          <p className="text-muted-foreground">
            Paste your Solidity code. We will analyze for security issues, gas,
            and quality.
          </p>
        </div>
        <Textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="min-h-[380px] font-mono"
          spellCheck={false}
        />
        <div className="flex items-center gap-3">
          <Button onClick={onReview} disabled={isLoading}>
            {isLoading ? "Reviewing..." : "Review Code"}
          </Button>
          <Button variant="ghost" onClick={() => setCode("")}>
            Clear
          </Button>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="font-semibold">Findings</h2>
        <div className="min-h-[380px] rounded-md border bg-card p-4 text-sm">
          {error ? (
            <span className="text-destructive">{error.message}</span>
          ) : completion ? (
            <div className="prose max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                {completion}
              </ReactMarkdown>
            </div>
          ) : (
            <span className="text-muted-foreground">No findings yet.</span>
          )}
        </div>
      </div>
    </div>
  );
}
