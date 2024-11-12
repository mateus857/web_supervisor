"use client";

import Sidebar from "../../components/sidebar/page";
import { DocumentIcon } from "@heroicons/react/24/solid";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  Input,
  Checkbox,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";

const TABLE_HEAD = [
  {
    head: "Código",
    icon: <Checkbox />,

  },
  { head: "Emp" },
  { head: "Descrição" },
  { head: "Descrição Reduzida" },
  { head: "Diretiva" },
  { head: "Bal." },
  { head: "Código Barras" },
  { head: "Código NCM" },
  { head: "Vasilh." },
  { head: "CST" },
  { head: "CST Pis" },
  { head: "Pis" },
  { head: "CST Cofins" },
  { head: "Cofins" },
  { head: "Cest" },
  { head: "CTS" },
  { head: "Ativo" },
  { head: "Pr.Venda" },
  { head: "Pr.Venda 1" },
  { head: "Pr.Venda 2" },
  { head: "Pr.Venda 3" },
  { head: "Pr.Venda 4" },
  { head: "Pr.Venda 5" },
  { head: "Oferta" },
  { head: "Pr.Normal" },
  { head: "Cod Tiaa" },
];

const TABLE_ROWS = [
  {
    codigo: "001",
    emp: "Emp1",
    descricao: "Produto A",
    descricaoReduzida: "Prod A",
    diretiva: "D1",
    bal: "Sim",
    codigoBarras: "1234567890123",
    codigoNCM: "10010010",
    vasilh: "Sim",
    cst: "010",
    cstPis: "050",
    pis: "1.65%",
    cstCofins: "060",
    cofins: "7.60%",
    cest: "1234567",
    cts: "CTS1",
    ativo: "Sim",
    prVenda: "$10,00",
    prVenda1: "$9,50",
    prVenda2: "$9,00",
    prVenda3: "$8,50",
    prVenda4: "$8,00",
    prVenda5: "$7,50",
    oferta: "Não",
    prNormal: "$10,00",
    codTiaa: "TIA123",
  },
  {
    codigo: "002",
    emp: "Emp2",
    descricao: "Produto B",
    descricaoReduzida: "Prod B",
    diretiva: "D2",
    bal: "Não",
    codigoBarras: "9876543210987",
    codigoNCM: "20020020",
    vasilh: "Não",
    cst: "020",
    cstPis: "040",
    pis: "2.00%",
    cstCofins: "050",
    cofins: "8.00%",
    cest: "7654321",
    cts: "CTS2",
    ativo: "Não",
    prVenda: "$20,00",
    prVenda1: "$19,50",
    prVenda2: "$19,00",
    prVenda3: "$18,50",
    prVenda4: "$18,00",
    prVenda5: "$17,50",
    oferta: "Sim",
    prNormal: "$20,00",
    codTiaa: "TIA456",
  },
];


export default function ProdutosPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      {/* <div className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5"> */}

      <div className="flex-1 overflow-hidden py-6 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <header className="px-4 mx-auto max-w-screen-2xl lg:px-12 mb-8">
          <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <main className="p-4">
              <h1 className="text-2xl font-bold">Cadastro de Produtos</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Gerencie e visualize os produtos cadastrados no sistema.
              </p>
            </main>
          </div>
        </header>

        <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
          <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            {/* <CardHeader floated={false} shadow={false} className="mb-4 rounded-none p-0 sticky top-0 z-10 bg-white dark:bg-gray-800"> */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 p-2">
              {/* Input de Search - Ocupando o máximo de espaço disponível */}
              <div className="w-full md:w-1/4">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                  className="w-full"
                />
              </div>

              {/* Botões de Ação - Mantendo tamanho adequado */}
              <div className="flex flex-row space-x-2 w-auto mt-2 md:mt-0">
                <button
                  type="button"
                  className="bg-primary-600 border border-gray-300 hover:bg-primary-700 text-gray text-sm rounded-lg focus:ring-2 focus:ring-primary-500 w-auto h-auto px-2 py-2 flex items-center justify-center"
                >
                  <DocumentIcon className="w-5 h-5" />
                  {/* Esconder o texto em mobile */}
                  <span className="hidden md:inline ml-2">Novo</span>
                </button>
                <button
                  className="bg-primary-600 border border-gray-300 hover:bg-primary-700 text-gray text-sm rounded-lg focus:ring-2 focus:ring-primary-500 w-auto h-auto px-2 py-2 flex items-center justify-center"
                >
                  <ArrowDownTrayIcon className="w-5 h-5" />
                  {/* Esconder o texto em mobile */}
                  <span className="hidden md:inline ml-2">Ordenar</span>
                </button>
                <button
                  id="filterDropdownButton"
                  className="bg-primary-600 border border-gray-300 hover:bg-primary-700 text-gray text-sm rounded-lg focus:ring-2 focus:ring-primary-500 w-auto h-auto px-2 py-2 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {/* Esconder o texto em mobile */}
                  <span className="hidden md:inline ml-2">Filtrar</span>
                </button>
              </div>
            </div>
            {/* </CardHeader> */}
            <Card className="h-full w-full overflow-scroll">

              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map(({ head, icon }) => (
                      <th key={head} className="border-b border-gray-300 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 p-3 ">

                        <div className="flex items-center gap-1">
                          {icon}
                          <Typography
                            color="blue-gray"
                            variant="small"
                            className="!font-bold"
                          >
                            {head}
                          </Typography>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map(({ codigo, emp, descricao, descricaoReduzida, diretiva, bal, codigoBarras, codigoNCM, vasilh, cst, cstPis, pis, cstCofins, cofins, cest, cts, ativo, prVenda, prVenda1, prVenda2, prVenda3, prVenda4, prVenda5, oferta, prNormal, codTiaa }, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast ? "p-2 dark:bg-gray-800 dark:text-gray-200" : "p-2 border-b border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200";

                    return (
                      <tr key={codigo}>
                        <td className={classes}>
                          <div className="flex items-center gap-2">
                            <Checkbox />
                            <Typography variant="small" className="font-bold dark:text-gray-200">
                              {codigo}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>{emp}</td>
                        <td className={classes}>{descricao}</td>
                        <td className={classes}>{descricaoReduzida}</td>
                        <td className={classes}>{diretiva}</td>
                        <td className={classes}>{bal}</td>
                        <td className={classes}>{codigoBarras}</td>
                        <td className={classes}>{codigoNCM}</td>
                        <td className={classes}>{vasilh}</td>
                        <td className={classes}>{cst}</td>
                        <td className={classes}>{cstPis}</td>
                        <td className={classes}>{pis}</td>
                        <td className={classes}>{cstCofins}</td>
                        <td className={classes}>{cofins}</td>
                        <td className={classes}>{cest}</td>
                        <td className={classes}>{cts}</td>
                        <td className={classes}>{ativo}</td>
                        <td className={classes}>{prVenda}</td>
                        <td className={classes}>{prVenda1}</td>
                        <td className={classes}>{prVenda2}</td>
                        <td className={classes}>{prVenda3}</td>
                        <td className={classes}>{prVenda4}</td>
                        <td className={classes}>{prVenda5}</td>
                        <td className={classes}>{oferta}</td>
                        <td className={classes}>{prNormal}</td>
                        <td className={classes}>{codTiaa}</td>
                      </tr>
                    );
                  }
                  )}
                </tbody>

              </table>
            </Card>
          </div>
        </div>
      </div>
    </div>

  );
}