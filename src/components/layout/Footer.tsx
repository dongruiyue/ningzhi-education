import Link from "next/link";
import { BRAND, NAVIGATION } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="no-print bg-neutral-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <Link href="/" className="text-xl font-bold tracking-tight text-white">
            {BRAND.name}
          </Link>
          <p className="mt-2 text-sm text-neutral-400">{BRAND.tagline}</p>
          <p className="mt-4 text-sm text-neutral-400 leading-relaxed max-w-xs">
            {BRAND.description}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">快速导航</h4>
          <ul className="space-y-2">
            {NAVIGATION.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">联系我们</h4>
          <ul className="space-y-2 text-sm text-neutral-400">
            {BRAND.contact.address && <li>{BRAND.contact.address}</li>}
            {BRAND.contact.phone && <li>电话：{BRAND.contact.phone}</li>}
            {BRAND.contact.wechat && <li>微信：{BRAND.contact.wechat}</li>}
            {BRAND.contact.email && <li>邮箱：{BRAND.contact.email}</li>}
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-800 px-6 py-8 space-y-3 text-xs text-neutral-500 leading-relaxed">
        <p>
          IELTS<sup>&reg;</sup>¹、TOEFL<sup>&reg;</sup>²、GRE<sup>&reg;</sup>³、SAT<sup>&reg;</sup>⁴、AP<sup>&reg;</sup>⁵、KET/PET/FCE⁶、A-Level/IGCSE⁷、IB<sup>&reg;</sup>⁸、DSE⁹、Unlock/Power Up/Interchange¹⁰、Pathways/Reading Explorer/Great Writing¹¹
        </p>
        <p className="text-neutral-600 mt-1">
          均为各自权利持有人的财产，仅用于教学参考和课程说明目的。宁致教育与上述机构无隶属、赞助或 endorsement 关系。
        </p>
        <div className="mt-4 pt-4 border-t border-neutral-800 space-y-1">
          <p>¹ IELTS — British Council、IDP Education 及 Cambridge English Language Assessment</p>
          <p>² TOEFL — Educational Testing Service (ETS)</p>
          <p>³ GRE — Educational Testing Service (ETS)</p>
          <p>⁴ SAT — College Board</p>
          <p>⁵ AP — College Board</p>
          <p>⁶ KET、PET、FCE — Cambridge English Language Assessment</p>
          <p>⁷ A-Level、IGCSE — Cambridge International Education</p>
          <p>⁸ IB — International Baccalaureate Organization</p>
          <p>⁹ DSE — 香港考试及评核局</p>
          <p>¹⁰ 《Unlock》《Power Up》《Interchange》— Cambridge University Press</p>
          <p>¹¹ 《Pathways》《Reading Explorer》《Great Writing》— National Geographic Learning</p>
        </div>
      </div>

      <div className="border-t border-neutral-800 px-6 py-6 text-center text-xs text-neutral-500">
        &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
      </div>
    </footer>
  );
}
