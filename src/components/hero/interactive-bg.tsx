"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function InteractiveHeroBg({ className }: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 }); // smoothed

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    let raf = 0;
    let target = { x: 0, y: 0 };
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const mx = (e.clientX - rect.left) / rect.width; // 0..1
      const my = (e.clientY - rect.top) / rect.height; // 0..1
      // normalize to -1..1
      target.x = mx * 2 - 1;
      target.y = my * 2 - 1;
    };

    const onLeave = () => {
      target.x = 0;
      target.y = 0;
    };

    const tick = () => {
      if (reduceMotion) return; // keep static
      // simple exponential smoothing
      setPos((p) => {
        const alpha = 0.12;
        return {
          x: p.x + (target.x - p.x) * alpha,
          y: p.y + (target.y - p.y) * alpha,
        };
      });
      raf = requestAnimationFrame(tick);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // translate distances; slightly stronger for responsiveness
  const t1 = { transform: `translate3d(${pos.x * 36}px, ${pos.y * 22}px, 0) scale(1.06)` };
  const t2 = { transform: `translate3d(${pos.x * -22}px, ${pos.y * -14}px, 0) scale(1.035)` };
  const t3 = { transform: `translate3d(${pos.x * 14}px, ${pos.y * -12}px, 0)` };

  const dist = Math.hypot(pos.x, pos.y);
  const radius = 240 + dist * 160; // spotlight size responsive to cursor distance

  return (
    <div ref={wrapRef} className={cn("pointer-events-auto relative h-full w-full", className)}>
      {/* Large animated gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-20 -z-10 blur-3xl opacity-40"
        style={t1}
      >
        <div
          className="h-full w-full"
          style={{
            background:
              "radial-gradient(60% 50% at 20% 10%, var(--primary) 10%, transparent 60%)," +
              "radial-gradient(50% 45% at 80% 0%, var(--secondary) 15%, transparent 60%)," +
              "radial-gradient(55% 50% at 50% 30%, color-mix(in oklch, var(--accent) 70%, transparent) 10%, transparent 60%)",
          }}
        />
      </div>

      {/* Parallax grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_20%,black_30%,transparent_70%)]"
        style={t2}
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to_right, color-mix(in oklch, var(--border) 40%, transparent) 1px, transparent 1px)," +
              "linear-gradient(to_bottom, color-mix(in oklch, var(--border) 40%, transparent) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Soft spotlight following cursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={t3}
      >
        <div
          className="h-full w-full"
          style={{
            background:
              `radial-gradient(${radius}px ${radius}px at ${50 + pos.x * 20}% ${35 + pos.y * 12}%, ` +
              `color-mix(in oklch, var(--primary) 65%, transparent) 0%, transparent 60%)`,
          }}
        />
      </div>
    </div>
  );
}
