"use client";

import ProfileCard from "@/components/ui/ProfileCard";

interface TeacherData {
  id: number;
  name: string;
  title: string;
  handle: string;
  status: string;
  tags: string[];
  photo: string;
}

const TEACHERS: TeacherData[] = [
  {
    id: 1,
    name: "王老师",
    title: "GRE / 托雅 金牌老师",
    handle: "Trulip",
    status: "授课 9000+ 小时 · 9 年",
    tags: ["SSAT", "GRE Verbal", "托福"],
    photo: "/teachers/teacher_01.png",
  },
  {
    id: 2,
    name: "季老师",
    title: "GRE / 托雅 金牌老师",
    handle: "FREDA",
    status: "授课 9000+ 小时 · 11 年",
    tags: ["SSAT", "GRE 阅读", "写作"],
    photo: "/teachers/teacher_02.png",
  },
  {
    id: 3,
    name: "丁老师",
    title: "数学金牌老师",
    handle: "VIVIAN",
    status: "授课 9000+ 小时 · 9 年",
    tags: ["SAT 数学", "AP 微积分", "A-Level"],
    photo: "/teachers/teacher_03.png",
  },
  {
    id: 4,
    name: "陈老师",
    title: "生物金牌老师",
    handle: "Daisy",
    status: "授课 3000+ 小时 · 4 年",
    tags: ["A-Level 生物", "AS/A2", "A/A* 率 80%+"],
    photo: "/teachers/teacher_04.png",
  },
  {
    id: 5,
    name: "张老师",
    title: "数学金牌老师 · 北大+新国立",
    handle: "JESSIE",
    status: "授课 3000+ 小时 · 5 年",
    tags: ["A-Level", "AP", "AMC"],
    photo: "/teachers/teacher_05.png",
  },
  {
    id: 6,
    name: "曾老师",
    title: "NEC 经济竞赛金牌教练",
    handle: "GrAce",
    status: "授课 3000+ 小时 · 5 年",
    tags: ["A-Level 经济", "AP Macro", "竞赛"],
    photo: "/teachers/teacher_06.png",
  },
  {
    id: 7,
    name: "卢老师",
    title: "英语金牌老师 · DSE 专家",
    handle: "Rosalie",
    status: "授课 3200+ 小时 · 4 年",
    tags: ["DSE 英语", "SAT", "雅思"],
    photo: "/teachers/teacher_07.png",
  },
  {
    id: 8,
    name: "甘老师",
    title: "数学金牌老师",
    handle: "Gavin",
    status: "授课 4200+ 小时 · 6 年",
    tags: ["A-Level 数学", "AP", "DSE"],
    photo: "/teachers/teacher_08.png",
  },
  {
    id: 9,
    name: "崔老师",
    title: "托雅金牌 · 阅读满分 9.0",
    handle: "Carina",
    status: "授课 5000+ 小时 · 5 年",
    tags: ["Unlock", "IB 历史", "雅思阅读"],
    photo: "/teachers/teacher_09.png",
  },
  {
    id: 10,
    name: "杨老师",
    title: "物理/数学金牌 · 港大",
    handle: "Thomas",
    status: "授课 2000+ 小时 · 3 年",
    tags: ["A-Level 物理", "AP 微积分", "DSE"],
    photo: "/teachers/teacher_10.png",
  },
  {
    id: 11,
    name: "田老师",
    title: "物理/数学金牌 · 清华+港大",
    handle: "Ethan Tian",
    status: "授课 4000+ 小时 · 6 年",
    tags: ["A-Level", "AP", "AMC", "IGCSE"],
    photo: "/teachers/teacher_11.png",
  },
  {
    id: 12,
    name: "徐老师",
    title: "物理金牌 · 浙大+港大",
    handle: "Freya",
    status: "授课 2000+ 小时 · 4 年",
    tags: ["A-Level 物理", "全英授课"],
    photo: "/teachers/teacher_12.png",
  },
  {
    id: 13,
    name: "单老师",
    title: "地理金牌老师",
    handle: "REnee",
    status: "授课 4000+ 小时 · 6 年",
    tags: ["A-Level 地理", "IB 地理", "EE"],
    photo: "/teachers/teacher_13.png",
  },
  {
    id: 14,
    name: "权老师",
    title: "数学金牌 · 港中文+新南",
    handle: "Quan",
    status: "授课 2000+ 小时 · 2 年",
    tags: ["A-Level 数学", "IGCSE", "牛剑录取"],
    photo: "/teachers/teacher_14.png",
  },
];

export function TeacherGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10">
      {TEACHERS.map((teacher) => (
        <div key={teacher.id} className="flex justify-center">
          <div className="w-full max-w-[300px]">
            <ProfileCard
              avatarUrl={teacher.photo}
              name={teacher.name}
              title={teacher.title}
              handle={teacher.handle}
              status={teacher.status}
              contactText="了解详情"
              enableTilt={true}
              enableMobileTilt={false}
              behindGlowColor="rgba(37, 99, 235, 0.5)"
              innerGradient="linear-gradient(145deg, #2563EB44 0%, #1D4ED822 100%)"
              onContactClick={() => {
                const tel = document.querySelector<HTMLAnchorElement>('a[href^="tel"]');
                if (tel) tel.click();
              }}
            >
              <div className="flex flex-wrap gap-1.5 justify-center">
                {teacher.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </ProfileCard>
          </div>
        </div>
      ))}
    </div>
  );
}
