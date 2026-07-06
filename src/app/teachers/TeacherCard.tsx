"use client";

import { useRef, useCallback } from "react";

interface TeacherCardProps {
  name: string;
  title: string;
  handle: string;
  status: string;
  tags: string[];
}

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  }, []);

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg)";
  }, []);

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{
        transition: "transform 0.4s ease-out",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

export function TeacherCard({ name, title, handle, status, tags }: TeacherCardProps) {
  return (
    <TiltCard>
      <div className="bg-neutral-900 rounded-2xl p-6 sm:p-8 select-none h-full flex flex-col"
        style={{ minHeight: 260, boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 20px 40px -12px rgba(0,0,0,0.4)" }}>

        {/* Name + handle */}
        <div>
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-sm text-white/40 mt-0.5">@{handle}</p>
        </div>

        {/* Divider */}
        <hr className="border-white/8 my-4" />

        {/* Title — fixed 2-line height */}
        <p className="text-sm text-white/70 leading-relaxed line-clamp-2 min-h-[2.5em]">{title}</p>

        {/* Stats */}
        <p className="text-xs text-white/40 mt-3">{status}</p>

        {/* Tags — pushed to bottom, fixed 2-row height */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4" style={{ minHeight: 64 }}>
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block px-2.5 py-1 text-xs rounded-md bg-white/8 text-white/70 border border-white/8"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </TiltCard>
  );
}
