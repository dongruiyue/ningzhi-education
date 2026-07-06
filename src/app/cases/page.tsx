import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "出分案例",
  description:
    "宁致教育真实学生出分案例——雅思从5.5到7.0，KET<sup>2</sup>/PET优秀通过。每一个分数均可查证，不做假不编造。",
};

// ============================================
// Case data
// ============================================
interface CaseItem {
  student: string;
  tag: string;
  product: "留学英语" | "校内提升";
  beforeLabel: string;
  afterLabel: string;
  beforeVal: string;
  afterVal: string;
  duration: string;
  story: string;
  highlight?: string;
}

const CASES: CaseItem[] = [
  // ---- 留学英语 ----
  {
    student: "小林",
    tag: "高三 · 目标澳洲本科",
    product: "留学英语",
    beforeLabel: "雅思总分",
    afterLabel: "雅思总分",
    beforeVal: "5.5",
    afterVal: "6.5",
    duration: "3 个月（全日制）",
    story:
      "入学时最大问题是写作和口语——能听懂、能看懂，但写不出、说不出。通过真经体系系统训练，重点攻克写作逻辑框架和口语话题迁移，三个月实现 1 分跨越，拿到目标学校 offer。",
    highlight: "写作 5.0 → 6.0 | 口语 5.0 → 6.0",
  },
  {
    student: "Alex",
    tag: "大二 · 目标英国 G5",
    product: "留学英语",
    beforeLabel: "雅思总分",
    afterLabel: "雅思总分",
    beforeVal: "6.0",
    afterVal: "7.0",
    duration: "4 个月（周末+假期）",
    story:
      "已考过两次，都卡在 6.0。问题不是学不会，而是不知道哪里有问题。入学测试发现阅读方法效率低（逐字翻译），写作缺乏逻辑框架。针对性调整后，四个月突破 7.0。",
    highlight: "听力 7.5 | 阅读 7.5 | 写作 6.5 | 口语 6.5",
  },
  {
    student: "小陈",
    tag: "高一 · 计划高中后出国",
    product: "留学英语",
    beforeLabel: "入学水平",
    afterLabel: "雅思总分",
    beforeVal: "零基础",
    afterVal: "5.5",
    duration: "12 个月（周末班）",
    story:
      "刚来时连基本的句子都写不完整。经过一年系统性学习，听说读写全面进步，家长说「像换了一个人」。目前正在冲刺 6.5，目标本科直录。",
    highlight: "从零基础到可独立完成雅思写作",
  },
  {
    student: "L 同学",
    tag: "备考雅思<sup>1</sup> · 听力阅读突破",
    product: "留学英语",
    beforeLabel: "听力/阅读",
    afterLabel: "听力/阅读",
    beforeVal: "6.0",
    afterVal: "9.0 / 8.0",
    duration: "考前辅导 20 小时",
    story:
      "通过信号词定位法和结构化速读法的系统训练，20 小时课程实现听力满分、阅读 8.0 的突破。验证了方法论驱动的学习效率远超刷题。",
    highlight: "听力 9.0 满分 | 卢老师指导",
  },
  // ---- 校内提升 ----
  {
    student: "Amy",
    tag: "9 岁 · 三年级",
    product: "校内提升",
    beforeLabel: "KET<sup>2</sup> 目标",
    afterLabel: "KET<sup>2</sup> 成绩",
    beforeVal: "基础一般",
    afterVal: "140（优秀）",
    duration: "12 个月",
    story:
      "从 Unlock<sup>4</sup> Basic 起步，经 Unlock<sup>4</sup> L1 + Reading Explorer<sup>5</sup> L1 系统学习，KET<sup>2</sup> 总分 140，校内英语稳居班级前列。家长反馈：最大变化是孩子敢开口了，会主动读英文绘本。",
    highlight: "校内英语从「中游」到「班级前列」",
  },
  {
    student: "小杰",
    tag: "12 岁 · 初一",
    product: "校内提升",
    beforeLabel: "校内英语",
    afterLabel: "校内英语",
    beforeVal: "C 档",
    afterVal: "A 档",
    duration: "6 个月",
    story:
      "主要问题在写作和语法。采用 Unlock<sup>4</sup> L1（综合）+ Great Writing<sup>6</sup> L1（写作专项）组合方案，写作从「写不出三句话」到「能写 150 词短文」，校内成绩从 C 档跃升至 A 档。",
    highlight: "写作从 3 句话到 150 词短文",
  },
  {
    student: "Sophia",
    tag: "13 岁 · 已过 KET<sup>2</sup>",
    product: "校内提升",
    beforeLabel: "PET<sup>3</sup> 目标",
    afterLabel: "PET<sup>3</sup> 成绩",
    beforeVal: "阅读慢/写作弱",
    afterVal: "154（通过）",
    duration: "8 个月",
    story:
      "已过 KET<sup>2</sup> 但阅读速度慢、写作逻辑弱。Pathways<sup>7</sup> L1 + Reading Explorer<sup>5</sup> L2 + Great Writing<sup>6</sup> L2 三套教材组合发力，阅读速度翻倍，写作从套模板到自主表达。",
    highlight: "阅读速度翻倍 | 写作实现自主表达",
  },
];

