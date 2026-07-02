import type { Metadata } from "next";
import { ManualLayout } from "@/components/manual/ManualLayout";
import { ChapterSection } from "@/components/manual/ChapterSection";
import { CaseCard } from "@/components/manual/CaseCard";
import { FAQItem } from "@/components/manual/FAQItem";
import { ComparisonTable } from "@/components/manual/ComparisonTable";

export const metadata: Metadata = {
  title: "校内提升 / 能力素养",
  description:
    "宁致教育校内提升（6-15岁），《Unlock》《Pathways》《Power Up》《Reading Explorer》《Great Writing》五大国际教材，KET/PET/校内考试全覆盖，能力+分数双提升。",
};

const TEXTBOOK_DATA = [
  { name: "Power Up", publisher: "Cambridge University Press & Assessment", focus: "少儿英语启蒙，听说读写综合", level: "入门-初级", exam: "Pre A1 / A1" },
  { name: "Unlock", publisher: "Cambridge University Press & Assessment", focus: "批判性思维+学术英语", level: "初级-中级", exam: "KET / PET" },
  { name: "Pathways", publisher: "National Geographic（美式）", focus: "学术英语+全球视野", level: "中级-中高级", exam: "PET / FCE" },
  { name: "Reading Explorer", publisher: "National Geographic", focus: "阅读理解+词汇积累，非虚构类", level: "初级-中高级", exam: "全阶段适用" },
  { name: "Great Writing", publisher: "National Geographic", focus: "写作专项，句子→段落→文章", level: "初级-中高级", exam: "全阶段适用" },
];

const AGE_MATRIX = [
  { age: "6-8岁", main: "Power Up", supplement: "Reading Explorer Foundation" },
  { age: "8-10岁", main: "Unlock Basic", supplement: "Reading Explorer L1" },
  { age: "10-12岁", main: "Unlock L1-L2", supplement: "Great Writing L1" },
  { age: "12-15岁", main: "Pathways L1-L2", supplement: "Reading Explorer L2+ / Great Writing L2+" },
];

const GOAL_MATRIX = [
  { goal: "备考KET", combo: "Power Up（后期）→ Unlock L1 + Reading Explorer L1" },
  { goal: "备考PET", combo: "Unlock L2 → Pathways L1 + Great Writing L1" },
  { goal: "校内提分", combo: "Unlock（同步校内）+ Great Writing（写作专项）" },
  { goal: "综合素养提升", combo: "Reading Explorer（阅读）+ Unlock 或 Pathways（听说写）" },
];

const LEVEL_MATRIX = [
  { level: "零基础/刚接触", start: "Power Up Starter" },
  { level: "能简单对话", start: "Unlock Basic 或 Power Up L3" },
  { level: "能基本交流", start: "Unlock L1 或 Pathways Foundations" },
  { level: "能流利交流", start: "Pathways L1+" },
];

