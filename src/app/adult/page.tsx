import type { Metadata } from "next";
import { ManualLayout } from "@/components/manual/ManualLayout";
import { ChapterSection } from "@/components/manual/ChapterSection";
import { ComparisonTable } from "@/components/manual/ComparisonTable";
import { PageNotes } from "@/components/ui/PageNotes";

export const metadata: Metadata = {
  title: "成人英语",
  description:
    "宁致教育成人英语（18+），面向跨境、外贸电商人群，定制化教材，雅思G类备考+职场实用英语提升。",
};

export default function AdultPage() {
  return (
    <ManualLayout
      title="成人英语"
      subtitle="IELTS<sup>2</sup> General · 职场提升 · 18岁以上 · 定制教材"
    >
      <ChapterSection title="面向人群">
        <ul>
          <li><strong>跨境、外贸电商从业者</strong> — 英语商务沟通、邮件、谈判</li>
          <li><strong>职场提升人群</strong> — 提升职场竞争力</li>
          <li><strong>雅思G类考生</strong> — 移民类雅思备考</li>
          <li><strong>陪读家长</strong> — 非主要业务，一并覆盖</li>
        </ul>
      </ChapterSection>

      <ChapterSection title="教学特色">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-neutral-50 rounded-xl p-6">
            <h4 className="font-semibold text-brand">📋 定制化教材</h4>
            <p className="mt-2 text-sm text-neutral-600">
              根据学员的具体行业和需求，选择《Interchange<sup>3</sup>》等教材或定制方案，不搞一刀切。
            </p>
          </div>
          <div className="bg-neutral-50 rounded-xl p-6">
            <h4 className="font-semibold text-brand">🏢 场景化教学</h4>
            <p className="mt-2 text-sm text-neutral-600">
              跨境电商沟通、英文邮件写作、商务口语、电话会议实战——学完就能用。
            </p>
          </div>
          <div className="bg-neutral-50 rounded-xl p-6">
            <h4 className="font-semibold text-brand">🕐 灵活排课</h4>
            <p className="mt-2 text-sm text-neutral-600">
              适应成人学员的工作节奏，工作日晚上和周末均可排课。
            </p>
          </div>
          <div className="bg-neutral-50 rounded-xl p-6">
            <h4 className="font-semibold text-brand">📝 雅思G类辅导</h4>
            <p className="mt-2 text-sm text-neutral-600">
              针对移民类雅思考试，侧重生活场景英语和实用写作。
            </p>
          </div>
        </div>
      </ChapterSection>

      <ChapterSection title="课程形式">
        <ComparisonTable
          columns={[
            { key: "format", header: "形式" },
            { key: "who", header: "适合人群" },
          ]}
          data={[
            { format: "一对一", who: "时间灵活、需求个性化" },
            { format: "小班（2-4人）", who: "同行业一起学，互相交流" },
            { format: "线上课", who: "外地或不方便到校的学员" },
          ]}
        />
      </ChapterSection>

      <ChapterSection title="免费咨询">
        <p>
          添加微信或致电咨询，告诉我们你的需求——行业、目标、时间安排——我们为你定制专属学习方案。
        </p>
        <p className="mt-4">
          成人英语不是我们的主要业务线，但也因此我们更珍惜每一位成人学员，确保教学质量不打折。
        </p>
      </ChapterSection>
    </ManualLayout>
  );
}
