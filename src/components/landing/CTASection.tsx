import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-brand">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          找个敢说真话的机构
        </h2>
        <p className="mt-4 text-lg text-white/80 max-w-lg mx-auto">
          不夸海口、不打包票、不制造焦虑。我们做真实的评估，给可执行的方案。
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/study-abroad" variant="secondary" size="lg">
            了解留学英语
          </Button>
          <Button href="/k12" variant="secondary" size="lg">
            了解校内提升
          </Button>
        </div>
        <p className="mt-6 text-sm text-white/50">
          {BRAND.experienceTagline}
        </p>
      </div>
    </section>
  );
}
