import React from 'react';
import Link from 'next/link';

interface NavigationCardProps {
    title: string;
    description: string;
    href: string;
    icon: React.ReactNode;
    // Classe de cor para texto e borda (ex: "text-blue-600 border-blue-600 hover:bg-blue-50")
    color: string; 
}

/**
 * Componente padronizado para links de navegação em Card.
 * Este componente garante a consistência visual em toda a aplicação (Home, Planejamento, etc.).
 * Adota um layout robusto com sombra e efeito de hover.
 */
export const NavigationCard: React.FC<NavigationCardProps> = ({ title, description, href, icon, color }) => (
    <Link href={href} passHref>
        <div className={`p-6 rounded-xl border-2 ${color} transition-all duration-300 transform hover:scale-[1.03] cursor-pointer 
                        bg-white dark:bg-gray-800 shadow-md hover:shadow-lg flex flex-col justify-between h-full`}>
            
            <div className={`flex items-center mb-3`}>
                {/* O fundo do ícone usa a classe de cor, substituindo 'text-' por 'bg-' e adicionando opacidade */}
                <div className={`mr-3 p-3 rounded-full bg-opacity-10 ${color.split(' ')[0].replace('text-', 'bg-')}`}>
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
            </div>
            
            <p className="text-md text-gray-600 dark:text-gray-400">{description}</p>
        </div>
    </Link>
);