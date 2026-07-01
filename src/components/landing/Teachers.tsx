import { Card } from "@/components/ui/Card";

const teachers = [
  {
    name: "崔老师",
    title: "英语教学总监 · 爱丁堡大学 TESOL 硕士",
    description:
      "原新东方、学为贵、流利说核心教师。7年一线教学经验，雅思总分8.0，听力阅读双满分9.0。累计学员3000+。拥有完整的9章雅思教学方法论体系——不是包装出来的名师，是真正科班出身的专业者。",
    highlights: ["雅思8.0·双满分", "爱丁堡TESOL硕", "新东方·学为贵·流利说", "3000+学员"],
  },
];

export function Teachers() {
  return (
    <section className="py-20 md:py-28 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase mb-4 block text-brand-light">
            教学总监
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            好老师，才有好成绩
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            真实分数可查——我们老师跟学生一起进雅思考场
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {teachers.map((teacher) => (
            <Card key={teacher.name} className="bg-neutral-800 border-neutral-700 text-left" hover={false}>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-24 h-24 rounded-2xl bg-brand/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-10 h-10 text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{teacher.name}</h3>
                  <p className="text-sm text-brand-light mt-1">{teacher.title}</p>
                  <p className="mt-4 text-neutral-400 leading-relaxed">{teacher.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {teacher.highlights.map((h) => (
                      <span key={h} className="px-3 py-1 text-xs font-medium rounded-full bg-brand/10 text-brand-light">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
