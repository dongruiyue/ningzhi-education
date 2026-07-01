import { ChapterSection } from "@/components/manual/ChapterSection";

export function AdultPrint() {
  return (
    <article className="max-w-[210mm] mx-auto px-[18mm] py-[20mm] bg-white text-neutral-900">
      <header className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight">宁致教育</h1>
        <p className="mt-2 text-xl text-brand font-semibold">成人英语 · 18岁以上</p>
        <p className="mt-4 text-neutral-600">跨境/外贸/职场 · 定制教材 · 雅思G类</p>
        <div className="mt-12 text-sm text-neutral-400">www.ningzhi.education</div>
      </header>

      <ChapterSection title="面向人群">
        <ul>
          <li>跨境、外贸电商从业者</li>
          <li>职场提升人群</li>
          <li>雅思G类考生（移民类）</li>
          <li>陪读家长</li>
        </ul>
      </ChapterSection>

      <ChapterSection title="教学特色">
        <ul>
          <li><strong>定制化教材</strong>：根据行业和需求选择 Interchange、流利说体系或其他教材</li>
          <li><strong>场景化教学</strong>：跨境电商沟通、英文邮件写作、商务口语</li>
          <li><strong>灵活排课</strong>：适应成人工作节奏</li>
          <li><strong>雅思G类辅导</strong>：侧重生活场景英语和实用写作</li>
        </ul>
      </ChapterSection>

      <ChapterSection title="课程形式">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-neutral-900">
              <th className="text-left py-2 px-3 font-semibold">形式</th>
              <th className="text-left py-2 px-3 font-semibold">适合人群</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-200"><td className="py-2 px-3 font-medium">一对一</td><td className="py-2 px-3">时间灵活、需求个性化</td></tr>
            <tr className="border-b border-neutral-200"><td className="py-2 px-3 font-medium">小班（2-4人）</td><td className="py-2 px-3">同行业一起学</td></tr>
            <tr className="border-b border-neutral-200"><td className="py-2 px-3 font-medium">线上课</td><td className="py-2 px-3">外地或不方便到校</td></tr>
          </tbody>
        </table>
      </ChapterSection>

      <ChapterSection title="免费咨询">
        <p>添加微信或致电咨询，告诉我们你的行业、目标、时间安排，我们为你定制专属学习方案。</p>
        <p>成人英语不是我们的主要业务线，但也因此我们更珍惜每一位成人学员，确保教学质量不打折。</p>
      </ChapterSection>

      <footer className="mt-16 pt-8 border-t border-neutral-200 text-center text-sm text-neutral-400">
        <p>宁致教育 · 深圳英语培训</p>
        <p>www.ningzhi.education</p>
      </footer>
    </article>
  );
}
