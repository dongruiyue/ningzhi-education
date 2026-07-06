"use client";

import { useRef, type FormEvent } from "react";

const AGES = [
  "6岁以下", "6-8岁", "8-10岁", "10-12岁",
  "12-15岁", "15-18岁", "18岁以上",
];

const GRADES = ["学龄前", "小学", "初中", "高中", "大学及以上", "其他"];

const COURSES = ["校内提升", "留学英语", "成人英语", "其他"] as const;

// ponytail: Formspree is the simplest no-backend form handler.
const FORM_ENDPOINT = "https://formspree.io/f/xaqgvzgg";

export function TrialBooking() {
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    // ponytail: native HTML validation is enough for this form
    const form = ref.current;
    if (!form) return;
    if (!form.checkValidity()) {
      e.preventDefault();
      form.reportValidity();
    }
  };

  return (
    <section id="trial" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-brand font-semibold text-sm tracking-wide uppercase mb-4">
            预约试听
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
            来试听一节课吧
          </h2>
          <p className="mt-4 text-lg text-neutral-500 max-w-lg mx-auto">
            填写以下信息，我们会尽快联系你安排试听时间
          </p>
        </div>

        {/* Form */}
        <form
          ref={ref}
          action={FORM_ENDPOINT}
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Name + Phone row */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">
                学生姓名 <span className="text-error">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="姓名或英文名"
                className="w-full px-4 py-3 text-sm rounded-xl border border-neutral-200 bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-shadow"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1.5">
                手机号 <span className="text-error">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="请输入手机号"
                className="w-full px-4 py-3 text-sm rounded-xl border border-neutral-200 bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-shadow"
              />
            </div>
          </div>

          {/* Age + Grade row */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-neutral-700 mb-1.5">
                学生年龄
              </label>
              <select
                id="age"
                name="age"
                defaultValue=""
                className="w-full px-4 py-3 text-sm rounded-xl border border-neutral-200 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-shadow"
              >
                <option value="" disabled>请选择</option>
                {AGES.map((a) => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="grade" className="block text-sm font-medium text-neutral-700 mb-1.5">
                当前年级
              </label>
              <select
                id="grade"
                name="grade"
                defaultValue=""
                className="w-full px-4 py-3 text-sm rounded-xl border border-neutral-200 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-shadow"
              >
                <option value="" disabled>请选择</option>
                {GRADES.map((g) => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>
          </div>

          {/* Course radio */}
          <fieldset>
            <legend className="block text-sm font-medium text-neutral-700 mb-3">
              预约课程
            </legend>
            <div className="flex flex-wrap gap-3">
              {COURSES.map((c) => (
                <label
                  key={c}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-700 cursor-pointer has-[:checked]:border-brand has-[:checked]:bg-brand/5 has-[:checked]:text-brand transition-all"
                >
                  <input
                    type="radio"
                    name="course"
                    value={c}
                    className="w-4 h-4 text-brand accent-brand"
                  />
                  {c}
                </label>
              ))}
            </div>
          </fieldset>

          {/* Date */}
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-neutral-700 mb-1.5">
              期望试听日期
            </label>
            <input
              id="date"
              name="date"
              type="date"
              className="w-full px-4 py-3 text-sm rounded-xl border border-neutral-200 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-shadow"
            />
          </div>

          {/* Notes */}
          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-neutral-700 mb-1.5">
              备注
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              placeholder="有什么想提前告诉我们的？"
              className="w-full px-4 py-3 text-sm rounded-xl border border-neutral-200 bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-shadow resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white bg-brand rounded-full hover:bg-brand-dark transition-colors"
          >
            提交预约
          </button>
        </form>
      </div>
    </section>
  );
}
