import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-28">
      {/* Full-bleed photo + gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/cta-bg.jpg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          找个敢说真话的机构
        </h2>
        <p className="mt-4 text-lg text-white/70 max-w-lg mx-auto">
          不夸海口、不打包票、不制造焦虑。我们做真实的评估，给可执行的方案。
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/study-abroad" size="lg" className="ring-1 ring-white/30">
            了解留学英语
          </Button>
          <Button href="/about" size="lg" className="bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20">
            了解我们的故事
          </Button>
        </div>
        <p className="mt-6 text-sm text-white/40">
          {BRAND.experienceTagline}
        </p>
      </div>
    </section>
  );
}
