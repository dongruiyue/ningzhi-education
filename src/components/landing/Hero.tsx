import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Dot-grid background — DNA: background_effects.type = "dot-grid" */}
      <div className="absolute inset-0 dot-grid-bg" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            {BRAND.tagline}
            <span className="block text-brand mt-4">{BRAND.productTagline}</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-neutral-600 leading-relaxed max-w-xl">
            真经教学体系 &middot; 严抓督学 &middot; 真实出分
            <br />
            在深圳，懂行的说实话的人
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button href="/study-abroad" size="lg">
              了解留学英语
            </Button>
            <Button href="/k12" variant="secondary" size="lg">
              了解校内提升
            </Button>
          </div>

          {/* Quick stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "不推长课包", value: "目标结课" },
              { label: "助教督学", value: "每日跟进" },
              { label: "老师真实出分", value: "可查" },
              { label: "深圳本地", value: "100%" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-neutral-900">{stat.value}</div>
                <div className="mt-1 text-sm text-neutral-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
