import * as React from "react";
import { cn } from "@/lib/utils";

type CodeInputProps = Omit<React.ComponentProps<"textarea">, "value" | "onChange"> & {
  value: string;
  onChange: (value: string) => void;
};

// Plain textarea with a line-number gutter. Lines don't wrap, so the numbers stay
// aligned with the "Line" references the reviewer reports.
export function CodeInput({ value, onChange, className, ...props }: CodeInputProps) {
  const gutterRef = React.useRef<HTMLDivElement>(null);
  const lineCount = value.split("\n").length;

  return (
    <div
      className={cn(
        "flex min-h-0 overflow-hidden bg-muted/30 font-mono text-[13px] leading-6 focus-within:ring-2 focus-within:ring-ring/50 focus-within:ring-inset",
        className
      )}
    >
      <div
        ref={gutterRef}
        aria-hidden
        className="shrink-0 select-none overflow-hidden border-r border-border/60 bg-muted/40 px-3 py-3 text-right text-muted-foreground/70 tabular-nums"
      >
        {Array.from({ length: lineCount }, (_, i) => (
          <div key={i}>{i + 1}</div>
        ))}
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onScroll={(e) => {
          if (gutterRef.current) gutterRef.current.scrollTop = e.currentTarget.scrollTop;
        }}
        wrap="off"
        spellCheck={false}
        autoCapitalize="off"
        autoComplete="off"
        className="scrollbar-visible min-h-0 min-w-0 flex-1 resize-none overflow-auto bg-transparent px-4 py-3 whitespace-pre text-foreground outline-none"
        {...props}
      />
    </div>
  );
}
