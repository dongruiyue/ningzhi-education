"use client";

import { TeacherCard } from "./TeacherCard";

interface TeacherData {
  id: number;
  name: string;
  title: string;
  handle: string;
  status: string;
  tags: string[];
}

const TEACHERS: TeacherData[] = [
  { id: 1, name: "王老师", title: "GRE<sup>1</sup> / 托雅 金牌老师", handle: "Trulip", status: "9 年 · 9000+ 小时", tags: ["SSAT<sup>2</sup><sup>3</sup>", "GRE<sup>1</sup> Verbal", "托福<sup>4</sup>"] },
  { id: 2, name: "季老师", title: "GRE<sup>1</sup> / 托雅 金牌老师", handle: "FREDA", status: "11 年 · 9000+ 小时", tags: ["SSAT<sup>2</sup><sup>3</sup>", "GRE<sup>1</sup> 阅读", "写作"] },
  { id: 3, name: "丁老师", title: "数学金牌老师", handle: "VIVIAN", status: "9 年 · 9000+ 小时", tags: ["SAT<sup>3</sup> 数学", "AP<sup>5</sup> 微积分", "A-Level<sup>6</sup>"] },
  { id: 4, name: "陈老师", title: "生物金牌老师", handle: "Daisy", status: "4 年 · 3000+ 小时", tags: ["A-Level<sup>6</sup> 生物", "AS/A2", "A/A* 率 80%+"] },
  { id: 5, name: "张老师", title: "数学金牌老师 · 北大+新国立", handle: "JESSIE", status: "5 年 · 3000+ 小时", tags: ["A-Level<sup>6</sup>", "AP<sup>5</sup>", "AMC<sup>7</sup>"] },
  { id: 6, name: "曾老师", title: "NEC<sup>8</sup> 经济竞赛金牌教练", handle: "GrAce", status: "5 年 · 3000+ 小时", tags: ["A-Level<sup>6</sup> 经济", "AP<sup>5</sup> Macro", "竞赛"] },
  { id: 7, name: "卢老师", title: "英语金牌老师 · DSE<sup>9</sup> 专家", handle: "Rosalie", status: "4 年 · 3200+ 小时", tags: ["DSE<sup>9</sup> 英语", "SAT<sup>3</sup>", "雅思<sup>10</sup>"] },
  { id: 8, name: "甘老师", title: "数学金牌老师", handle: "Gavin", status: "6 年 · 4200+ 小时", tags: ["A-Level<sup>6</sup> 数学", "AP<sup>5</sup>", "DSE<sup>9</sup>"] },
  { id: 9, name: "崔老师", title: "托雅金牌 · 阅读满分 9.0", handle: "Carina", status: "5 年 · 5000+ 小时", tags: ["Unlock<sup>11</sup>", "IB<sup>12</sup> 历史", "雅思阅读"] },
  { id: 10, name: "杨老师", title: "物理/数学金牌 · 港大", handle: "Thomas", status: "3 年 · 2000+ 小时", tags: ["A-Level<sup>6</sup> 物理", "AP<sup>5</sup> 微积分", "DSE<sup>9</sup>"] },
  { id: 11, name: "田老师", title: "物理/数学金牌 · 清华+港大", handle: "Ethan Tian", status: "6 年 · 4000+ 小时", tags: ["A-Level<sup>6</sup>", "AP<sup>5</sup>", "AMC<sup>7</sup>", "IGCSE<sup>13</sup>"] },
  { id: 12, name: "徐老师", title: "物理金牌 · 浙大+港大", handle: "Freya", status: "4 年 · 2000+ 小时", tags: ["A-Level<sup>6</sup> 物理", "全英授课"] },
  { id: 13, name: "单老师", title: "地理金牌老师", handle: "REnee", status: "6 年 · 4000+ 小时", tags: ["A-Level<sup>6</sup> 地理", "IB<sup>12</sup> 地理", "EE"] },
  { id: 14, name: "权老师", title: "数学金牌 · 港中文+新南", handle: "Quan", status: "2 年 · 2000+ 小时", tags: ["A-Level<sup>6</sup> 数学", "IGCSE<sup>13</sup>", "牛剑录取"] },
];

export function TeacherGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
      {TEACHERS.map((teacher) => (
        <TeacherCard key={teacher.id} {...teacher} />
      ))}
    </div>
  );
}
