const areas = [
  { area: "Saúde", pct: 74 },
  { area: "Educação", pct: 82 },
  { area: "Obras", pct: 68 },
  { area: "Administração", pct: 76 },
  { area: "Segurança", pct: 88 },
];

export function ExecucaoTermometros() {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow mt-10">
      <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
        Execução do Orçamento — Termômetros
      </h2>

      <div className="space-y-4">
        {areas.map((a) => (
          <div key={a.area}>
            <div className="flex justify-between text-sm mb-1 text-slate-700 dark:text-slate-300">
              <span>{a.area}</span>
              <span>{a.pct}%</span>
            </div>

            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
              <div
                className="h-3 rounded-full transition-all"
                style={{
                  width: `${a.pct}%`,
                  background: "linear-gradient(90deg, #0077CC, #00C8E8)",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}