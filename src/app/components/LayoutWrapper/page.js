"use client";

import { usePathname } from "next/navigation";
import Sidebar from "../sidebar/page";
import Header from "../header/page";
import { useSidebar } from "../SidebarContext";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // Rotas onde o layout padrão não será aplicado
  const excludedRoutes = ["/login", "/"]; // Adicione outras rotas, se necessário
  const isExcludedRoute = excludedRoutes.includes(pathname);
 
  const { isSidebarVisible } = useSidebar(); // Agora o estado da sidebar é usado para ajustar o layout

  return (

        <div className="flex flex-col h-screen">
          {/* Header fixo no topo */}
          {/* {!isExcludedRoute && <Header />} */}
          <div className="flex-1">
            {/* Sidebar */}
            {!isExcludedRoute && <Sidebar />}
            {/* Conteúdo principal */}
           {/* Conteúdo principal */}
           <main
    className={`flex-1 p-0 transition-all duration-300 ${
      isSidebarVisible ? "ml-[17rem]" : "ml-0"
    }`}
  >
    {children}
  </main>
          </div>
        // </div>
  );
}