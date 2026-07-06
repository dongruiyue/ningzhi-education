import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";
import Silk from "@/components/ui/Silk";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Silk animated background */}
      <Silk speed={4} scale={0.8} color="#1D4ED8" noiseIntensity={1.2} rotation={0.3} />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white">
            {BRAND.tagline}
            <span className="block text-white/60 mt-4 text-3xl md:text-4xl lg:text-5xl font-light">
              {BRAND.productTagline}
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/60 leading-relaxed max-w-xl">
            真经教学体系 &middot; 严抓督学 &middot; 真实出分
            <br />
            在深圳，懂行的说实话的人
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button href="/study-abroad" size="lg" className="ring-1 ring-white/30">
              了解留学英语
            </Button>
            <Button href="/k12" size="lg" className="bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20">
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
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-white/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
