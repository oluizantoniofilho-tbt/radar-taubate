
import Dashboard from "../components/Dashboard";

async function getApiData() {
  // Esta função agora busca os dados da API.
  // A implementação real pode variar (fetch, etc.)
  // Por enquanto, vamos manter a estrutura, mas sem a lógica de CSV.
  return {
    ok: true,
    totais: {
      receitas: 50000000,
      despesas: 45000000,
      saldo: 5000000,
    },
    fontes: {
      receitas: [], // Dados de exemplo
      despesas: [], // Dados de exemplo
    },
  };
}

export default async function Home() {
  const data = await getApiData();

  return (
    <main className="max-w-7xl mx-auto p-6 space-y-8">
      <Dashboard data={data} />
    </main>
  );
}
