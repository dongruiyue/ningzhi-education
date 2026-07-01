"use client";

import { useState } from "react";

type FAQItemProps = {
  question: string;
  children: React.ReactNode;
};

export function FAQItem({ question, children }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-neutral-100 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-center justify-between gap-4"
      >
        <span className="text-lg font-medium text-neutral-900">{question}</span>
        <svg
          className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="mt-3 text-neutral-600 leading-relaxed">{children}</div>}
    </div>
  );
}
