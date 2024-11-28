"use client";

import { useState } from "react";
import { Button, TextField, Grid, Dialog, DialogTitle, DialogContent, DialogActions, InputAdornment } from "@mui/material";
import { Settings, AddCircle } from "@mui/icons-material";
import Sidebar from "../../../components/sidebar/page";
import Header from "../../../components/header/page";


const CONFIGS = [
    {
        id: 1,
        impressora: "Impressora A",
        descricao_impressora: "Descrição A",
        porta_impressora: "COM1",
        velocidade: "9600",
    },
    {
        id: 2,
        impressora: "Impressora B",
        descricao_impressora: "Descrição B",
        porta_impressora: "COM2",
        velocidade: "115200",
    },
];

export default function ConfiguracaoPage() {
    const [configs, setConfigs] = useState(CONFIGS);
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        impressora: "",
        descricao_impressora: "",
        porta_impressora: "",
        velocidade: "",
        paridade: "",
        sbits: "",
        dbits: "",
        timeout: "",
        scanner: "",
        porta_scanner: "",
        teclado: "",
        descricao_teclado: "",
        balanca: "",
        porta_balanca: "",
        tela_abertura: "",
        descricao_telaAB: "",
        tela_descanso: "",
        descricao_telaD: "",
        tela_consulta: "",
        descricao_telaC: "",
        cod_preco: "",
        status_gaveta: "",
        avanco: "",
    });

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setFormData({
            impressora: "",
            descricao_impressora: "",
            porta_impressora: "",
            velocidade: "",
            paridade: "",
            sbits: "",
            dbits: "",
            timeout: "",
            scanner: "",
            porta_scanner: "",
            teclado: "",
            descricao_teclado: "",
            balanca: "",
            porta_balanca: "",
            tela_abertura: "",
            descricao_telaAB: "",
            tela_descanso: "",
            descricao_telaD: "",
            tela_consulta: "",
            descricao_telaC: "",
            cod_preco: "",
            status_gaveta: "",
            avanco: "",
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        setConfigs([...configs, { id: configs.length + 1, ...formData }]);
        handleClose();
    };

    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="flex-1 overflow-hidden py-6 px-2 sm:px-3 lg:px-4 mx-auto w-full">
            <header className="px-4 mx-auto max-w-screen-2xl lg:px-12 mb-8">
            <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <main className="p-4">
              <h1 className="text-2xl font-bold">Perfil PDV</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Gerencie e visualize os perfis de PDVs cadastrados no sistema.
              </p>
            </main>
          </div>
        </header>

        <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
          <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 p-2">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Perfis Cadastrados</h2>
                        <Button variant="contained" startIcon={<AddCircle />} onClick={handleOpen}>
                            Novo
                        </Button>
                    </div>
                    <ul className="space-y-4">
                        {configs.map((config) => (
                            <li key={config.id} className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                                <p>
                                    <strong>Impressora:</strong> {config.impressora}
                                </p>
                                <p>
                                    <strong>Descrição:</strong> {config.descricao_impressora}
                                </p>
                                <p>
                                    <strong>Porta:</strong> {config.porta_impressora}
                                </p>
                                <p>
                                    <strong>Velocidade:</strong> {config.velocidade}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
                    <DialogTitle>Nova Configuração</DialogTitle>
                    <DialogContent>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Impressora"
                                    name="impressora"
                                    value={formData.impressora}
                                    onChange={handleChange}
                                    fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Settings />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Descrição Impressora"
                                    name="descricao_impressora"
                                    value={formData.descricao_impressora}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            {/* Adicione os demais campos seguindo o mesmo padrão */}
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="secondary">
                            Cancelar
                        </Button>
                        <Button onClick={handleSubmit} variant="contained">
                            Salvar
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
        </div>

    );
}
