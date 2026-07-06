// 考试名 / 教材名 → 归属机构
export const TRADEMARKS: Record<string, string> = {
  // 英语考试
  "雅思": "British Council、IDP Education 及 Cambridge English Language Assessment",
  "IELTS": "British Council、IDP Education 及 Cambridge English Language Assessment",
  "托福": "Educational Testing Service (ETS)",
  "TOEFL": "Educational Testing Service (ETS)",
  "GRE": "Educational Testing Service (ETS)",
  "SAT": "College Board",
  "AP": "College Board",
  "KET": "Cambridge English Language Assessment",
  "PET": "Cambridge English Language Assessment",
  "FCE": "Cambridge English Language Assessment",
  "A-Level": "Cambridge International Education",
  "IGCSE": "Cambridge International Education",
  "IB": "International Baccalaureate Organization",
  "DSE": "香港考试及评核局",
  "SSAT": "The Enrollment Management Association",
  "AMC": "Mathematical Association of America",
  "GMAT": "Graduate Management Admission Council",
  "USABO": "Center for Excellence in Education",
  "NEC": "Council for Economic Education",
  "Unlock": "Cambridge University Press",
  "Power Up": "Cambridge University Press",
  "Interchange": "Cambridge University Press",
  "Pathways": "National Geographic Learning",
  "Reading Explorer": "National Geographic Learning",
  "Great Writing": "National Geographic Learning",
  "OXFORD": "Oxford University Press",
};

// 哪些词需要被匹配（优先精确匹配避免误伤）
export const EXAM_TERMS = [
  "IELTS", "TOEFL", "GRE", "SAT", "AP", "KET", "PET", "FCE",
  "雅思", "托福",
  "A-Level", "IGCSE", "IB", "DSE", "SSAT", "AMC", "GMAT", "USABO", "NEC",
  "Power Up", "Reading Explorer", "Great Writing",
  "Unlock", "Pathways", "Interchange",
];

// 注意：Power Up 要先于 Power Up 的子串出现，Unlock 同理
// 扫描页面时应按长词优先匹配
