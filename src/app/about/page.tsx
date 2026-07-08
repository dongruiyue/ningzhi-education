import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "关于宁致",
  description:
    "宁致教育——在深圳，用真实结果说话的英语教育。了解我们的品牌故事、使命愿景、教学理念和三条承诺。",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 sm:py-24 space-y-24 sm:space-y-32">
      {/* ========================================
          1. Hero — 品牌主张
          ======================================== */}
      <section className="space-y-6 text-center sm:text-left">
        <p className="text-brand font-semibold text-sm tracking-wide uppercase">
          关于宁致教育
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
          {BRAND.tagline}
        </h1>
        <p className="text-lg sm:text-xl text-neutral-500 max-w-2xl leading-relaxed">
          {BRAND.description}
        </p>
      </section>

      {/* ========================================
          2. 品牌故事
          ======================================== */}
      <section className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
          品牌故事
        </h2>
        <div className="space-y-4 text-neutral-600 leading-relaxed text-base sm:text-lg">
          <p>
            我们的故事，我们只写开头，其他留给别人去说。
          </p>
          <p>
            宁致教育的品牌风格：<strong className="text-neutral-900">真诚、有底线</strong>。
            我们不向学生和家长贩卖焦虑，只讲事实；我们不消耗老师精力，只作后盾。
          </p>
        </div>
      </section>

      {/* ========================================
          3. 使命 · 愿景 · 价值观
          ======================================== */}
      <section className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
          使命 · 愿景 · 价值观
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* 使命 */}
          <div className="bg-neutral-50 rounded-2xl p-6 sm:p-8 space-y-3">
            <span className="text-brand font-semibold text-sm">使命</span>
            <h3 className="text-lg font-bold text-neutral-900">我们为什么存在</h3>
            <p className="text-neutral-600 leading-relaxed">
              以目标定课时，不以课时定结果。降低教师流动性，保持学习一贯性；跟进反馈及时，量体裁衣。
            </p>
          </div>

          {/* 愿景 */}
          <div className="bg-neutral-50 rounded-2xl p-6 sm:p-8 space-y-3">
            <span className="text-brand font-semibold text-sm">愿景</span>
            <h3 className="text-lg font-bold text-neutral-900">我们要去向哪里</h3>
            <p className="text-neutral-600 leading-relaxed">
              成为深圳英语培训行业的"透明标准"——让黑盒感、套路感、营销感在宁致的透明面前无处可藏。
            </p>
          </div>
        </div>

        {/* 价值观 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-neutral-900">三条价值观</h3>
          <div className="space-y-4">
            {[
              {
                title: "真实出分，不走捷径",
                desc: "所有出分均为学生真实考试成绩，老师分数均为真实考场成绩。再赚钱也不碰黑灰产保分。",
              },
              {
                title: "督学到底，不减配",
                desc: "每个学生配助教，每日跟进，每周反馈。宁可利润薄也要保留督学成本。",
              },
              {
                title: "以目标定价，不以课量锁客",
                desc: "目标达成结课，不排无意义课时。不推长课包、折扣有限。",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="flex items-start gap-4 bg-neutral-50 rounded-xl p-5"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center text-sm font-bold mt-0.5">
                  ✓
                </span>
                <div>
                  <h4 className="font-semibold text-neutral-900">{v.title}</h4>
                  <p className="text-sm text-neutral-500 mt-1 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          4. 我们的承诺
          ======================================== */}
      <section className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
          我们的承诺
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              num: "01",
              title: "师资宣传真实",
              desc: "所介绍的老师，背景及经验真实可查，介绍的老师即排课的老师，不会临时换人。",
            },
            {
              num: "02",
              title: "课程体系透明",
              desc: "清晰地和家长介绍所用教材的原因，每节课教什么，为什么这么安排。",
            },
            {
              num: "03",
              title: "合理规划课时",
              desc: "按需制定学习目标后，根据当前情况及阶段性学习成果，合理规划及调整课时，不多报乱报。",
            },
            {
              num: "04",
              title: "反馈及时",
              desc: "每天盯（授课反馈及学生作业完成情况当日发出）、每月测（每月对所学内容进行模考检测）、每阶段复盘。",
            },
          ].map((p) => (
            <div key={p.num} className="bg-neutral-50 rounded-2xl p-6 sm:p-8 space-y-3">
              <span className="text-4xl font-bold text-brand/20">{p.num}</span>
              <h3 className="text-lg font-bold text-neutral-900">{p.title}</h3>
              <p className="text-neutral-600 leading-relaxed text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================
          5. 教学总监
          ======================================== */}
      <section className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
          教学总监
        </h2>
        <div className="bg-neutral-50 rounded-2xl p-6 sm:p-10 space-y-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">崔老师</h3>
            <p className="text-brand font-medium mt-1">教学总监 · 联合创始人</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "学历背景", value: "英国爱丁堡大学 TESOL 硕士" },
              { label: "教学经验", value: "7 年一线教学" },
              { label: "雅思总分", value: "8.0" },
              { label: "听力 / 阅读", value: "双满分 9.0 × 2" },
              { label: "曾任教", value: "新东方 · 学为贵 · 流利说" },
              { label: "累计学员", value: "3,000+" },
            ].map((s) => (
              <div key={s.label}>
                <span className="text-xs text-neutral-400 uppercase tracking-wide">
                  {s.label}
                </span>
                <p className="font-semibold text-neutral-900 mt-0.5">{s.value}</p>
              </div>
            ))}
          </div>

          <div>
            <h4 className="font-semibold text-neutral-900 mb-3">雅思方法论体系</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-neutral-600">
              {[
                "信号词定位法",
                "结构化速读法",
                "逻辑框架搭建",
                "话题迁移策略",
                "场景分类记忆",
                "写作语法精练",
                "备考节奏规划",
                "中国考生数据分析",
              ].map((m) => (
                <span key={m} className="bg-white rounded-lg px-3 py-2 text-center">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          6. 品牌人格
          ======================================== */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
          品牌人格
        </h2>
        <div className="bg-neutral-50 rounded-2xl p-6 sm:p-8 text-center">
          <p className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">
            真诚、有底线
          </p>
          <p className="text-lg text-neutral-500">
            "懂行的说实话的人"
          </p>
          <p className="text-neutral-600 leading-relaxed mt-4 max-w-xl mx-auto">
            像 Patagonia 和苹果的综合体——良心、专业、靠谱。不迎合不讨好，用专业知识和真实数据说话。
          </p>
        </div>
      </section>

    </div>
  );
}
