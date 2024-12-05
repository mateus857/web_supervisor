"use client";

import { createContext, useContext, useState, ReactNode, FC } from "react";

// Define a interface para o contexto
interface SidebarContextProps {
  isSidebarVisible: boolean;
  toggleSidebar: () => void;
}

// Cria o contexto com um valor inicial vazio
const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

// Define as propriedades para o provedor
interface SidebarProviderProps {
  children: ReactNode;
}

// Provedor do contexto
export const SidebarProvider: FC<SidebarProviderProps> = ({ children }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(true);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarVisible, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useSidebar = (): SidebarContextProps => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
