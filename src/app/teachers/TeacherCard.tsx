"use client";

import { useRef, useCallback } from "react";

interface TeacherCardProps {
  name: string;
  title: string;
  handle: string;
  status: string;
  tags: string[];
}

export function TeacherCard({ name, title, handle, status, tags }: TeacherCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    el.style.transition = "none";
    el.style.transform = `perspective(800px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
  }, []);

  const onLeave = useCallback(() => {
    if (ref.current) {
      ref.current.style.transition = "transform 0.4s ease-out";
      ref.current.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg)";
    }
  }, []);

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="h-full bg-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col"
      style={{
        transformStyle: "preserve-3d",
        perspective: "800px",
        boxShadow: "0 0 0 1px rgba(37,99,235,0.08), 0 8px 32px -8px rgba(0,0,0,0.3)",
      }}
    >
      {/* Blue accent bar */}
      <div className="w-8 h-1 bg-brand rounded-full mb-5" />

      {/* Name */}
      <h3 className="text-2xl font-bold text-white leading-tight">{name}</h3>

      {/* Handle + status */}
      <div className="flex items-center gap-2 mt-1.5 text-sm text-neutral-400">
        <span>@{handle}</span>
        <span className="w-1 h-1 rounded-full bg-neutral-600" />
        <span>{status}</span>
      </div>

      {/* Title */}
      <p className="text-sm text-neutral-300 leading-relaxed mt-4">{title}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block px-2.5 py-0.5 text-xs rounded-full bg-brand/10 text-brand-light border border-brand/15"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
