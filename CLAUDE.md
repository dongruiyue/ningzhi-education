# 宁致教育 (Ningzhi Education) — 营销资料体系

## 项目概述

宁致教育是深圳一家英语培训机构，本项目是其营销资料体系：
- **PDF 手册**（地推、微信分发）
- **HTML 网页**（Vercel 部署 + 自定义域名）
- **微信小程序**（后期开发）

三条产品线：留学英语(15+,雅思A) / 校内提升(6-15,KET/PET) / 成人英语(18+,跨境/职场)

## 技术栈

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS 4** (CSS-first config, `@theme inline`)
- **@next/mdx** (Markdown support)
- **Vercel** (部署)

## 品牌设计规范

- **主色**: `#0A0A0A` (near-black)
- **跳色**: `#2563EB` (Royal Blue, `brand` / `brand-light` / `brand-dark`)
- **灰色阶**: `neutral-50` → `neutral-900` (F8F9FA → 0A0A0A)
- **字体**: 系统字体栈 (Inter → PingFang SC → Microsoft YaHei → sans-serif)

## 内容生产流水线

```
content/*.md (编辑内容)
     ↓
Next.js 渲染网页
     ↓
┌────┴────┐
↓         ↓
网页页面   打印 → PDF
```

## 目录结构

```
content/          ← 内容源文件 (Markdown, 非代码人员编辑)
  brand.md
  study-abroad/   01-06 章
  k12/            01-06 章 (含教材选择矩阵)
  adult/          manual.md
src/
  app/            Next.js 路由页面
  components/
    layout/       Header, Footer
    ui/           Button, Section, Card, Badge
    landing/      Hero, ProductLines, Stats, Teachers, CTASection
    manual/       ManualLayout, ChapterSection, CaseCard, FAQItem, ComparisonTable
  lib/
    constants.ts  品牌配置、导航、产品线
public/images/    图片素材
```

## 开发命令

```bash
npm run dev      # 本地开发 http://localhost:3000
npm run build    # 生产构建
npm run lint     # ESLint
```

## PDF 生成

每个产品线页面有网页版和打印版：
- 网页版：`/study-abroad` `/k12` `/adult`
- 打印版：`/study-abroad/print` `/k12/print` `/adult/print`
- 打印版 → Ctrl+P / Cmd+P → 另存为 PDF

## 修改内容的方式

1. 编辑 `content/` 目录下对应的 Markdown 文件
2. 刷新浏览器查看效果
3. 如果修改了页面结构，同步更新 `src/app/` 下的 TSX 页面

## 部署

```bash
# 首次部署
npx vercel --prod

# 绑定域名
# Vercel Dashboard → Settings → Domains
```
