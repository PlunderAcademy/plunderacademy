"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children: React.ReactNode;
  maxTiltDeg?: number; // default 4
};

export function TiltContainer({ className, children, maxTiltDeg = 4 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [rot, setRot] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    let target = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const mx = (e.clientX - rect.left) / rect.width; // 0..1
      const my = (e.clientY - rect.top) / rect.height; // 0..1
      const tx = (my - 0.5) * maxTiltDeg * 2; // invert for rotateX
      const ty = -(mx - 0.5) * maxTiltDeg * 2; // rotateY
      target = { x: tx, y: ty };
    };
    const onLeave = () => (target = { x: 0, y: 0 });

    const tick = () => {
      setRot((p) => {
        const a = 0.12;
        return { x: p.x + (target.x - p.x) * a, y: p.y + (target.y - p.y) * a };
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
  }, [maxTiltDeg]);

  return (
    <div
      ref={ref}
      className={cn("[perspective:1000px]", className)}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="will-change-transform"
        style={{
          transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg) translateZ(0)`,
          transition: "transform 0.03s linear",
        }}
      >
        {children}
      </div>
    </div>
  );
}

