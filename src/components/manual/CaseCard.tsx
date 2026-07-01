type CaseCardProps = {
  name: string;
  before: string;
  after: string;
  duration: string;
  story: string;
};

export function CaseCard({ name, before, after, duration, story }: CaseCardProps) {
  return (
    <div className="bg-neutral-50 rounded-xl p-6 mb-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <h3 className="text-lg font-bold text-neutral-900">{name}</h3>
        <span className="text-xs text-neutral-400">{duration}</span>
      </div>
      <div className="flex gap-8 mb-4">
        <div>
          <span className="text-xs text-neutral-400 uppercase tracking-wider">学前</span>
          <div className="text-lg font-bold text-neutral-400">{before}</div>
        </div>
        <div className="text-neutral-200 text-2xl">&rarr;</div>
        <div>
          <span className="text-xs text-brand uppercase tracking-wider">学后</span>
          <div className="text-lg font-bold text-brand">{after}</div>
        </div>
      </div>
      <p className="text-sm text-neutral-600 leading-relaxed">{story}</p>
    </div>
  );
}
