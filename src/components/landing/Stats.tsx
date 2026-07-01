export function Stats() {
  const stats = [
    { value: "小而精", label: "每班人数严格控制，确保每个学生被看见" },
    { value: "真经体系", label: "行业内经过广泛验证的领先教学方法论" },
    { value: "严抓督学", label: "不是上完课就结束，全程跟踪直到出分" },
    { value: "高性价比", label: "比大机构更优的师资，更实在的价格" },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            大机构不做的事，我们做
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            行业习惯 ≠ 宁致习惯。我们选择了一条更慢但更对的路
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand">{stat.value}</div>
              <p className="mt-4 text-sm text-neutral-600 leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
