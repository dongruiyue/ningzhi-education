import type { Metadata } from "next";
import { TeacherGrid } from "./TeacherGrid";

export const metadata: Metadata = {
  title: "师资团队",
  description:
    "宁致教育师资团队——14位真实分数教师，覆盖英语/数学/物理/生物/经济/地理多学科。拒绝编造履历，所有教师资料真实可查。",
};

export default function TeachersPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24 space-y-16 sm:space-y-24">
      {/* Hero */}
      <section className="max-w-3xl space-y-6 text-center sm:text-left">
        <p className="text-brand font-semibold text-sm tracking-wide uppercase">
          师资团队
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
          真实分数 · 真实履历 · 真实案例
        </h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          14 位教师组成宁致教学网络。每一位老师的学历、分数、出分案例均可验证。
          不做包装，不编履历——我们认为，老师自己考出来的分数，比任何标签都有说服力。
        </p>
        <div className="flex flex-wrap gap-3 text-sm text-neutral-400">
          <span className="bg-neutral-100 rounded-full px-4 py-2">英语 · 雅思<sup>1</sup>/托福<sup>2</sup>/GRE<sup>3</sup></span>
          <span className="bg-neutral-100 rounded-full px-4 py-2">数学 · A-Level<sup>4</sup>/AP<sup>5</sup>/AMC<sup>6</sup></span>
          <span className="bg-neutral-100 rounded-full px-4 py-2">物理 · 生物 · 经济 · 地理</span>
          <span className="bg-neutral-100 rounded-full px-4 py-2">DSE<sup>7</sup> · SAT<sup>8</sup> · IB<sup>9</sup></span>
        </div>
      </section>

      {/* Teacher Grid — Client Component for ProfileCard interactivity */}
      <TeacherGrid />

      {/* CTA */}
      <section className="text-center bg-neutral-50 rounded-2xl p-8 sm:p-12 space-y-4">
        <h2 className="text-2xl font-bold text-neutral-900">
          找到适合你孩子的老师
        </h2>
        <p className="text-neutral-500 max-w-md mx-auto">
          预约咨询，我们会根据学生基础和升学目标，匹配最合适的老师。
        </p>
        <a
          href="/#trial"
          className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-brand rounded-full hover:bg-brand-dark transition-colors"
        >
          预约试听 →
        </a>
      </section>

    </div>
  );
}
