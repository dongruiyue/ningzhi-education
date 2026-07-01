type Column<T> = {
  key: keyof T | string;
  header: string;
  render?: (row: T) => React.ReactNode;
};

type ComparisonTableProps<T extends Record<string, unknown>> = {
  columns: Column<T>[];
  data: T[];
  caption?: string;
};

export function ComparisonTable<T extends Record<string, unknown>>({
  columns,
  data,
  caption,
}: ComparisonTableProps<T>) {
  return (
    <div className="overflow-x-auto my-8">
      <table className="w-full text-sm border-collapse">
        {caption && (
          <caption className="text-sm text-neutral-400 mb-3 text-left">{caption}</caption>
        )}
        <thead>
          <tr className="border-b-2 border-neutral-200">
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className="text-left py-3 px-4 font-semibold text-neutral-900 whitespace-nowrap"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
              {columns.map((col) => (
                <td key={String(col.key)} className="py-3 px-4 text-neutral-600 align-top">
                  {col.render ? col.render(row) : String(row[col.key] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
