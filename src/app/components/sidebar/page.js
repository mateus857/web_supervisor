"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import ThemeBtn from "../../components/theme_btn/page";

import {
  IconButton,
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Drawer,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  HomeIcon,
  UserGroupIcon,
  UsersIcon,
  DocumentIcon,
  CogIcon,
  ExclamationCircleIcon,
  LogoutIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  const [open, setOpen] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <ThemeBtn toggleTheme={toggleTheme} theme={theme} />

      <div className="md:hidden">
        <IconButton variant="text" size="lg" onClick={openDrawer}>
          {isDrawerOpen ? (
            <XMarkIcon className="h-8 w-8 stroke-2" />
          ) : (
            <Bars3Icon className="h-8 w-8 stroke-2" />
          )}
        </IconButton>
      </div>


      <Drawer open={isDrawerOpen} onClose={closeDrawer} className="md:hidden">
        <div className={`h-full w-[17rem] p-4 shadow-xl ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
          <SidebarContent handleOpen={handleOpen} open={open} toggleTheme={toggleTheme} theme={theme} />
        </div>
      </Drawer>

      <div className={`hidden md:block w-[17rem] h-screen fixed top-0 left-0 shadow-xl p-4 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
        <SidebarContent handleOpen={handleOpen} open={open} toggleTheme={toggleTheme} theme={theme} />
      </div>

      <div className={`pt-4 pl-0 md:pl-[17rem] transition-all duration-300`}>
        {/* Conteúdo da página */}
      </div>
    </>
  );
}

function SidebarContent({ handleOpen, open, toggleTheme, theme }) {
  return (
    <>
      <div className="flex items-center mb-2 p-2 justify-left space-x-3">
        <img src="/images/logo.jpg" alt="Logo" className="w-12 h-auto" />
        <Typography variant="h5" color={theme === "dark" ? "white" : "gray"}>
          Supervisor
        </Typography>
      </div>


      <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
            />
          }
        >
          <Link href="/home" passHref>
            <ListItem className={`${theme === "dark" ? "text-white hover:bg-gray-700" : "text-gray-800 hover:bg-gray-200"}`}>
              <ListItemPrefix>
                <HomeIcon className="h-5 w-5" />
              </ListItemPrefix>
              Home
              <ListItemSuffix>
                <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
              </ListItemSuffix>
            </ListItem>
          </Link>
          <ListItem className={`p-0 ${theme === "dark" ? "text-white" : "text-gray-800"}`} selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className={`border-b-0 p-3 ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}>
              <ListItemPrefix>
                <DocumentIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color={theme === "dark" ? "white" : "blue-gray"} className="mr-auto font-normal">
                Cadastros
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Link href="/cadastros/produtos" passHref>
                <ListItem className={`${theme === "dark" ? "text-white hover:bg-gray-700" : "text-gray-800 hover:bg-gray-200"}`}>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Produtos
                </ListItem>
              </Link>
              <Link href="/cadastros/entidades" passHref>
                <ListItem className={`${theme === "dark" ? "text-white hover:bg-gray-700" : "text-gray-800 hover:bg-gray-200"}`}>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Entidades
                </ListItem>
              </Link>
              <Link href="/cadastros/grupo_usuarios" passHref>
                <ListItem className={`${theme === "dark" ? "text-white hover:bg-gray-700" : "text-gray-800 hover:bg-gray-200"}`}>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Grupo Usuários
                </ListItem>
              </Link>
              <Link href="/cadastros/usuarios" passHref>
                <ListItem className={`${theme === "dark" ? "text-white hover:bg-gray-700" : "text-gray-800 hover:bg-gray-200"}`}>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Usuários
                </ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>

        {/* Outro accordion e itens */}
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
            />
          }
        >
          <Link href="/processos" passHref>
            <ListItem className={`${theme === "dark" ? "text-white hover:bg-gray-700" : "text-gray-800 hover:bg-gray-200"}`}>
              <ListItemPrefix>
                <ExclamationCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Processos
            </ListItem>
          </Link>
          <Link href="/relatorios" passHref>
            <ListItem className={`${theme === "dark" ? "text-white hover:bg-gray-700" : "text-gray-800 hover:bg-gray-200"}`}>
              <ListItemPrefix>
                <DocumentIcon className="h-5 w-5" />
              </ListItemPrefix>
              Relatórios
            </ListItem>
          </Link>
          <ListItem className={`p-0 ${theme === "dark" ? "text-white" : "text-gray-800"}`} selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className={`border-b-0 p-3 ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}>
              <ListItemPrefix>
                <CogIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color={theme === "dark" ? "white" : "blue-gray"} className="mr-auto font-normal">
                Parâmetros
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Link href="/parametros/config_geral" passHref>
                <ListItem className={`${theme === "dark" ? "text-white hover:bg-gray-700" : "text-gray-800 hover:bg-gray-200"}`}>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Configuração Geral
                </ListItem>
              </Link>
              <ListItem className={`${theme === "dark" ? "text-white hover:bg-gray-700" : "text-gray-800 hover:bg-gray-200"}`}>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Configuração Empresa
              </ListItem>
              <ListItem className={`${theme === "dark" ? "text-white hover:bg-gray-700" : "text-gray-800 hover:bg-gray-200"}`}>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Processa Excepcionais
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>

        <Link href="/login" passHref>
          <ListItem className={`${theme === "dark" ? "text-white hover:bg-gray-700" : "text-gray-800 hover:bg-gray-200"}`}>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Logout
          </ListItem>
        </Link>
      </List>

      {/* <div className="flex justify-center mb-4">
  <IconButton onClick={toggleTheme} variant="text" size="lg">
    {theme === "light" ? (
      <MoonIcon className="h-5 w-5 text-black" /> // Ícone escuro para modo claro
    ) : (
      <SunIcon className="h-5 w-5 text-white" /> // Ícone claro para modo escuro
    )}
  </IconButton>
</div> */}

    </>
  );
}
