"use client";

import { useState } from "react";
import Link from "next/link";
import { NAVIGATION, BRAND } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="no-print sticky top-0 z-50 glass-header">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-neutral-900 hover:text-brand transition-colors"
        >
          {BRAND.name}
          <span className="ml-2 text-xs font-normal text-neutral-400 hidden sm:inline">
            {BRAND.tagline}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-600 hover:text-brand transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${BRAND.contact.phone}`}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-brand rounded-full hover:bg-brand-dark transition-colors"
          >
            预约试听
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-neutral-600"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-neutral-100 bg-white px-6 py-4 flex flex-col gap-3">
          {NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-600 hover:text-brand transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${BRAND.contact.phone}`}
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-brand rounded-full hover:bg-brand-dark transition-colors"
          >
            预约试听
          </a>
        </nav>
      )}
    </header>
  );
}
