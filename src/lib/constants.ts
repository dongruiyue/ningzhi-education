// ============================================
// 宁致教育 — Brand & Site Constants
// ============================================

export const BRAND = {
  name: "宁致教育",
  nameEn: "Ningzhi Education",
  tagline: "找个说真话的机构",
  productTagline: "正规出分的最后一站",
  experienceTagline: "每一步都看见，才叫放心",
  description:
    "在深圳，用真实结果说话的英语教育——对抗消课逻辑、黑盒感和夸大营销。",
  url: "https://ningzhi.education",
  contact: {
    phone: "",
    wechat: "",
    email: "",
    address: "深圳市福田区田面城市大厦16C",
  },
} as const;

export const NAVIGATION = [
  { label: "首页", href: "/" },
  { label: "关于我们", href: "/about" },
  { label: "教学方法", href: "/methodology" },
  { label: "师资团队", href: "/teachers" },
  { label: "出分案例", href: "/cases" },
  { label: "留学英语", href: "/study-abroad" },
  { label: "校内提升", href: "/k12" },
  { label: "成人英语", href: "/adult" },
] as const;

export const PRODUCT_LINES = [
  {
    id: "study-abroad",
    title: "留学英语",
    subtitle: "IELTS Academic · 正规出分的最后一站",
    ageRange: "15+",
    description:
      "真经教学体系 + 方法论驱动 + 助教一对一督学。不教套路教方法，不堆课时看结果。",
    features: ["真经四科方法论", "信号词定位·结构化速读·逻辑框架", "助教每日督学", "老师与学生共赴考场"],
    href: "/study-abroad",
  },
  {
    id: "k12",
    title: "校内提升",
    subtitle: "KET · PET · 校内同步",
    ageRange: "6–15",
    description:
      "Unlock / Pathways / Power Up / Reading Explorer / Great Writing 五大教材按需组合，能力+分数双提升。",
    features: ["五套国际教材矩阵", "KET/PET/校内全覆盖", "量体裁衣式排课", "每日跟进反馈"],
    href: "/k12",
  },
  {
    id: "adult",
    title: "成人英语",
    subtitle: "IELTS General · 职场实用",
    ageRange: "18+",
    description:
      "面向跨境/外贸/职场人群。定制方案，灵活排课。不推长课包，目标达成即结课。",
    features: ["跨境/外贸场景", "职场实用英语", "雅思G类备考", "目标达成结课"],
    href: "/adult",
  },
] as const;
