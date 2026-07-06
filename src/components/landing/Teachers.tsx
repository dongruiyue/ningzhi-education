"use client";

import Stack from "@/components/ui/Stack";

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
  return (
    <section className="py-20 md:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase mb-4 block text-brand">
            师资团队
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            好老师，才有好成绩
          </h2>
          <p className="mt-4 text-lg text-neutral-500">
            点击或拖拽卡片切换老师
          </p>
        </div>

        {/* Stack */}
        <div className="max-w-xl mx-auto h-[360px] sm:h-[340px]">
          <Stack
            autoplay
            autoplayDelay={4000}
            pauseOnHover
            sendToBackOnClick
            sensitivity={180}
            mobileClickOnly
            cards={TEACHERS.map((t) => (
              <div
                key={t.name}
                className="w-full h-full bg-white border border-neutral-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900">
                    {t.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-light mt-1">
                    {t.title}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-3">
                    {t.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-[11px] sm:text-xs rounded-full bg-brand/5 text-brand"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          />
        </div>
      </div>
    </section>
  );
}
