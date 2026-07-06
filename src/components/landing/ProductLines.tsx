import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { PRODUCT_LINES } from "@/lib/constants";

export function ProductLines() {
  return (
    <section className="py-20 md:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">我们的课程</h2>
          <p className="mt-4 text-lg text-neutral-600">
            三条产品线，覆盖全年龄段英语学习需求
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRODUCT_LINES.map((line) => (
            <Link key={line.id} href={line.href} className="group">
              <Card className="h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="brand">{line.ageRange}</Badge>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 group-hover:text-brand transition-colors">
                  {line.title}
                </h3>
                <p className="text-sm text-brand mt-1">{line.subtitle}</p>
                <p className="mt-4 text-sm text-neutral-600 leading-relaxed flex-1">
                  <span dangerouslySetInnerHTML={{ __html: line.description }} />
                </p>
                <ul className="mt-6 space-y-2">
                  {line.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-neutral-600">
                      <svg className="w-4 h-4 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-neutral-100">
                  <span className="text-sm font-medium text-brand group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    了解更多
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
