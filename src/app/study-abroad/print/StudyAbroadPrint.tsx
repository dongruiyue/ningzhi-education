// Print-optimized version — same content as main page but without navigation chrome
// Open this page and Ctrl+P / Cmd+P to save as PDF

import { ChapterSection } from "@/components/manual/ChapterSection";
import { CaseCard } from "@/components/manual/CaseCard";

export function StudyAbroadPrint() {
  return (
    <article className="max-w-[210mm] mx-auto px-[18mm] py-[20mm] bg-white text-neutral-900">
      {/* Cover */}
      <header className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight">宁致教育</h1>
        <p className="mt-2 text-xl text-brand font-semibold">留学英语 · 雅思A类</p>
        <p className="mt-4 text-neutral-600">真经教学体系 · 严抓督学 · 高性价比</p>
        <div className="mt-12 text-sm text-neutral-400">www.ningzhi.education</div>
      </header>

      <div className="page-break" />

      {/* Chapter 1 */}
      <ChapterSection title="第一章 为什么选择宁致教育">
        <h3>品牌理念</h3>
        <p>宁致教育坚持小而精的办学路线。我们拒绝工厂式的大班教学，坚信每个学生都值得被看见、被严格跟进。在深圳，大机构能给你知名度，但我们能给你结果。</p>

        <h3>我们的优势</h3>
        <ul>
          <li>真经教学体系：经过广泛验证的雅思教学方法论，听说读写四科成体系突破</li>
          <li>严抓督学：不是上完课就结束，全程跟踪学习进度，确保每日有进展</li>
          <li>高关注度：小班教学，每个学生都是我们的重点关注对象</li>
          <li>更优师资：比大机构更严格的教师筛选，更实在的价格</li>
        </ul>
      </ChapterSection>

      <div className="page-break" />

      {/* Chapter 2 */}
      <ChapterSection title="第二章 雅思备考常见误区">
        <h3>刷题 ≠ 提分</h3>
        <p>很多学生陷入"刷题-对答案-刷更多题"的死循环。刷题只能检测水平，不能提升水平。真正的提分来自于：诊断问题 → 针对性训练 → 反馈纠错。</p>

        <h3>为什么自律 + 体系才是关键</h3>
        <p>雅思备考是一场持久战。大多数学生的问题不是"学不会"，而是"坚持不下来"。宁致教育的解决方案：体系化教学确保每个阶段有明确目标，督学机制确保每日跟进，定期模考可视化进步。</p>

        <h3>为什么选择真经体系</h3>
        <p>真经教学体系不是一套"技巧大全"，而是一个完整的语言能力培养系统：</p>
        <ul>
          <li>听力：从"听到单词"到"听懂逻辑"</li>
          <li>阅读：从"逐字翻译"到"结构化阅读"</li>
          <li>写作：从"模板套用"到"逻辑表达"</li>
          <li>口语：从"背诵答案"到"自然交流"</li>
        </ul>
      </ChapterSection>

      <div className="page-break" />

      {/* Chapter 3 */}
      <ChapterSection title="第三章 真经教学体系">
        <h3>与其他机构的区别</h3>
        <table className="w-full text-sm border-collapse mb-6">
          <thead>
            <tr className="border-b-2 border-neutral-900">
              <th className="text-left py-2 px-3 font-semibold">维度</th>
              <th className="text-left py-2 px-3 font-semibold">宁致教育</th>
              <th className="text-left py-2 px-3 font-semibold">大机构</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["教学理念", "能力培养", "技巧速成"],
              ["班级规模", "小班", "大班/超大班"],
              ["督学力度", "每日跟进", "课后基本不管"],
              ["个性化", "针对薄弱点", "统一进度"],
              ["价格", "高性价比", "溢价明显"],
            ].map(([dim, us, them]) => (
              <tr key={dim} className="border-b border-neutral-200">
                <td className="py-2 px-3 font-medium">{dim}</td>
                <td className="py-2 px-3 font-medium">{us}</td>
                <td className="py-2 px-3 text-neutral-500">{them}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>四科教学逻辑</h3>
        <ul>
          <li>听力：场景化训练 + 精听泛听结合 + 信号词识别</li>
          <li>阅读：结构化阅读法 + 题型专项突破 + 同义替换能力</li>
          <li>写作：逻辑先行 + 数据思维 + 论证三步法</li>
          <li>口语：自然表达 + 话题拓展 + 流利度准确度平衡</li>
        </ul>
      </ChapterSection>

      <div className="page-break" />

      {/* Chapter 4 */}
      <ChapterSection title="第四章 学习路径与课程">
        <p><strong>完整路径：</strong>入学测试 → 分班 → 阶段学习 → 期中模考 → 查漏补缺 → 冲刺模考 → 考试</p>
        <p className="text-sm text-neutral-500">全程督学跟踪</p>

        <h3>课程类型</h3>
        <table className="w-full text-sm border-collapse mb-6">
          <thead>
            <tr className="border-b-2 border-neutral-900">
              <th className="text-left py-2 px-3 font-semibold">班型</th>
              <th className="text-left py-2 px-3 font-semibold">适合人群</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-200"><td className="py-2 px-3 font-medium">一对一</td><td className="py-2 px-3">时间灵活、需要个性化方案</td></tr>
            <tr className="border-b border-neutral-200"><td className="py-2 px-3 font-medium">小班（3-6人）</td><td className="py-2 px-3">大多数学生</td></tr>
            <tr className="border-b border-neutral-200"><td className="py-2 px-3 font-medium">冲刺班</td><td className="py-2 px-3">考前1-2个月</td></tr>
          </tbody>
        </table>
      </ChapterSection>

      <div className="page-break" />

      {/* Chapter 5 */}
      <ChapterSection title="第五章 学生出分案例">
        <CaseCard
          name="小林"
          before="5.5"
          after="6.5"
          duration="3个月"
          story="重点攻克写作逻辑和口语流利度，三个月实现1分跨越，拿到目标学校offer。"
        />
        <CaseCard
          name="Alex"
          before="6.0"
          after="7.0"
          duration="4个月"
          story="入学测试发现阅读方法效率低，写作缺乏逻辑框架。针对性调整后，四个月突破。"
        />
        <CaseCard
          name="小陈"
          before="零基础"
          after="5.5"
          duration="12个月"
          story="一年系统性学习，听说读写全面进步。目前正在冲刺6.5。"
        />
      </ChapterSection>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-neutral-200 text-center text-sm text-neutral-400">
        <p>宁致教育 · 深圳英语培训</p>
        <p>www.ningzhi.education</p>
      </footer>
    </article>
  );
}
