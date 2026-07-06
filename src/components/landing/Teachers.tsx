"use client";

import { useState, useCallback } from "react";

const TEACHERS = [
  {
    name: "崔老师",
    title: "英语教学总监 · 爱丁堡大学 TESOL 硕士",
    description: "原新东方、学为贵、流利说核心教师。7年一线教学经验，雅思总分8.0，听力阅读双满分9.0。累计学员3000+。拥有完整的9章雅思教学方法论体系。",
    tags: ["雅思8.0·双满分", "爱丁堡TESOL硕", "3000+学员"],
  },
  {
    name: "王老师",
    title: "GRE / 托雅 金牌老师",
    description: "芝加哥大学教育学硕士，曾担任深圳头部机构语言学科组长。授课9000+小时，精于深入浅出讲解晦涩文章，高效攻克托福四项考点。",
    tags: ["芝加哥大学硕", "9000+小时", "GRE Verbal 335"],
  },
  {
    name: "季老师",
    title: "GRE / 托雅 金牌老师",
    description: "中国传媒大学学士 → 格拉斯哥大学心理学硕士 → 墨尔本大学文化研究博士。授课9000+小时，严谨与幽默结合，注重底层逻辑思维训练。",
    tags: ["墨尔本大学博", "9000+小时", "11年经验"],
  },
  {
    name: "甘老师",
    title: "数学金牌老师",
    description: "英国华威大学数据与数字科学硕士，曾在头部国际学校担任资深数学老师。授课4200+小时，擅长将抽象数学融入趣味游戏，精准把握考纲考点。",
    tags: ["华威大学硕", "4200+小时", "A-Level 数学"],
  },
  {
    name: "卢老师",
    title: "英语金牌老师 · DSE 专家",
    description: "英国格拉斯哥大学TESOL硕士，曾在头部国际学校担任资深英语老师。授课3200+小时，深耕DSE英语教学，所带学生DSE平均成绩提升1-2级。",
    tags: ["格拉斯哥大学", "3200+小时", "DSE 英语"],
  },
];

export function Teachers() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<"left" | "right">("right");
  const t = TEACHERS[index];

  const next = useCallback(() => {
    setDir("right");
    setIndex((i) => (i + 1) % TEACHERS.length);
  }, []);

  const prev = useCallback(() => {
    setDir("left");
    setIndex((i) => (i - 1 + TEACHERS.length) % TEACHERS.length);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase mb-4 block text-brand-light">
            师资团队
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            好老师，才有好成绩
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            真实分数可查——我们老师跟学生一起进雅思考场
          </p>
        </div>

        {/* Dealer */}
        <div className="max-w-2xl mx-auto relative">
          {/* Card stack decoration - poker dealer feel */}
          <div className="absolute -inset-4 pointer-events-none select-none" aria-hidden="true">
            <div className="absolute top-2 left-2 right-2 bottom-2 rounded-2xl bg-neutral-800/50 border border-neutral-700/50 -rotate-3" />
            <div className="absolute top-1 left-1 right-1 bottom-1 rounded-2xl bg-neutral-800/30 border border-neutral-700/30 rotate-2" />
          </div>

          {/* Active card */}
          <div
            key={index}
            className="relative bg-neutral-800 border border-neutral-700 rounded-2xl p-8 animate-deal"
            style={{
              animation: dir === "right"
                ? "deal-in-right 0.35s cubic-bezier(0.22, 1, 0.36, 1)"
                : "deal-in-left 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <div className="flex flex-col gap-5">
              {/* Name + title */}
              <div>
                <h3 className="text-xl font-bold text-white">{t.name}</h3>
                <p className="text-sm text-brand-light mt-1">{t.title}</p>
              </div>
              {/* Description */}
              <p className="text-neutral-400 leading-relaxed text-sm">{t.description}</p>
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-brand/10 text-brand-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Nav buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="上一张"
              className="w-10 h-10 rounded-full border border-neutral-600 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TEACHERS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > index ? "right" : "left"); setIndex(i); }}
                  aria-label={`第 ${i + 1} 位老师`}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === index ? "bg-brand w-6" : "bg-neutral-600 hover:bg-neutral-500"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="下一张"
              className="w-10 h-10 rounded-full border border-neutral-600 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
