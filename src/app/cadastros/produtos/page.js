"use client";
import Sidebar from "../../components/sidebar/page";
import Modal from "../../components/modal/cadastro_produtos/page"; 
import CadastroProdutoModal from '../../components/modal/cadastro_produtos/page';
import { Button } from '@mui/material';

import { useState } from "react";
import { DocumentIcon, ArrowDownTrayIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  Input,
  Checkbox,
  Typography,
} from "@material-tailwind/react";

const TABLE_HEAD = [
  { head: "Código", icon: <Checkbox /> },
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
  // Adicione outros registros conforme necessário
];

export default function ProdutosPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 overflow-hidden py-6 px-4 sm:px-6 lg:px-8 mx-auto w-full">
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
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 p-2">
              <div className="w-full md:w-1/4">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                  className="w-full"
                />
              </div>

              <div className="flex space-x-2 w-auto mt-2 md:mt-0">
                <Button className="bg-primary-600 border border-gray-300 hover:bg-primary-700 text-gray text-sm rounded-lg focus:ring-2 focus:ring-primary-500 w-auto h-auto px-2 py-2 flex items-center justify-center" variant="contained" onClick={handleOpenModal}>Novo</Button>
                <CadastroProdutoModal open={modalOpen} onClose={handleCloseModal} />
                <button
                  className="bg-primary-600 border border-gray-300 hover:bg-primary-700 text-gray text-sm rounded-lg focus:ring-2 focus:ring-primary-500 px-2 py-2 flex items-center justify-center"
                >
                  <ArrowDownTrayIcon className="w-5 h-5" />
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

            <Card className="h-full w-full overflow-scroll">
              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map(({ head, icon }) => (
                      <th key={head} className="border-b border-gray-300 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 p-3">
                        <div className="flex items-center gap-1">
                          {icon}
                          <Typography color="blue-gray" variant="small" className="!font-bold">
                            {head}
                          </Typography>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map((row, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast ? "p-2 dark:bg-gray-800 dark:text-gray-200" : "p-2 border-b border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200";

                    return (
                      <tr key={row.codigo}>
                        {Object.values(row).map((value, i) => (
                          <td key={i} className={classes}>{value}</td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Card>
          </div>
        </div>
      </div>

      {modalOpen && (
        <Modal onClose={handleCloseModal}>
          <div>
            <h2 className="text-xl font-bold">Novo Produto</h2>
            <form>
              <div>
                <label>Código...</label>
                {/* Campos adicionais de formulário aqui */}
              </div>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
}
