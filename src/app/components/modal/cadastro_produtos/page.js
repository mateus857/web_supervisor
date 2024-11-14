"use client";
// src/app/components/modal/cadastro_produtos/page.js
import { useState } from "react";
import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

export default function CadastroProdutoModal({ open, onClose }) {
  const [formData, setFormData] = useState({
    codigo: '',
    descricao: '',
    precoVenda: '',
    quantidade: '',
    categoria: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    // Lógica para salvar os dados do produto
    console.log("Produto salvo:", formData);
    onClose();
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      fullWidth 
      maxWidth="sm"
      PaperProps={{
        className: "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200"
      }}
    >
      <DialogTitle className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200">
        Novo Produto
      </DialogTitle>
      <DialogContent className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200">
        <TextField
          label="Código"
          name="codigo"
          value={formData.codigo}
          onChange={handleInputChange}
          fullWidth
          margin="dense"
          InputLabelProps={{
            className: "text-gray-700 dark:text-gray-300"
          }}
          InputProps={{
            className: "bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
          }}
        />
        <TextField
          label="Descrição"
          name="descricao"
          value={formData.descricao}
          onChange={handleInputChange}
          fullWidth
          margin="dense"
          InputLabelProps={{
            className: "text-gray-700 dark:text-gray-300"
          }}
          InputProps={{
            className: "bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
          }}
        />
        <TextField
          label="Preço de Venda"
          name="precoVenda"
          value={formData.precoVenda}
          onChange={handleInputChange}
          fullWidth
          margin="dense"
          InputLabelProps={{
            className: "text-gray-700 dark:text-gray-300"
          }}
          InputProps={{
            className: "bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
          }}
        />
        <TextField
          label="Quantidade"
          name="quantidade"
          value={formData.quantidade}
          onChange={handleInputChange}
          fullWidth
          margin="dense"
          InputLabelProps={{
            className: "text-gray-700 dark:text-gray-300"
          }}
          InputProps={{
            className: "bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
          }}
        />
        <TextField
          label="Categoria"
          name="categoria"
          value={formData.categoria}
          onChange={handleInputChange}
          fullWidth
          margin="dense"
          InputLabelProps={{
            className: "text-gray-700 dark:text-gray-300"
          }}
          InputProps={{
            className: "bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
          }}
        />
      </DialogContent>
      <DialogActions className="bg-white dark:bg-gray-800">
        <Button onClick={onClose} color="secondary" className="text-gray-800 dark:text-gray-300">Cancelar</Button>
        <Button onClick={handleSave} variant="contained" color="primary">Salvar</Button>
      </DialogActions>
    </Dialog>
  );
}
