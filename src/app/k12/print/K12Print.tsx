import { ChapterSection } from "@/components/manual/ChapterSection";
import { CaseCard } from "@/components/manual/CaseCard";
import { ComparisonTable } from "@/components/manual/ComparisonTable";

const TEXTBOOK_DATA = [
  { name: "PowerUp", publisher: "剑桥大学出版社", focus: "少儿英语启蒙，听说读写综合", level: "入门-初级", exam: "Pre A1 / A1" },
  { name: "UNlock", publisher: "剑桥大学出版社（英式）", focus: "批判性思维+学术英语", level: "初级-中级", exam: "KET / PET" },
  { name: "Pathways", publisher: "National Geographic（美式）", focus: "学术英语+全球视野", level: "中级-中高级", exam: "PET / FCE" },
  { name: "Reading Explorer", publisher: "National Geographic", focus: "阅读理解+词汇积累", level: "初级-中高级", exam: "全阶段适用" },
  { name: "Great Writing", publisher: "National Geographic", focus: "写作专项，句子→段落→文章", level: "初级-中高级", exam: "全阶段适用" },
];

export function K12Print() {
  return (
    <article className="max-w-[210mm] mx-auto px-[18mm] py-[20mm] bg-white text-neutral-900">
      <header className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight">宁致教育</h1>
        <p className="mt-2 text-xl text-brand font-semibold">校内提升 / 能力素养 · 6–15岁</p>
        <p className="mt-4 text-neutral-600">五大国际教材 · KET/PET/校内全覆盖 · 能力+分数双提升</p>
        <div className="mt-12 text-sm text-neutral-400">www.ningzhi.education</div>
      </header>

      <div className="page-break" />

      <ChapterSection title="第一章 为什么选择宁致教育">
        <p>宁致教育坚持小而精的办学路线。我们相信每个孩子的英语学习路径都应该是独特的——不模板化、不流水线，用五套国际教材的组合能力，为每个孩子定制最合适的成长路径。</p>
        <h3>我们的优势</h3>
        <ul>
          <li>多教材体系：UNlock / Pathways / PowerUp / Reading Explorer / Great Writing 五大国际教材</li>
          <li>严抓督学：课后跟踪不放松，每日打卡确保效果</li>
          <li>全周期陪伴：从6岁到15岁</li>
        </ul>
      </ChapterSection>

      <div className="page-break" />

      <ChapterSection title="第二章 教材选择定位体系">
        <ComparisonTable
          caption="五大国际英语教材对比"
          columns={[
            { key: "name", header: "教材" },
            { key: "publisher", header: "出版社" },
            { key: "focus", header: "核心侧重" },
            { key: "level", header: "水平" },
          ]}
          data={TEXTBOOK_DATA}
        />

        <h3 className="mt-8">按年龄推荐</h3>
        <ComparisonTable
          columns={[
            { key: "age", header: "年龄段" },
            { key: "main", header: "主教材" },
          ]}
          data={[
            { age: "6-8岁", main: "PowerUp + Reading Explorer Foundation" },
            { age: "8-10岁", main: "UNlock Basic + Reading Explorer L1" },
            { age: "10-12岁", main: "UNlock L1-L2 + Great Writing L1" },
            { age: "12-15岁", main: "Pathways L1-L2 + RE L2+ / GW L2+" },
          ]}
        />

        <h3 className="mt-8">按目标推荐</h3>
        <ComparisonTable
          columns={[
            { key: "goal", header: "目标" },
            { key: "combo", header: "推荐组合" },
          ]}
          data={[
            { goal: "备考KET", combo: "PowerUp → UNlock L1 + Reading Explorer L1" },
            { goal: "备考PET", combo: "UNlock L2 → Pathways L1 + Great Writing L1" },
            { goal: "校内提分", combo: "UNlock + Great Writing" },
            { goal: "综合素养", combo: "Reading Explorer + UNlock/Pathways" },
          ]}
        />
      </ChapterSection>

      <div className="page-break" />

      <ChapterSection title="第三章 教学体系">
        <p><strong>能力驱动分数，而非分数驱动能力。</strong></p>
        <p>用国际教材体系真正提升英语能力，考试出分只是水到渠成的结果。</p>
        <h3>课堂结构（90分钟/节）</h3>
        <ol>
          <li>热身/复习（10分钟）</li>
          <li>核心教学（40分钟）</li>
          <li>应用输出（25分钟）</li>
          <li>总结/任务布置（15分钟）</li>
        </ol>
      </ChapterSection>

      <div className="page-break" />

      <ChapterSection title="第四章 学习路径">
        <p><strong>完整路径：</strong>入学测试 → 水平定位 → 教材匹配 → 阶段学习 → 阶段测试 → 调整方案 → 考前冲刺 → 考试</p>
        <p className="text-sm text-neutral-500">全程家长沟通</p>

        <h3>课程类型</h3>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-neutral-900">
              <th className="text-left py-2 px-3 font-semibold">班型</th>
              <th className="text-left py-2 px-3 font-semibold">适合人群</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-200"><td className="py-2 px-3 font-medium">一对一</td><td className="py-2 px-3">有明确目标/时间紧张</td></tr>
            <tr className="border-b border-neutral-200"><td className="py-2 px-3 font-medium">小班（2-4人）</td><td className="py-2 px-3">大部分学生</td></tr>
            <tr className="border-b border-neutral-200"><td className="py-2 px-3 font-medium">常规班（4-6人）</td><td className="py-2 px-3">长期素养提升</td></tr>
          </tbody>
        </table>
      </ChapterSection>

      <div className="page-break" />

      <ChapterSection title="第五章 学生案例">
        <CaseCard name="Amy" before="基础一般" after="KET 140（优秀）" duration="12个月" story="从PowerUp到UNlock，搭配Reading Explorer。最大的变化是孩子敢开口了。" />
        <CaseCard name="小杰" before="校内C档" after="校内A档" duration="6个月" story="UNlock综合提升 + Great Writing写作专项，从写不出三句话到能写150词短文。" />
        <CaseCard name="Sophia" before="KET水平" after="PET 154（通过）" duration="8个月" story="Pathways + Reading Explorer + Great Writing组合，阅读速度翻倍。" />
      </ChapterSection>

      <footer className="mt-16 pt-8 border-t border-neutral-200 text-center text-sm text-neutral-400">
        <p>宁致教育 · 深圳英语培训</p>
        <p>www.ningzhi.education</p>
      </footer>
    </article>
  );
}
