
"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { FiHome, FiDollarSign, FiBarChart2, FiTrendingUp } from 'react-icons/fi';

const data = {
  receitas: 232000000,
  despesas: 198000000,
  convenios: 42,
  execucao: 85
};

const receitasMensais = [
  { mes: "Jan", receita: 18000000, despesa: 14500000 },
  { mes: "Fev", receita: 21000000, despesa: 17000000 },
  { mes: "Mar", receita: 19000000, despesa: 16000000 }
];

const despesasPorCategoria = [
  { name: 'Saúde', value: 45 },
  { name: 'Educação', value: 25 },
  { name: 'Transporte', value: 15 },
  { name: 'Outros', value: 15 },
];

const COLORS = ['#1E40AF', '#3B82F6', '#93C5FD', '#BFDBFE'];

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-blue-800">Radar Taubaté</h1>
          <p className="text-sm text-gray-500">Painel de Finanças Municipais 2025</p>
        </div>
        <nav className="mt-6">
          <a href="#" className="flex items-center px-6 py-3 text-gray-700 bg-gray-200">
            <FiHome className="w-6 h-6" />
            <span className="mx-3">Início</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-200">
            <FiDollarSign className="w-6 h-6" />
            <span className="mx-3">Receitas</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-200">
            <FiBarChart2 className="w-6 h-6" />
            <span className="mx-3">Despesas</span>
          </a>
          <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-200">
            <FiTrendingUp className="w-6 h-6" />
            <span className="mx-3">Indicadores</span>
          </a>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-700">Total de Receitas</h3>
            <p className="mt-2 text-3xl font-bold text-blue-800">R$ {data.receitas.toLocaleString('pt-BR')}</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-700">Total de Despesas</h3>
            <p className="mt-2 text-3xl font-bold text-blue-800">R$ {data.despesas.toLocaleString('pt-BR')}</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-700">Convênios Ativos</h3>
            <p className="mt-2 text-3xl font-bold text-blue-800">{data.convenios}</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-700">Execução Orçamentária</h3>
            <p className="mt-2 text-3xl font-bold text-blue-800">{data.execucao}%</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-700">Receitas vs. Despesas</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={receitasMensais}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="receita" fill="#1E40AF" name="Receita" />
                <Bar dataKey="despesa" fill="#93C5FD" name="Despesa" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-700">Distribuição de Despesas</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={despesasPorCategoria} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                  {despesasPorCategoria.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
}
