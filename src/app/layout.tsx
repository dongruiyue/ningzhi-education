import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "宁致教育 | Ningzhi Education — 深圳英语培训",
    template: "%s | 宁致教育",
  },
  description:
    "宁致教育是深圳英语培训机构。留学英语（雅思A类）、校内提升（KET/PET）、成人英语，真经教学体系，严抓督学。",
  keywords: ["深圳英语培训", "雅思培训", "KET", "PET", "留学英语", "成人英语"],
  icons: {
    icon: [{ url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%232563EB'/%3E%3Cpath d='M10 23V9l12 14V9' stroke='%23fff' stroke-width='3.2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E", type: "image/svg+xml" }],
    shortcut: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%232563EB'/%3E%3Cpath d='M10 23V9l12 14V9' stroke='%23fff' stroke-width='3.2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
    apple: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%232563EB'/%3E%3Cpath d='M10 23V9l12 14V9' stroke='%23fff' stroke-width='3.2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "宁致教育",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
