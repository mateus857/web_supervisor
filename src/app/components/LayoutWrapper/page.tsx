"use client";

import { usePathname } from "next/navigation";
import Sidebar from "../sidebar/page";
import Header from "../header/page";
import { useSidebar } from "../SidebarContext";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();

  // Rotas onde o layout padrão não será aplicado
  const excludedRoutes = ["/login", "/"]; // Adicione outras rotas, se necessário
  const isExcludedRoute = excludedRoutes.includes(pathname);

  const { isSidebarVisible } = useSidebar(); // Estado da sidebar para ajustar o layout

  return (
    <>
      {/* Verifica se a rota está excluída */}
      {isExcludedRoute ? (
        // Caso seja uma rota excluída, renderiza apenas o conteúdo principal sem header e sidebar
        <main className="flex-1 p-0">{children}</main>
      ) : (
        // Caso contrário, renderiza o layout completo
        <div className="flex flex-col h-screen">
          {/* Header fixo no topo */}
          <Header />
          <div className="flex-1">
            {/* Sidebar visível apenas para rotas não excluídas */}
            {isSidebarVisible && (
              <div className="hidden md:block">
                <Sidebar />
              </div>
            )}
            {/* Conteúdo principal */}
            <main
              className={`flex-1 p-0 transition-all duration-300 ${
                isSidebarVisible ? "md:ml-[17rem]" : "ml-0"
              }`}
            >
              {children}
            </main>
          </div>
        </div>
      )}
    </>
  );
}