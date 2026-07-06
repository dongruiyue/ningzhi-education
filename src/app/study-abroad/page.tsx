import type { Metadata } from "next";
import Link from "next/link";
import { ManualLayout } from "@/components/manual/ManualLayout";
import { ChapterSection } from "@/components/manual/ChapterSection";
import { CaseCard } from "@/components/manual/CaseCard";
import { FAQItem } from "@/components/manual/FAQItem";
import { PageNotes } from "@/components/ui/PageNotes";

export const metadata: Metadata = {
  title: "留学英语",
  description:
    "宁致教育留学英语（雅思A类），真经教学体系，听说读写四科精讲，严抓督学，15+年龄段，深圳高性价比雅思培训。",
};

export default function StudyAbroadPage() {
  return (
    <ManualLayout
      title="留学英语"
      subtitle="IELTS<sup>2</sup> Academic · 15岁以上 · 真经教学体系"
    >
      {/* Chapter 1: Why Ningzhi */}
      <ChapterSection title="第一章 为什么选择宁致教育">
        <h3 className="text-lg font-semibold text-neutral-900">品牌理念</h3>
        <p>
          宁致教育坚持<strong>竞争对立型定位</strong>——对抗行业消课逻辑、黑盒感和夸大营销。我们拒绝工厂式的大班教学，坚信每个学生都值得被看见、被严格跟进。
        </p>
        <p>
          在深圳，大机构能给你知名度，但我们能给你<strong>结果</strong>。我们不推长课包，不打大折扣——课时是手段不是商品，目标达成即结课。
        </p>

        <div className="bg-brand/5 border border-brand/20 rounded-xl p-5 mt-6">
          <p className="text-sm text-neutral-700">
            📖 想了解宁致为什么选择这条路？{" "}
            <Link href="/about" className="text-brand font-medium underline underline-offset-2">
              阅读我们的品牌故事 →
            </Link>
          </p>
        </div>

        <h3 className="text-lg font-semibold text-neutral-900 mt-6">我们的优势</h3>
        <ul>
          <li><strong>真经教学体系</strong>：经过广泛验证的雅思教学方法论，听说读写四科成体系突破</li>
          <li><strong>严抓督学</strong>：不是上完课就结束，全程跟踪学习进度，确保每日有进展</li>
          <li><strong>高关注度</strong>：小班教学，每个学生都是我们的重点关注对象</li>
          <li><strong>更优师资</strong>：比大机构更严格的教师筛选，更实在的价格</li>
        </ul>

        <h3 className="text-lg font-semibold text-neutral-900 mt-6">适合人群</h3>
        <ul>
          <li>计划出国读本科/研究生的高中生、大学生</li>
          <li>需要雅思A类考试成绩的考生</li>
          <li>自学缺乏自律性、需要体系化指导的学生</li>
          <li>单纯希望提升英语综合能力的学习者</li>
        </ul>
      </ChapterSection>

      {/* Chapter 2: Misconceptions */}
      <ChapterSection title="第二章 雅思备考常见误区">
        <h3 className="text-lg font-semibold text-neutral-900">刷题 ≠ 提分</h3>
        <p>很多学生陷入"刷题-对答案-刷更多题"的死循环。刷题只能检测水平，不能<strong>提升</strong>水平。</p>
        <p>真正的提分来自于：</p>
        <ol>
          <li><strong>诊断问题</strong> — 听说读写四科，弱项在哪里</li>
          <li><strong>针对性训练</strong> — 缺什么补什么，而不是泛泛刷题</li>
          <li><strong>反馈纠错</strong> — 错了要知道为什么错，怎么不错</li>
        </ol>

        <h3 className="text-lg font-semibold text-neutral-900 mt-6">为什么自律 + 体系才是关键</h3>
        <p>雅思备考是一场<strong>持久战</strong>。大多数学生的问题不是"学不会"，而是"坚持不下来"。</p>
        <ul>
          <li><strong>体系化教学</strong>：每个阶段有明确目标和任务</li>
          <li><strong>督学机制</strong>：老师每天跟进，不给你偷懒的机会</li>
          <li><strong>可视化进步</strong>：定期模考，看到自己的分数在涨</li>
        </ul>

        <h3 className="text-lg font-semibold text-neutral-900 mt-6">为什么选择真经体系</h3>
        <p>真经教学体系不是一套"技巧大全"，而是一个<strong>完整的语言能力培养系统</strong>：</p>
        <ul>
          <li>听力：从"听到单词"到"听懂逻辑"</li>
          <li>阅读：从"逐字翻译"到"结构化阅读"</li>
          <li>写作：从"模板套用"到"逻辑表达"</li>
          <li>口语：从"背诵答案"到"自然交流"</li>
        </ul>
      </ChapterSection>

      {/* Chapter 3: Teaching System */}
      <ChapterSection title="第三章 真经教学体系">
        <h3 className="text-lg font-semibold text-neutral-900">方法论概述</h3>
        <p>真经教学体系是一套以<strong>语言能力培养</strong>为核心的雅思教学方法论，从语言学习的底层逻辑出发，系统性地提升听说读写四项能力。由教学总监崔老师基于爱丁堡大学 TESOL 硕士学术训练与 7 年一线教学经验研发。</p>

        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          {[
            { icon: "🎧", title: "听力 · 信号词定位法", items: ["6大必考信号词体系", "分Section策略训练", "多口音适应训练（英美澳新等）"] },
            { icon: "📖", title: "阅读 · 结构化速读法", items: ["平行阅读法（一次读完不回头）", "7类题型分类击破", "意群阅读 + 长难句拆解"] },
            { icon: "✍️", title: "写作 · 逻辑框架搭建", items: ["四段式标准结构", "5大论证方法", "逻辑谬误诊断与修正"] },
            { icon: "🗣️", title: "口语 · 话题迁移策略", items: ["3-5个核心素材覆盖100+话题", "Part 1-3 分层策略", "流利度训练三法"] },
          ].map((m) => (
            <div key={m.title} className="bg-neutral-50 rounded-xl p-6">
              <h4 className="font-semibold text-brand">{m.icon} {m.title}</h4>
              <ul className="mt-2 text-sm space-y-1">
                {m.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-neutral-900 text-white rounded-2xl p-6 mt-8 text-center">
          <p className="font-semibold">📚 查看完整 9 章教学方法论</p>
          <p className="text-sm text-neutral-400 mt-1 mb-4">
            包含词汇场景分类记忆、语法精练、备考节奏规划、中国考生数据等完整内容
          </p>
          <Link
            href="/methodology"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium bg-white text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
          >
            浏览完整方法论 →
          </Link>
        </div>

        <h3 className="text-lg font-semibold text-neutral-900 mt-8">与其他机构的区别</h3>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-neutral-200">
                <th className="text-left py-3 px-4 font-semibold">维度</th>
                <th className="text-left py-3 px-4 font-semibold text-brand">宁致教育</th>
                <th className="text-left py-3 px-4 font-semibold text-neutral-400">大机构</th>
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
                <tr key={dim} className="border-b border-neutral-100">
                  <td className="py-3 px-4 font-medium">{dim}</td>
                  <td className="py-3 px-4 text-brand font-medium">{us}</td>
                  <td className="py-3 px-4 text-neutral-400">{them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ChapterSection>

      {/* Chapter 4: Learning Path */}
      <ChapterSection title="第四章 学习路径与课程">
        <div className="bg-neutral-900 text-white rounded-2xl p-8 my-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium">
            {["入学测试", "分班", "阶段学习", "期中模考", "查漏补缺", "冲刺模考", "考试"].map((step, i, arr) => (
              <span key={step} className="flex items-center gap-2">
                <span className="bg-brand px-4 py-2 rounded-full">{step}</span>
                {i < arr.length - 1 && <span className="text-neutral-500">&rarr;</span>}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-neutral-400">全程督学跟踪，确保每日有进展</p>
        </div>

        <h3 className="text-lg font-semibold text-neutral-900">第一步：入学测试</h3>
        <p>到校参加线下入学测试，全面摸底当前英语水平。这是后续学习效果的 <strong>benchmark</strong>（基准线），也是分班依据。</p>

        <h3 className="text-lg font-semibold text-neutral-900 mt-4">第二步：分班与目标设定</h3>
        <p>根据测试结果，分配到合适的班级，设定阶段性目标分数。</p>

        <h3 className="text-lg font-semibold text-neutral-900 mt-4">第三步：阶段学习</h3>
        <p>按照真经教学体系，听说读写四科同步推进。每个阶段包含：正课教学、课后练习、每日打卡、老师反馈。</p>

        <h3 className="text-lg font-semibold text-neutral-900 mt-6">课程类型</h3>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-neutral-200">
                <th className="text-left py-3 px-4 font-semibold">班型</th>
                <th className="text-left py-3 px-4 font-semibold">适合人群</th>
                <th className="text-left py-3 px-4 font-semibold">特点</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["一对一", "时间灵活、需要个性化方案", "最高关注度"],
                ["小班（3-6人）", "大多数学生", "有竞争有氛围"],
                ["冲刺班", "考前1-2个月", "密集模考+讲评"],
              ].map(([a, b, c]) => (
                <tr key={a} className="border-b border-neutral-100">
                  <td className="py-3 px-4 font-medium">{a}</td>
                  <td className="py-3 px-4 text-neutral-600">{b}</td>
                  <td className="py-3 px-4 text-neutral-600">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ChapterSection>

      {/* Chapter 5: Student Cases */}
      <ChapterSection title="第五章 学生出分案例">
        <CaseCard
          name="小林 — 从 5.5 到 6.5，三个月突破"
          before="5.5"
          after="6.5"
          duration="3个月"
          story="小林入学时最大的问题是写作和口语——能听懂、能看懂，但写不出、说不出。通过真经体系的系统训练，重点攻克写作逻辑和口语流利度，三个月实现1分跨越，拿到目标学校offer。"
        />
        <CaseCard
          name="Alex — 从 6.0 到 7.0，突破瓶颈"
          before="6.0"
          after="7.0"
          duration="4个月"
          story="Alex已考过两次雅思<sup>1</sup>，都卡在6.0。问题不是学不会，而是不知道哪里有问题。入学测试发现阅读方法效率低，写作缺乏逻辑框架。针对性调整后，四个月实现突破。"
        />
        <CaseCard
          name="小陈 — 零基础到 5.5，一年蜕变"
          before="零基础"
          after="5.5"
          duration="12个月"
          story="小陈刚来时连基本的句子都写不完整。经过一年的系统性学习，听说读写全面进步，家长说像换了一个人。目前正在冲刺6.5。"
        />
      </ChapterSection>

      {/* Chapter 6: FAQ */}
      <ChapterSection title="第六章 常见问题">
        <FAQItem question="课程费用是多少？">
          <p>费用根据班型（一对一/小班/冲刺班）和学习周期有所不同。请预约咨询获取详细报价。我们承诺：比大机构更优的师资，更实在的价格。</p>
        </FAQItem>
        <FAQItem question="一般需要学多久才能出分？">
          <p>取决于入学水平和目标分数。一般来说：</p>
          <ul className="mt-2">
            <li>5.0 → 6.0：约3-4个月</li>
            <li>5.5 → 6.5：约3-4个月</li>
            <li>6.0 → 7.0：约4-6个月</li>
          </ul>
          <p className="mt-2">以上为全日制学习节奏，周末班相应延长。</p>
        </FAQItem>
        <FAQItem question="不满意可以退费吗？">
          <p>我们提供试听课（收费），试听后如果不满意，可以不报名。已报名的课程，剩余课时支持按比例退费。</p>
        </FAQItem>
        <FAQItem question="怎么预约试听课？">
          <p>添加我们的微信或致电预约。试听课为收费制，因为我们相信好的教学值得被认真对待。</p>
          <p className="mt-2">流程：联系我们 → 到校做入学测试 → 参加试听课 → 教学反馈 → 商讨报名</p>
        </FAQItem>
      </ChapterSection>
    </ManualLayout>
  );
}
