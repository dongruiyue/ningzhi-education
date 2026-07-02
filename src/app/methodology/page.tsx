import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "雅思教学方法论",
  description:
    "宁致教育教学方法论——基于英国爱丁堡大学TESOL硕士学术训练与7年一线教学沉淀。信号词定位法、结构化速读法、逻辑框架搭建、话题迁移策略。",
};

export default function MethodologyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 sm:py-24 space-y-24 sm:space-y-32">
      {/* ========================================
          1. Hero — 方法论总览
          ======================================== */}
      <section className="space-y-6 text-center sm:text-left">
        <p className="text-brand font-semibold text-sm tracking-wide uppercase">
          教学方法论
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
          雅思备考的本质不是刷题，<br className="hidden sm:block" />
          是建立可复用的方法论体系
        </h1>
        <div className="space-y-2 text-neutral-500 text-base sm:text-lg leading-relaxed max-w-2xl">
          <p>
            基于英国爱丁堡大学 TESOL 硕士学术训练 + 7 年新东方/学为贵/流利说一线教学沉淀
          </p>
          <p className="text-sm">
            教学总监雅思总分 <strong className="text-neutral-900">8.0</strong> |
            听力 <strong className="text-neutral-900">9.0</strong> |
            阅读 <strong className="text-neutral-900">9.0</strong> |
            写作 7.5 | 口语 7.5
          </p>
        </div>
      </section>

      {/* ========================================
          2. 教学理念
          ======================================== */}
      <section className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
          教学理念
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: "不教套路，教方法",
              desc: "雅思出题逻辑是稳定的，押题不可靠。掌握底层方法论才能以不变应万变。",
            },
            {
              title: "输入输出双轨制",
              desc: "听力阅读（输入）和写作口语（输出）需要不同的训练策略。",
            },
            {
              title: "能力提升 > 技巧堆砌",
              desc: '技巧解决「知道但做不对」，能力解决「根本不会」。',
            },
            {
              title: "数据驱动教学",
              desc: "基于 British Council 官方数据定位中国考生薄弱点，精准发力。",
            },
          ].map((p) => (
            <div key={p.title} className="bg-neutral-50 rounded-2xl p-6 space-y-2">
              <h3 className="font-bold text-neutral-900">{p.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* 中国考生痛点 */}
        <div className="bg-red-50 border border-red-100 rounded-2xl p-6 space-y-3">
          <h3 className="font-bold text-red-900">中国考生核心痛点</h3>
          <ul className="space-y-2 text-sm text-red-800">
            <li>• 输入强、输出弱：听力 5.9 / 阅读 5.9 vs 口语 5.5 / 写作 5.7</li>
            <li>• 写作同比微降 0.1 分（自 2018-19 年以来提升最明显的科目之一）</li>
            <li>• 口语为全球主要考生来源国中最低之一</li>
            <li>• 7 分以上占比降至 14%（近年呈小幅下降趋势）</li>
          </ul>
        </div>
      </section>

      {/* ========================================
          3. 听力 — 信号词定位法
          ======================================== */}
      <section className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
          听力 · 信号词定位法
        </h2>
        <p className="text-neutral-600 leading-relaxed">
          雅思听力的答案<strong className="text-neutral-900">永远藏在信号词后面</strong>。听力考试本质上是一场"定向搜索"——你不需要听懂每一个词，而是需要识别哪些词在引导答案出现。
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="py-3 pr-4 font-semibold text-neutral-900">信号词类别</th>
                <th className="py-3 pr-4 font-semibold text-neutral-900">示例</th>
                <th className="py-3 font-semibold text-neutral-900">功能</th>
              </tr>
            </thead>
            <tbody className="text-neutral-600">
              {[
                ["转折词", "but, however, actually, in fact", "答案常出现在转折之后"],
                ["强调词", "importantly, the key point", "直接指向核心信息点"],
                ["因果词", "because, so, therefore", "用于流程图/讲座类题目"],
                ["顺序词", "first, then, next, finally", "学术讨论中定位进程"],
                ["举例词", "for example, such as", "为抽象概念提供具体信息"],
                ["否定词", "not, never, hardly, instead of", "识别信息修正和否定陷阱"],
              ].map(([cat, examples, fn]) => (
                <tr key={cat} className="border-b border-neutral-100">
                  <td className="py-3 pr-4 font-medium text-neutral-900">{cat}</td>
                  <td className="py-3 pr-4 text-xs sm:text-sm">{examples}</td>
                  <td className="py-3 text-xs sm:text-sm">{fn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ========================================
          4. 阅读 — 结构化速读法
          ======================================== */}
      <section className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
          阅读 · 结构化速读法
        </h2>
        <p className="text-neutral-600 leading-relaxed">
          <strong className="text-neutral-900">60 分钟，3 篇文章，40 道题。</strong>{" "}
          速度是决定性因素。大部分考生的问题不是"读不懂"，而是"读不完"。
        </p>

        <div className="bg-neutral-50 rounded-2xl p-6 sm:p-8 space-y-4">
          <h3 className="text-lg font-bold text-neutral-900">平行阅读法</h3>
          <div className="space-y-3 text-neutral-600 leading-relaxed text-sm sm:text-base">
            <p>
              <strong className="text-neutral-900">传统方法：</strong>
              读文章 → 看题 → 回文章找 → 再读文章 → 看下一题（来回跳转，效率极低）
            </p>
            <div className="space-y-2">
              <p className="font-semibold text-brand">宁致方法：</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>先看所有题目（约 13 题），标记关键词</li>
                <li>按段落顺序一次性读完文章</li>
                <li>每读完一段，同步完成该段相关的所有题目</li>
                <li>避免回读，确保一次读完</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="py-3 pr-4 font-semibold text-neutral-900">题型</th>
                <th className="py-3 pr-4 font-semibold text-neutral-900">难度</th>
                <th className="py-3 font-semibold text-neutral-900">核心策略</th>
              </tr>
            </thead>
            <tbody className="text-neutral-600">
              {[
                ["判断题 (TFNG)", "⭐⭐⭐⭐", "区分 False（矛盾）和 Not Given（无依据）"],
                ["标题配对", "⭐⭐⭐⭐", "读段落首尾句 + 转折词后，总结主旨"],
                ["信息匹配", "⭐⭐⭐⭐⭐", "匹配题占比上涨约 7 个百分点，已超越判断题成为第二大题型"],
                ["摘要填空", "⭐⭐⭐", "定位 + 词性预判 + 同义替换"],
              ].map(([type, diff, strategy]) => (
                <tr key={type} className="border-b border-neutral-100">
                  <td className="py-3 pr-4 font-medium text-neutral-900">{type}</td>
                  <td className="py-3 pr-4">{diff}</td>
                  <td className="py-3 text-xs sm:text-sm">{strategy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ========================================
          5. 写作 — 逻辑框架搭建
          ======================================== */}
      <section className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
          写作 · 逻辑框架搭建
        </h2>
        <p className="text-neutral-600 leading-relaxed">
          <strong className="text-neutral-900">
            写作不是炫词汇，是逻辑清晰 + 论证充分。
          </strong>{" "}
          中国考生写作均分仅 5.7。大多数考生卡在 5.5-6.0 的原因是：逻辑链断裂 + 论证空洞。
        </p>

        <div className="bg-neutral-50 rounded-2xl p-6 sm:p-8 space-y-4">
          <h3 className="text-lg font-bold text-neutral-900">Task 2 四段式标准结构</h3>
          <pre className="text-xs sm:text-sm text-neutral-600 font-mono leading-relaxed whitespace-pre-wrap">
{`引言段 (Introduction)
├── 背景句：引出话题
├── 转述题目：用自己的话重述问题
└── 立场句：明确表达自己的观点

主体段 1 (Body 1)
├── 主题句：段落核心论点
├── 解释句：进一步阐述论点
├── 例证句：具体例子支撑
└── 小结句：回扣论点

主体段 2 (Body 2)
├── 主题句（同上结构）
├── ...

结论段 (Conclusion)
├── 重申立场
└── 总结核心论点（不引入新信息）`}
          </pre>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "五大论证方法", items: ["因果论证", "举例论证", "对比论证", "假设论证", "数据论证"] },
            { title: "五大逻辑谬误", items: ["偷换概念", "因果倒置", "以偏概全", "滑坡谬误", "论据空洞"] },
          ].map((col) => (
            <div key={col.title} className="bg-neutral-50 rounded-2xl p-6 space-y-3">
              <h3 className="font-bold text-neutral-900">{col.title}</h3>
              <ul className="space-y-1.5 text-sm text-neutral-600">
                {col.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================
          6. 口语 — 话题迁移策略
          ======================================== */}
      <section className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
          口语 · 话题迁移策略
        </h2>
        <p className="text-neutral-600 leading-relaxed">
          Part 2 话题卡片有<strong className="text-neutral-900">100+ 种可能</strong>，但你不需要准备 100+ 个答案。学会用{" "}
          <strong className="text-brand">3-5 个核心素材</strong>{" "}
          迁移应对所有话题。
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="py-3 pr-4 font-semibold text-neutral-900">核心素材</th>
                <th className="py-3 font-semibold text-neutral-900">可覆盖话题类型</th>
              </tr>
            </thead>
            <tbody className="text-neutral-600">
              {[
                ["素材 1：一位长辈", "人物题、经历题、价值观题"],
                ["素材 2：一次旅行", "地点题、事件题、文化题"],
                ["素材 3：一个学习经历", "物品题、习惯题、成就题"],
                ["素材 4：一个爱好", "活动题、能力题、未来计划题"],
              ].map(([material, coverage]) => (
                <tr key={material} className="border-b border-neutral-100">
                  <td className="py-3 pr-4 font-medium text-neutral-900">{material}</td>
                  <td className="py-3 text-xs sm:text-sm">{coverage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              part: "Part 1",
              duration: "4-5 分钟",
              strategy: "回答 + 原因 + 举例，自然口语化",
            },
            {
              part: "Part 2",
              duration: "1 分钟准备 + 2 分钟独白",
              strategy: "按提示卡 4 要点展开，5 秒内切入主题",
            },
            {
              part: "Part 3",
              duration: "4-5 分钟",
              strategy: "观点 + 理由 + 对比/举例，展现批判性思维",
            },
          ].map((p) => (
            <div key={p.part} className="bg-neutral-50 rounded-2xl p-6 space-y-2">
              <span className="text-brand font-bold">{p.part}</span>
              <p className="text-xs text-neutral-400">{p.duration}</p>
              <p className="text-sm text-neutral-600 leading-relaxed">{p.strategy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================
          7. 词汇 + 语法（精简合并）
          ======================================== */}
      <section className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
          词汇 · 场景分类记忆
        </h2>
        <p className="text-neutral-600 leading-relaxed">
          <strong className="text-neutral-900">扔掉按字母背单词的方法。</strong>{" "}
          雅思考查的不是词汇量绝对值，而是"在正确场景下用对词"的能力。
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { scene: "教育", count: "300-400" },
            { scene: "科技", count: "250-350" },
            { scene: "环境", count: "250-300" },
            { scene: "健康", count: "200-300" },
            { scene: "社会", count: "250-350" },
            { scene: "工作", count: "200-250" },
            { scene: "文化", count: "200-300" },
          ].map((s) => (
            <div key={s.scene} className="bg-neutral-50 rounded-xl p-4 text-center space-y-1">
              <p className="font-semibold text-neutral-900">{s.scene}</p>
              <p className="text-xs text-neutral-400">{s.count} 词</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 pt-8">
          语法 · 7 分必备结构
        </h3>
        <p className="text-neutral-600 leading-relaxed">
          雅思写作 6 分到 7 分的分水岭是<strong className="text-neutral-900">语法多样性</strong>。不需要学所有语法，只学写作能直接用的核心结构。
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { struct: "定语从句", eg: "People who exercise regularly tend to..." },
            { struct: "状语从句", eg: "Although technology brings convenience..." },
            { struct: "名词性从句", eg: "What governments should do is..." },
            { struct: "被动语态", eg: "It is widely believed that..." },
            { struct: "倒装句", eg: "Not only does this benefit..." },
            { struct: "虚拟语气", eg: "If governments were to invest more..." },
          ].map((g) => (
            <div key={g.struct} className="bg-neutral-50 rounded-xl p-4 space-y-1">
              <p className="font-semibold text-sm text-neutral-900">{g.struct}</p>
              <p className="text-xs text-neutral-500">{g.eg}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================
          8. 备考节奏规划
          ======================================== */}
      <section className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
          备考节奏规划
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="py-3 pr-4 font-semibold text-neutral-900">目标分差</th>
                <th className="py-3 pr-4 font-semibold text-neutral-900">建议周期</th>
                <th className="py-3 font-semibold text-neutral-900">阶段分布</th>
              </tr>
            </thead>
            <tbody className="text-neutral-600">
              {[
                ["5.5 → 6.5", "约 7-9 个月", "基础 40% + 技巧 40% + 模考 20%"],
                ["6.0 → 7.0", "约 4-6 个月", "诊断 20% + 技巧 50% + 模考 30%"],
                ["6.5 → 7.5", "约 3-4 个月", "技巧 30% + 高分策略 50% + 模考 20%"],
              ].map(([target, period, phases]) => (
                <tr key={target} className="border-b border-neutral-100">
                  <td className="py-3 pr-4 font-medium text-neutral-900">{target}</td>
                  <td className="py-3 pr-4">{period}</td>
                  <td className="py-3 text-xs sm:text-sm">{phases}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-brand/5 border border-brand/20 rounded-2xl p-6 space-y-2">
          <p className="font-semibold text-brand">📢 2026 年重要变化</p>
          <p className="text-sm text-neutral-600 leading-relaxed">
            2026 年雅思分阶段取消纸笔考试：UKVI 纸笔考 7 月 1 日终止，普通雅思纸笔考 9 月 1 日终止。部分城市保留机考+纸笔写作混合模式。需提前适应屏幕阅读、盲打数字/日期、屏幕标注等功能。写作需练习打字速度（建议达到 40-50 wpm）。
          </p>
        </div>
      </section>

      {/* ========================================
          9. 数据：中国考生现状
          ======================================== */}
      <section className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
          数据背景：中国考生现状
        </h2>
        <p className="text-sm text-neutral-400">
          数据来源：British Council《2024-2025 中国大陆地区雅思考生成绩大数据报告》
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { stat: "5.9", label: "A 类总分均分" },
            { stat: "#35", label: "全球排名" },
            { stat: "14%", label: "7 分以上占比" },
            { stat: "57%", label: "6 分以上占比" },
          ].map((s) => (
            <div key={s.label} className="bg-neutral-50 rounded-2xl p-5 text-center space-y-1">
              <p className="text-3xl font-bold text-brand">{s.stat}</p>
              <p className="text-xs text-neutral-500">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="py-3 pr-4 font-semibold text-neutral-900">科目</th>
                <th className="py-3 pr-4 font-semibold text-neutral-900">均分</th>
                <th className="py-3 font-semibold text-neutral-900">趋势</th>
              </tr>
            </thead>
            <tbody className="text-neutral-600">
              {[
                ["听力", "5.9", "与阅读接近，稳定"],
                ["阅读", "5.9", "与听力接近，同比下降"],
                ["写作", "5.7", "同比微降 0.1（自 2018-19 年提升明显）"],
                ["口语", "5.5", "⚠️ 最大短板，主要考生来源国中最低之一"],
              ].map(([subject, score, trend]) => (
                <tr key={subject} className="border-b border-neutral-100">
                  <td className="py-3 pr-4 font-medium text-neutral-900">{subject}</td>
                  <td className="py-3 pr-4 font-bold">{score}</td>
                  <td className="py-3 text-xs sm:text-sm">{trend}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ========================================
          CTA — 通往留学英语
          ======================================== */}
      <section className="text-center bg-neutral-50 rounded-2xl p-8 sm:p-12 space-y-4">
        <h2 className="text-2xl font-bold text-neutral-900">
          了解方法论如何落地？
        </h2>
        <p className="text-neutral-500">
          查看留学英语课程，看看方法论如何转化为真实出分。
        </p>
        <Link
          href="/study-abroad"
          className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-brand rounded-full hover:bg-brand-dark transition-colors"
        >
          查看留学英语课程 →
        </Link>
      </section>
    </div>
  );
}
