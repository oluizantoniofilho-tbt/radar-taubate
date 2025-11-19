// src/services/transparencyService.ts

// [Sênior Tip]: Esta Service Layer é o futuro ponto de integração com o Firebase (Firestore).

/**
 * Interface que define a estrutura de dados de uma despesa.
 * Tipagem rigorosa essencial para a segurança do código.
 */
export interface Expense {
  id: string;
  description: string;
  category: 'Saúde' | 'Educação' | 'Administração' | 'Infraestrutura' | string;
  value: number; // Valor da despesa
  date: string; // Formato 'YYYY-MM-DD' para fácil ordenação
  supplierName: string;
}

/**
 * Simula a busca das principais despesas/gastos.
 * @returns {Promise<Expense[]>} Uma promessa que resolve para um array de despesas.
 */
export async function getTopExpenses(limit: number = 5): Promise<Expense[]> {
  // [Sênior Tip]: Simulação de latência de rede (800ms) para testar estados de loading na UI.
  await new Promise(resolve => setTimeout(resolve, 800)); 

  // Dados Mock (simulados) - Substitua futuramente pela lógica de busca do Firestore.
  const mockExpenses: Expense[] = [
    {
      id: 'exp001',
      description: 'Aquisição de medicamentos essenciais',
      category: 'Saúde',
      value: 150000.75,
      date: '2025-11-15',
      supplierName: 'PharmaTech Fornecedores',
    },
    {
      id: 'exp002',
      description: 'Construção de nova escola municipal',
      category: 'Educação',
      value: 980000.00,
      date: '2025-10-28',
      supplierName: 'Construtora Forte LTDA',
    },
    {
      id: 'exp003',
      description: 'Manutenção de vias públicas (asfalto)',
      category: 'Infraestrutura',
      value: 350000.50,
      date: '2025-09-01',
      supplierName: 'Asfalto Já',
    },
    {
      id: 'exp004',
      description: 'Serviços de consultoria jurídica',
      category: 'Administração',
      value: 75000.00,
      date: '2025-08-20',
      supplierName: 'Jurídico S.A.',
    },
    {
      id: 'exp005',
      description: 'Compra de equipamentos para hospital',
      category: 'Saúde',
      value: 420000.20,
      date: '2025-07-10',
      supplierName: 'Medical Center',
    },
  ];

  // Limita o retorno dos dados simulados
  return mockExpenses.slice(0, limit);
}

/**
 * No futuro, adicione aqui funções para integração com Firebase:
 * export async function getExpensesFromFirestore() { ... }
 */