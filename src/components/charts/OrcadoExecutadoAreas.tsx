import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const data = [
  { area: "Saúde", orcado: 420000000, executado: 310000000 },
  { area: "Educação", orcado: 380000000, executado: 290000000 },
  { area: "Obras", orcado: 120000000, executado: 84000000 },
  { area: "Administração", orcado: 98000000, executado: 75000000 },
  { area: "Segurança", orcado: 42000000, executado: 37000000 },
];

export function OrcadoExecutadoAreas() {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
        Orçado x Executado por Área
      </h2>

      <ResponsiveContainer width="100%" height={360}>
        <BarChart data={data} layout="vertical">
          <XAxis type="number" tickFormatter={(v) => v.toLocaleString("pt-BR")} />
          <YAxis dataKey="area" type="category" width={140} />
          <Tooltip
            formatter={(v) =>
              v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
            }
            contentStyle={{
              backgroundColor: "rgba(0,0,0,0.7)",
              borderRadius: "10px",
              border: "none",
              color: "white",
            }}
          />
          <Legend />
          <Bar dataKey="orcado" fill="#0077CC" name="Orçado" radius={[4, 4, 4, 4]} />
          <Bar dataKey="executado" fill="#00C8E8" name="Executado" radius={[4, 4, 4, 4]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}