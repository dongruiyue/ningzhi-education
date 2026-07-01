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

      <div className="border-t border-neutral-800 px-6 py-6 text-center text-xs text-neutral-500">
        &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
      </div>
    </footer>
  );
}
