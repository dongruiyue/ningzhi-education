type ChapterSectionProps = {
  title: string;
  id?: string;
  children: React.ReactNode;
};

export function ChapterSection({ title, id, children }: ChapterSectionProps) {
  return (
    <section id={id} className="mb-16">
      <h2 className="text-2xl font-bold text-neutral-900 mb-6 pb-2 border-b border-neutral-100">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
