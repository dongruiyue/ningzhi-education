import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PRICING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "课程价格",
  description: "宁致教育透明的课程价格体系。1V1、1V2、标准小班、拼团小班——不推长课包，以目标定价。",
};

const planOrder = ["standard", "duo", "small", "group"] as const;
type PlanKey = (typeof planOrder)[number];

const planColors: Record<PlanKey, { card: string; border: string; badge: string }> = {
  standard: { card: "bg-white", border: "border-neutral-200", badge: "bg-neutral-100 text-neutral-600" },
  duo: { card: "bg-white", border: "border-neutral-200", badge: "bg-neutral-100 text-neutral-600" },
  small: { card: "bg-white", border: "border-brand/30", badge: "bg-brand text-white" },
  group: { card: "bg-white", border: "border-amber-300", badge: "bg-amber-500 text-white" },
};

export default function PricingPage() {
  const p = PRICING;

  return (
    <>
      {/* ===== Hero ===== */}
      <section className="bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
            {p.heroTitle}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
            {p.heroSubtitle}
          </p>
        </div>
      </section>

      {/* ===== Pricing Cards ===== */}
      <section className="bg-neutral-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {planOrder.map((key) => {
              const plan = p.plans[key];
              const colors = planColors[key];
              return (
                <div
                  key={key}
                  className={`rounded-xl ${colors.card} ${colors.border} border shadow-sm flex flex-col`}
                >
                  <div className="px-6 pt-6">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${colors.badge}`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <h3 className="text-lg font-bold text-neutral-900">{plan.title}</h3>
                  </div>
                  <div className="px-6 pb-4 border-b border-neutral-100">
                    <span className="text-4xl font-bold text-neutral-900">{plan.price}</span>
                    <span className="ml-1 text-sm text-neutral-400">{plan.unit}</span>
                  </div>
                  <ul className="px-6 py-6 flex-1 space-y-3">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                        <svg className="w-4 h-4 mt-0.5 shrink-0 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="px-6 pb-6">
                    <Button
                      href="/#trial"
                      variant={key === "small" ? "primary" : "secondary"}
                      size="md"
                      className="w-full"
                    >
                      预约试听
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== 拼团玩法 ===== */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-neutral-900 text-center">{p.groupBuy.title}</h2>
          <p className="mt-3 text-lg text-neutral-500 text-center">{p.groupBuy.subtitle}</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            {p.groupBuy.steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-brand text-white font-bold flex items-center justify-center text-lg">{i + 1}</div>
                <p className="mt-4 text-sm text-neutral-600 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 rounded-xl bg-brand/5 border border-brand/20 text-center">
            <p className="text-base font-medium text-brand-dark">{p.groupBuy.highlight}</p>
          </div>
        </div>
      </section>

      {/* ===== 师时经济学表格 ===== */}
      <section className="bg-neutral-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-neutral-900 text-center">为什么拼团反而机构更愿意给优惠？</h2>
          <p className="mt-3 text-lg text-neutral-500 text-center max-w-2xl mx-auto">
            因为同样一名老师一节课，带4个人比带1个人效率高得多——省出来的成本，我们分给你。
          </p>
          <div className="mt-10 overflow-hidden rounded-xl border border-neutral-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-neutral-100 text-neutral-600">
                  <th className="px-5 py-4 text-left font-semibold">对比</th>
                  <th className="px-5 py-4 text-center font-semibold">1V1</th>
                  <th className="px-5 py-4 text-center font-semibold">标准小班(3-4人)</th>
                  <th className="px-5 py-4 text-center font-semibold text-brand">拼团小班(5人)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                <tr className="bg-white">
                  <td className="px-5 py-4 text-neutral-600">你付的单价</td>
                  <td className="px-5 py-4 text-center font-semibold text-neutral-900">680元/h</td>
                  <td className="px-5 py-4 text-center font-semibold text-neutral-900">330元/h</td>
                  <td className="px-5 py-4 text-center font-semibold text-brand">290元/h</td>
                </tr>
                <tr className="bg-neutral-50/50">
                  <td className="px-5 py-4 text-neutral-600">比1V1省多少</td>
                  <td className="px-5 py-4 text-center text-neutral-400">—</td>
                  <td className="px-5 py-4 text-center text-success font-semibold">省52%</td>
                  <td className="px-5 py-4 text-center text-success font-semibold">省57%</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-5 py-4 text-neutral-600">老师一节课总收入</td>
                  <td className="px-5 py-4 text-center text-neutral-400">680元</td>
                  <td className="px-5 py-4 text-center text-neutral-900">1,320元</td>
                  <td className="px-5 py-4 text-center text-brand font-semibold">1,450元</td>
                </tr>
                <tr className="bg-neutral-50/50">
                  <td className="px-5 py-4 text-neutral-600">机构怎么想</td>
                  <td className="px-5 py-4 text-center text-neutral-400">一对一精细服务</td>
                  <td className="px-5 py-4 text-center text-success font-semibold">双赢 👍</td>
                  <td className="px-5 py-4 text-center text-success font-semibold">双赢 👍</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-neutral-400 text-center">
            注：以上为早期推广价。随品牌成长和口碑积累，价格会逐步调整，已报名学员不受影响。
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-neutral-900 text-center">常见问题</h2>
          <div className="mt-10 space-y-6">
            {p.faq.map((item, i) => (
              <details key={i} className="group border-b border-neutral-100 pb-6">
                <summary className="flex items-center justify-between cursor-pointer text-base font-medium text-neutral-900 py-2 [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <svg className="w-5 h-5 text-neutral-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm text-neutral-500 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-neutral-900 text-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">{p.cta}</h2>
          <p className="mt-4 text-lg text-white/60">{p.ctaSub}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/#trial" size="lg" className="ring-1 ring-white/30">
              预约试听
            </Button>
            <Button href="/cases" size="lg" className="bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20">
              查看出分案例
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
