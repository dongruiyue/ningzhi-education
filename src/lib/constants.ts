// ============================================
// 宁致教育 — Brand & Site Constants
// ============================================

export const BRAND = {
  name: "宁致教育",
  nameEn: "Ningzhi Education",
  tagline: "一个说真话的机构",
  productTagline: "靠实力出分的最后一站",
  experienceTagline: "每一步都看见，才叫放心",
  description:
    "用真实和结果说话——没有黑盒感、没有无良课消、没有过度宣传。",
  url: "https://ningzhi.education",
  contact: {
    phone: "18998994092",
    wechat: "微信二维码",
    email: "ningzhijiaoyu@qq.com",
    address: "深圳市福田区华富街道田面城市大厦16C",
  },
} as const;

export const NAVIGATION = [
  { label: "首页", href: "/" },
  { label: "关于我们", href: "/about" },
  { label: "教学方法", href: "/methodology" },
  { label: "师资团队", href: "/teachers" },
  { label: "出分案例", href: "/cases" },
  { label: "雅思培训", href: "/study-abroad" },
  { label: "校内提升", href: "/k12" },
  { label: "成人英语", href: "/adult" },
] as const;

export const PRODUCT_LINES = [
  {
    id: "study-abroad",
    title: "雅思培训",
    subtitle: "雅思A类 · 靠实力出分的最后一站",
    ageRange: "15+",
    description:
      "雅思A类备考，真经教学体系，听说读写四科成体系突破，单科9分+综合8.5分教师授课。只要你带着学习态度来，我们就能让你带着结果走。",
    features: ["真经四科方法论", "听说读写成体系突破", "助教每日督学", "单科9分+综合8.5分教师"],
    href: "/study-abroad",
  },
  {
    id: "k12",
    title: "KET · PET · 校内提升",
    subtitle: "KET · PET · 能力素养 · 校内提升",
    ageRange: "6–15",
    description:
      "KET / PET 考前冲刺 + 校内同步提升。五大权威教材，灵活组合，剑桥官方考试与校内成绩双目标。不管你是想拿证还是提分，都能找到适合的方案。",
    features: ["KET/PET考前冲刺", "剑桥考试+校内双目标", "五大权威教材", "每日跟进反馈"],
    href: "/k12",
  },
  {
    id: "adult",
    title: "成人英语",
    subtitle: "IELTS General · 职场实用",
    ageRange: "18+",
    description:
      "跨境/外贸/职场/陪读，根据需求定制方案，灵活排课。",
    features: ["跨境/外贸场景", "职场实用英语", "陪读家长", "定制方案"],
    href: "/adult",
  },
] as const;
