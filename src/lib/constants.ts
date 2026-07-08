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
  { label: "课程价格", href: "/pricing" },
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

export const PRICING = {
  heroTitle: "透明的价格，才会有信任",
  heroSubtitle: "不推长课包，不以课量锁客——以目标定价，每一分钱都花得明白",
  plans: {
    standard: {
      title: "1V1 私人定制",
      price: "680",
      unit: "元/时",
      badge: "高端线",
      features: [
        "一师一生，100%专注力",
        "定制学习方案，按需调整",
        "适合时间零散、目标明确的学生",
        "优先级最高的排课和答疑",
      ],
    },
    duo: {
      title: "1V2 双人同行",
      price: "480",
      unit: "元/时/人",
      badge: "灵活过渡",
      features: [
        "两人同行，每人都省30%",
        "同伴互练，效果加倍",
        "适合两个朋友一起学",
        "同样享受真经教学体系",
      ],
    },
    small: {
      title: "标准小班 3-4人",
      price: "330",
      unit: "元/时/人",
      badge: "⭐ 人气推荐",
      features: [
        "同样的一线教师，一半的价格",
        "3人开班，互动讨论氛围好",
        "师时效率高，性价比之王",
        "课程进度适中，适合稳步提升",
      ],
    },
    group: {
      title: "拼团小班 5人",
      price: "290",
      unit: "元/时/人",
      badge: "🔥 最省方案",
      features: [
        "自行组满5人，享最低价",
        "比标准小班再省12%",
        "班级氛围最活跃",
        "团长额外福利赠送",
      ],
    },
  },
  groupBuy: {
    title: "拼团怎么玩？",
    subtitle: "就像拼多多一样，拉上朋友一起学，越多人越便宜",
    steps: [
      "邀请3位朋友一起报名，组成5人班",
      "全部自动享受拼团价，每人省12%",
      "发起人（团长）额外赠送1节课",
      "3人标准班也可直接报名，不用凑人",
    ],
    highlight: "拼团5人班，机构利润反而更高  |  家长省钱，我们也开心",
  },
  faq: [
    { q: "价格含教材吗？", a: "是的，所有课程价格均已包含教材和资料费用，无额外收费。" },
    { q: "课包买大更便宜吗？", a: "不，我们不推长课包。无论买多少课时，单价都是一样的。我们的目标不是锁住你，而是帮你尽快达到目标。" },
    { q: "如果中途想要换成其他班型？", a: "可以灵活调整，补差价即可升级（如标准小班→1V1），或按比例退还差价降级。" },
    { q: "拼团需要提前凑人吗？", a: "不需要。你可以先报标准小班(3-4人)开课学习，组满5人后自动升级为拼团价，差价退还。" },
    { q: "有试听课吗？", a: "有。我们提供首次30分钟免费试听/诊断评估，帮助你了解教学方式和定位问题。" },
  ],
  cta: "预约试听，体验真经教学",
  ctaSub: "不夸海口、不打包票、不制造焦虑。我们做真实的评估，给可执行的方案。",
} as const;
