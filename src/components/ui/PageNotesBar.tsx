"use client";

import { usePathname } from "next/navigation";

const NOTES: Record<string, Array<{ num: number; name: string; owner: string }>> = {
  "/": [
    { num: 1, name: "IELTS", owner: "British Council、IDP Education 及 Cambridge English Language Assessment" },
    { num: 2, name: "KET", owner: "Cambridge English Language Assessment" },
    { num: 3, name: "PET", owner: "Cambridge English Language Assessment" },
    { num: 4, name: "Unlock", owner: "Cambridge University Press" },
    { num: 5, name: "Pathways", owner: "National Geographic Learning" },
    { num: 6, name: "Power Up", owner: "Cambridge University Press" },
    { num: 7, name: "Reading Explorer", owner: "National Geographic Learning" },
    { num: 8, name: "Great Writing", owner: "National Geographic Learning" },
    { num: 9, name: "雅思", owner: "British Council、IDP Education 及 Cambridge English Language Assessment" },
  ],
  "/k12": [
    { num: 1, name: "Unlock", owner: "Cambridge University Press" },
    { num: 2, name: "Pathways", owner: "National Geographic Learning" },
    { num: 3, name: "Power Up", owner: "Cambridge University Press" },
    { num: 4, name: "Reading Explorer", owner: "National Geographic Learning" },
    { num: 5, name: "Great Writing", owner: "National Geographic Learning" },
    { num: 6, name: "KET", owner: "Cambridge English Language Assessment" },
    { num: 7, name: "PET", owner: "Cambridge English Language Assessment" },
    { num: 8, name: "FCE", owner: "Cambridge English Language Assessment" },
  ],
  "/study-abroad": [
    { num: 1, name: "雅思", owner: "British Council、IDP Education 及 Cambridge English Language Assessment" },
    { num: 2, name: "IELTS", owner: "British Council、IDP Education 及 Cambridge English Language Assessment" },
  ],
  "/about": [
    { num: 1, name: "雅思", owner: "British Council、IDP Education 及 Cambridge English Language Assessment" },
  ],
  "/teachers": [
    { num: 1, name: "GRE", owner: "Educational Testing Service (ETS)" },
    { num: 2, name: "SSAT", owner: "The Enrollment Management Association" },
    { num: 3, name: "SAT", owner: "College Board" },
    { num: 4, name: "托福", owner: "Educational Testing Service (ETS)" },
    { num: 5, name: "AP", owner: "College Board" },
    { num: 6, name: "A-Level", owner: "Cambridge International Education" },
    { num: 7, name: "AMC", owner: "Mathematical Association of America" },
    { num: 8, name: "NEC", owner: "Council for Economic Education" },
    { num: 9, name: "DSE", owner: "香港考试及评核局" },
    { num: 10, name: "雅思", owner: "British Council、IDP Education 及 Cambridge English Language Assessment" },
    { num: 11, name: "Unlock", owner: "Cambridge University Press" },
    { num: 12, name: "IB", owner: "International Baccalaureate Organization" },
    { num: 13, name: "IGCSE", owner: "Cambridge International Education" },
  ],
  "/cases": [
    { num: 1, name: "雅思", owner: "British Council、IDP Education 及 Cambridge English Language Assessment" },
    { num: 2, name: "KET", owner: "Cambridge English Language Assessment" },
    { num: 3, name: "PET", owner: "Cambridge English Language Assessment" },
    { num: 4, name: "Unlock", owner: "Cambridge University Press" },
    { num: 5, name: "Reading Explorer", owner: "National Geographic Learning" },
    { num: 6, name: "Great Writing", owner: "National Geographic Learning" },
    { num: 7, name: "Pathways", owner: "National Geographic Learning" },
  ],
  "/methodology": [
    { num: 1, name: "雅思", owner: "British Council、IDP Education 及 Cambridge English Language Assessment" },
  ],
  "/adult": [
    { num: 1, name: "雅思", owner: "British Council、IDP Education 及 Cambridge English Language Assessment" },
    { num: 2, name: "IELTS", owner: "British Council、IDP Education 及 Cambridge English Language Assessment" },
    { num: 3, name: "Interchange", owner: "Cambridge University Press" },
  ],
};

export function PageNotesBar() {
  const pathname = usePathname();
  const items = NOTES[pathname] || NOTES["/"];
  if (!items || items.length === 0) return null;

  return (
    <div className="bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-neutral-400 leading-relaxed space-y-1">
        {items.map(({ num, name, owner }) => (
          <p key={num}>
            <sup className="text-neutral-400">{num}</sup> {name} — {owner}
          </p>
        ))}
      </div>
    </div>
  );
}