// ============================================
// Sub-components
// ============================================
function ScoreBar({ before, after, label }: { before: string; after: string; label: string }) {
  return (
    <div className="flex items-center gap-2 sm:gap-4">
      <div className="text-center">
        <p className="text-xs text-neutral-400 mb-0.5">学前</p>
        <p className="text-xl sm:text-2xl font-bold text-neutral-400">{before}</p>
      </div>
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
      <div className="text-center">
        <p className="text-xs text-brand font-medium mb-0.5">学后</p>
        <p className="text-xl sm:text-2xl font-bold text-brand">{after}</p>
      </div>
      <span className="text-xs text-neutral-300 hidden sm:inline">|</span>
      <span className="text-xs text-neutral-500 hidden sm:inline">{label}</span>
    </div>
  );
}

function CaseCard({ item }: { item: CaseItem }) {
  return (
    <article className="bg-neutral-50 rounded-2xl p-6 sm:p-8 space-y-5 hover:bg-neutral-100/70 transition-colors">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-lg font-bold text-neutral-900">{item.student}</h3>
          <p className="text-xs text-neutral-400">{item.tag}</p>
        </div>
        <span className="self-start inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-neutral-200 text-neutral-600">
          {item.duration}
        </span>
      </div>

      {/* Score comparison */}
      <ScoreBar before={item.beforeVal} after={item.afterVal} label={item.beforeLabel} />

      {/* Highlight badge */},
      {item.highlight && (
        <p className="text-sm font-medium text-brand bg-brand/5 rounded-lg px-4 py-2 inline-block">
          {item.highlight}
        </p>
      )},
      {/* Story */}
      <p className="text-sm text-neutral-600 leading-relaxed">{item.story}</p>
    </article>
  );
}

// ============================================
// Page
// ============================================
export default function CasesPage() {
  const ieltsCases = CASES.filter((c) => c.product === "留学英语");
  const k12Cases = CASES.filter((c) => c.product === "校内提升");

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 sm:py-24 space-y-20 sm:space-y-28">
      {/* ========================================
          Hero — 成绩单墙概念
          ======================================== */}
      <section className="max-w-3xl space-y-6 text-center sm:text-left">
        <p className="text-brand font-semibold text-sm tracking-wide uppercase">
          真实出分案例
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
          每一个分数，都经得起查证
        </h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          不做假分、不编案例。学生交出去的每一份成绩单，都是在真实考场上拿到的。
          在宁致，成绩单比任何广告都有说服力。
        </p>
        {/* Trust signals */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
          {[
            { num: "100%", label: "真实考试成绩" },
            { num: "1.0+", label: "雅思平均提分" },
            { num: "0 例", label: "黑灰产保分" },
            { num: "可查证", label: "每份成绩单" },
          ].map((s) => (
            <div key={s.label} className="text-center p-3 bg-neutral-50 rounded-xl">
              <p className="text-xl sm:text-2xl font-bold text-brand">{s.num}</p>
              <p className="text-xs text-neutral-500 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================
          留学英语 · 雅思出分案例
          ======================================== */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
            留学英语 · 雅思出分
          </h2>
          <span className="text-xs text-neutral-400 bg-neutral-100 rounded-full px-3 py-1">
            {ieltsCases.length} 个案例
          </span>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {ieltsCases.map((item) => (
            <CaseCard key={item.student} item={item} />
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/study-abroad"
            className="inline-flex items-center text-sm text-brand hover:underline underline-offset-4"
          >
            了解留学英语课程与完整方法论 →
          </Link>
        </div>
      </section>

      {/* ========================================
          校内提升 · KET<sup>2</sup>/PET<sup>3</sup>/校内案例
          ======================================== */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
            校内提升 · 能力与分数双赢
          </h2>
          <span className="text-xs text-neutral-400 bg-neutral-100 rounded-full px-3 py-1">
            {k12Cases.length} 个案例
          </span>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {k12Cases.map((item) => (
            <CaseCard key={item.student} item={item} />
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/k12"
            className="inline-flex items-center text-sm text-brand hover:underline underline-offset-4"
          >
            了解校内提升课程与教材矩阵 →
          </Link>
        </div>
      </section>

      {/* ========================================
          CTA
          ======================================== */}
      <section className="text-center bg-neutral-900 text-white rounded-2xl p-8 sm:p-12 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold">
          你的孩子也能在这里出分
        </h2>
        <p className="text-neutral-400 max-w-lg mx-auto leading-relaxed">
          预约一次免费诊断评估，我们会诚实告诉你——孩子现在是什么水平，大概需要多长时间，以及宁致能不能帮上忙。如果不能，我们也会直说。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/#trial"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-neutral-900 bg-white rounded-full hover:bg-neutral-100 transition-colors"
          >
            预约诊断评估 →
          </a>
          <Link
            href="/about"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
          >
            先了解我们的故事
          </Link>
        </div>
      </section>

    </div>
  );
}
