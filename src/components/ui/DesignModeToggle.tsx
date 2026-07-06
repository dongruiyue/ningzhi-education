"use client";

import { useState } from "react";

// ponytail: lightweight inline toggle, no deps
export function DesignModeToggle() {
  const [on, setOn] = useState(false);

  const toggle = () => {
    const next = !on;
    document.designMode = next ? "on" : "off";
    setOn(next);
  };

  return (
    <button
      onClick={toggle}
      title={on ? "Click to exit Design Mode" : "Click to enter Design Mode (edit text directly on page)"}
      className="fixed bottom-4 right-4 z-[9999] w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-xs font-bold border transition-all"
      style={{
        background: on ? "#2563EB" : "#fff",
        color: on ? "#fff" : "#6B7280",
        borderColor: on ? "#2563EB" : "#DEE2E6",
      }}
    >
      {on ? "✎" : "✎"}
    </button>
  );
}
