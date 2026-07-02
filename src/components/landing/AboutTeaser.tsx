import Link from "next/link";

export function AboutTeaser() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Subtle photo background with light overlay for dark text */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/section-bg.jpg)" }}
      />
      <div className="absolute inset-0 bg-white/90" />

      <div className="relative max-w-3xl mx-auto px-6 text-center space-y-8">
        <p className="text-brand font-semibold text-sm tracking-wide uppercase">
          关于宁致教育
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
          一个花了二十万不出分的孩子，
          <br className="hidden sm:block" />
          让我们决定做一间"不一样"的机构
        </h2>
        <p className="text-neutral-600 leading-relaxed max-w-xl mx-auto text-base sm:text-lg">
          我们见过机构和顾问收了钱就消失，见过老师成了替罪羊。
          宁致选择了另一条路：敢跟家长说"课先少上点"，不以课时消耗定价，以目标达成为准。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/about"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors"
          >
            了解我们的故事 →
          </Link>
          <Link
            href="/methodology"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            查看教学方法论
          </Link>
        </div>
      </div>
    </section>
  );
}
