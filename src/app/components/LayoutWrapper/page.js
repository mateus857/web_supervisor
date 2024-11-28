"use client";

import { usePathname } from "next/navigation"; // Hook para obter a rota atual
import Sidebar from "../sidebar/page"; // Componente da Sidebar
import Header from "../header/page"; // Componente do Header
import { useSidebar } from "../SidebarContext"; // Contexto para gerenciar o estado da Sidebar

export default function LayoutWrapper({ children }) {
  const pathname = usePathname(); // Obtém a rota atual do navegador

  // Rotas onde o layout padrão (Header e Sidebar) não será aplicado
  const excludedRoutes = ["/login", "/"]; // Adicione outras rotas se necessário
  const isExcludedRoute = excludedRoutes.includes(pathname); // Verifica se a rota atual está na lista de exclusão

  const { isSidebarVisible } = useSidebar(); // Estado de visibilidade da Sidebar (aberta ou oculta)

  return (
    // Wrapper geral do layout
    <div className={`flex flex-col h-screen ${isExcludedRoute ? "" : "pt-[72px]"}`}>
      {/* Header fixo no topo - só será exibido se a rota NÃO estiver na lista de exclusão */}
      {!isExcludedRoute && <Header />}

      {/* Div principal que envolve a Sidebar e o conteúdo principal */}
      <div className="flex-1">
        {/* Sidebar - exibida apenas se a rota NÃO estiver na lista de exclusão */}
        {!isExcludedRoute && isSidebarVisible && (
          <div
            className="w-[17rem] fixed left-0 top-[72px] h-[calc(100vh-72px)]"
            // Define a largura e posição da Sidebar fixa abaixo do Header
          >
            <Sidebar />
          </div>
        )}

        {/* Conteúdo principal */}
        <main
          className={`flex-1 p-0 transition-all duration-300 ${
            !isExcludedRoute && isSidebarVisible ? "ml-[17rem]" : "ml-0"
          }`}
          // Se a Sidebar estiver visível, aplica uma margem à esquerda (`ml-[17rem]`)
          // Caso contrário, ocupa 100% da largura (`ml-0`)
        >
          {children} {/* Renderiza o conteúdo da página atual */}
        </main>
      </div>
    </div>
  );
}
