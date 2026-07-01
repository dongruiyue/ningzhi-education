"use client";

import Link from "next/link";

type ManualLayoutProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export function ManualLayout({ title, subtitle, children }: ManualLayoutProps) {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      {/* Manual Header */}
      <header className="mb-16 pb-12 border-b border-neutral-100">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-neutral-600">{subtitle}</p>
        )}
        {/* Download PDF button */}
        <div className="mt-8 flex items-center gap-4">
          <button
            onClick={() => window.print()}
            className="no-print inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-brand border border-brand rounded-full hover:bg-brand hover:text-white transition-all"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            下载 PDF
          </button>
          <Link
            href="/"
            className="no-print text-sm text-neutral-400 hover:text-neutral-600 transition-colors"
          >
            &larr; 返回首页
          </Link>
        </div>
      </header>

      {/* Manual Content */}
      <div className="prose prose-neutral prose-lg max-w-none">{children}</div>

      {/* Bottom CTA */}
      <div className="no-print mt-20 p-8 bg-neutral-50 rounded-2xl text-center">
        <h3 className="text-xl font-bold text-neutral-900">感兴趣？来试听一节课吧</h3>
        <p className="mt-2 text-neutral-600">
          预约试听课，体验宁致教育的真实课堂
        </p>
        <button
          onClick={() => window.print()}
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-brand rounded-full hover:bg-brand-dark transition-colors"
        >
          下载完整手册 PDF
        </button>
      </div>
    </article>
  );
}
