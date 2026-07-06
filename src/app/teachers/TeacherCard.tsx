"use client";

import { useRef, useCallback, useState } from "react";

interface TeacherCardProps {
  name: string;
  title: string;
  handle: string;
  status: string;
  tags: string[];
}

const CARD_BG = "bg-[#0b1a33]";
const CARD_SHADOW = "0 0 0 1px rgba(37,99,235,0.12), 0 12px 40px -8px rgba(0,0,0,0.5)";

export function TeacherCard({ name, title, handle, status, tags }: TeacherCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  const onMove = useCallback((e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(600px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
  }, []);

  const onLeave = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg)";
    }
    setHover(false);
  }, []);

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={onLeave}
      className="h-full"
      style={{
        transition: "transform 0.5s ease-out",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className={`${CARD_BG} rounded-2xl p-6 sm:p-8 h-full flex flex-col transition-shadow duration-500`}
        style={{
          minHeight: 260,
          boxShadow: hover
            ? "0 0 0 1px rgba(37,99,235,0.25), 0 24px 48px -12px rgba(0,0,0,0.6), 0 0 60px -10px rgba(37,99,235,0.15)"
            : CARD_SHADOW,
        }}
      >
        {/* Name + handle */}
        <div>
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-sm text-white/40 mt-0.5">@{handle}</p>
        </div>

        <hr className="border-white/8 my-4" />

        <p className="text-sm text-white/70 leading-relaxed line-clamp-2 min-h-[2.5em]">{title}</p>

        <p className="text-xs text-white/40 mt-3">{status}</p>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-4" style={{ minHeight: 56 }}>
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-2 py-px text-[11px] rounded-full bg-white/10 text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