export default function K12Page() {
  return (
    <ManualLayout
      title="校内提升 / 能力素养"
      subtitle="KET · PET · 校内考试 · 6–15岁 · 五大国际教材"
    >
      {/* Chapter 1: Why Ningzhi */}
      <ChapterSection title="第一章 为什么选择宁致教育">
        <h3 className="text-lg font-semibold text-neutral-900">我们的理念</h3>
        <p>
          宁致教育坚持<strong>小而精</strong>的办学路线。我们相信每个孩子的英语学习路径都应该是独特的——不模板化、不流水线，用五套国际教材的组合能力，为每个孩子定制最合适的成长路径。
        </p>

        <h3 className="text-lg font-semibold text-neutral-900 mt-6">我们的优势</h3>
        <ul>
          <li><strong>多教材体系</strong>：《Unlock》《Pathways》《Power Up》《Reading Explorer》《Great Writing》五大国际教材，按需组合</li>
          <li><strong>严抓督学</strong>：课后跟踪不放松，每日打卡确保学习效果</li>
          <li><strong>全周期陪伴</strong>：从6岁到15岁，一路陪伴孩子的英语成长</li>
          <li><strong>能力+分数双提升</strong>：既提升综合英语素养，也确保考试出分</li>
        </ul>

        <h3 className="text-lg font-semibold text-neutral-900 mt-6">适合人群</h3>
        <ul>
          <li>希望提升英语综合素养的6-15岁学生</li>
          <li>需要备考KET、PET的学生</li>
          <li>校内英语需要补强提升的学生</li>
          <li>希望走国际路线的低龄学习者</li>
        </ul>
      </ChapterSection>

      {/* Chapter 2: Curriculum Matrix */}
      <ChapterSection title="第二章 教材选择定位体系">
        <p>
          宁致教育是深圳少数同时拥有<strong>五套国际英语教材体系</strong>的机构。每套教材各有侧重，我们根据学生的年龄、目标和当前水平进行组合推荐。
        </p>

        <h3 className="text-lg font-semibold text-neutral-900 mt-8">五套教材概览</h3>
        <ComparisonTable
          caption="宁致教育五大国际英语教材对比"
          columns={[
            { key: "name", header: "教材" },
            { key: "publisher", header: "出版社" },
            { key: "focus", header: "核心侧重" },
            { key: "level", header: "适合水平" },
            { key: "exam", header: "对应考试" },
          ]}
          data={TEXTBOOK_DATA}
        />

        <h3 className="text-lg font-semibold text-neutral-900 mt-10">定位矩阵一：按年龄</h3>
        <ComparisonTable
          columns={[
            { key: "age", header: "年龄段" },
            { key: "main", header: "推荐主教材" },
            { key: "supplement", header: "搭配" },
          ]}
          data={AGE_MATRIX}
        />

        <h3 className="text-lg font-semibold text-neutral-900 mt-10">定位矩阵二：按目标</h3>
        <ComparisonTable
          columns={[
            { key: "goal", header: "目标" },
            { key: "combo", header: "推荐组合" },
          ]}
          data={GOAL_MATRIX}
        />

        <h3 className="text-lg font-semibold text-neutral-900 mt-10">定位矩阵三：按当前水平</h3>
        <ComparisonTable
          columns={[
            { key: "level", header: "入学水平" },
            { key: "start", header: "起点教材" },
          ]}
          data={LEVEL_MATRIX}
        />

        <div className="mt-8 p-6 bg-brand/5 rounded-xl border border-brand/10">
          <h3 className="text-lg font-semibold text-brand">全周期案例</h3>
          <p className="mt-2">
            小明，6岁入门：<br />
            <strong>Power Up</strong> L1-L3（6-8岁）→ <strong>Unlock</strong> Basic-L1（8-10岁）→{" "}
            <strong>Reading Explorer</strong> L1-L2（同步）→ <strong>Pathways</strong> L1 + <strong>Great Writing</strong> L1（10-12岁）→ 备考 PET
          </p>
          <p className="mt-2 text-sm text-neutral-500">
            每个阶段的教材衔接都是平滑的，能力递进清晰可见
          </p>
        </div>
      </ChapterSection>

      {/* Chapter 3: Teaching System */}
      <ChapterSection title="第三章 教学体系">
        <h3 className="text-lg font-semibold text-neutral-900">能力驱动分数，而非分数驱动能力</h3>
        <p>
          很多机构的做法是"考什么教什么"——KET考什么题型就练什么题型。短期看起来有效，但能力没有真正提升，到了PET/FCE阶段就会遇到瓶颈。
        </p>
        <p>
          我们的理念正好相反：<strong>用国际教材体系真正提升英语能力，考试出分只是水到渠成的结果。</strong>
        </p>

        <h3 className="text-lg font-semibold text-neutral-900 mt-6">课堂结构（90分钟/节）</h3>
        <ol>
          <li><strong>热身/复习</strong>（10分钟）：回顾上节课，检查作业</li>
          <li><strong>核心教学</strong>（40分钟）：新内容讲解与互动练习</li>
          <li><strong>应用输出</strong>（25分钟）：学生开口说、动手写，老师即时反馈</li>
          <li><strong>总结/任务布置</strong>（15分钟）：本课小结，下周任务</li>
        </ol>

        <h3 className="text-lg font-semibold text-neutral-900 mt-6">课下跟进</h3>
        <ul>
          <li>每日朗读打卡</li>
          <li>每周词汇测试</li>
          <li>定期写作批改</li>
          <li>家长群进度通报</li>
        </ul>
      </ChapterSection>

      {/* Chapter 4: Learning Path */}
      <ChapterSection title="第四章 学习路径与课程">
        <div className="bg-neutral-900 text-white rounded-2xl p-8 my-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium">
            {["入学测试", "水平定位", "教材匹配", "阶段学习", "阶段测试", "调整方案", "考前冲刺", "考试"].map((step, i, arr) => (
              <span key={step} className="flex items-center gap-2">
                <span className="bg-brand px-4 py-2 rounded-full">{step}</span>
                {i < arr.length - 1 && <span className="text-neutral-500">&rarr;</span>}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-neutral-400">全程家长沟通，每个阶段都看得见进步</p>
        </div>

        <h3 className="text-lg font-semibold text-neutral-900">第一步：入学测试</h3>
        <p>到校参加英语水平测试，全面了解孩子当前听说读写能力。测试结果 + 家长期望 → 教材匹配方案。</p>

        <h3 className="text-lg font-semibold text-neutral-900 mt-4">第二步：教材匹配</h3>
        <p>根据测试结果，从五套教材中选出最适合的组合方案。家长会收到详细的教材选择建议和学习规划表。</p>

        <h3 className="text-lg font-semibold text-neutral-900 mt-6">课程类型</h3>
        <ComparisonTable
          columns={[
            { key: "type", header: "班型" },
            { key: "who", header: "适合人群" },
            { key: "feature", header: "特点" },
          ]}
          data={[
            { type: "一对一", who: "有明确目标/时间紧张", feature: "效率最高，个性化最强" },
            { type: "小班（2-4人）", who: "大部分学生", feature: "有同学互动，互相促进" },
            { type: "常规班（4-6人）", who: "长期素养提升", feature: "氛围好，性价比高" },
          ]}
        />
      </ChapterSection>

      {/* Chapter 5: Student Cases */}
      <ChapterSection title="第五章 学生案例">
        <CaseCard
          name="Amy — KET优秀，一年蜕变"
          before="基础一般"
          after="KET 140（优秀）"
          duration="12个月"
          story="从 Power Up 到 Unlock，搭配 Reading Explorer。最大的变化是孩子敢开口了，变得越来越自信，从「看到英语就躲」到「主动读英文绘本」。校内英语稳居前列。"
        />
        <CaseCard
          name="小杰 — 校内从C到A"
          before="校内C档"
          after="校内A档"
          duration="6个月"
          story="主要问题在写作和语法。Unlock 综合提升 + Great Writing 写作专项，从「写不出三句话」到「能写 150 词短文」。"
        />
        <CaseCard
          name="Sophia — PET通过，能力分数双赢"
          before="KET水平"
          after="PET 154（通过）"
          duration="8个月"
          story="Pathways + Reading Explorer + Great Writing组合。阅读速度翻倍，写作从模板到自主表达。"
        />
      </ChapterSection>

      {/* Chapter 6: FAQ */}
      <ChapterSection title="第六章 常见问题">
        <FAQItem question="这么多教材，怎么知道孩子适合哪个？">
          <p>这正是我们专业的地方。到校做入学测试后，我们会给出详细的教材匹配方案，并解释为什么这样选择。您不需要自己判断。</p>
        </FAQItem>
        <FAQItem question="多久能看到效果？">
          <p>一般来说：</p>
          <ul className="mt-2">
            <li>校内成绩提升：1-2个学期</li>
            <li>KET备考（从零开始）：6-12个月</li>
            <li>PET备考（从KET水平）：8-18个月</li>
            <li>综合能力提升：持续渐进，每个阶段都有可视化进步</li>
          </ul>
        </FAQItem>
        <FAQItem question="课程费用是多少？">
          <p>根据班型和教材方案有所不同。请预约入学测试和咨询，我们会给出详细的报价方案。我们的价格比大机构更实在，师资更优。</p>
        </FAQItem>
        <FAQItem question="怎么预约试听课？">
          <p>添加微信或致电预约。流程：联系我们 → 到校做入学测试 → 参加试听课（收费）→ 教学反馈 → 商讨报名</p>
        </FAQItem>
      </ChapterSection>
    </ManualLayout>
  );
}
