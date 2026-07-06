"use client";

export type NoteItem = {
  num: number;
  name: string;
  owner: string;
};

export function PageNotes({ items }: { items: NoteItem[] }) {
  if (items.length === 0) return null;
  return (
    <div className="max-w-3xl mx-auto mt-16 pt-6 border-t border-neutral-200 text-xs text-neutral-400 leading-relaxed space-y-1 px-6">
      {items.map(({ num, name, owner }) => (
        <p key={num}>
          <sup className="text-neutral-400">{num}</sup> {name} — {owner}
        </p>
      ))}
    </div>
  );
}
