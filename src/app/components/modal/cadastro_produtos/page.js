"use client";
// src/app/components/modal/cadastro_produtos/page.js
import { useState } from "react";
import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Grid } from '@mui/material';

export default function CadastroProdutoModal({ open, onClose }) {
  const [formData, setFormData] = useState({
    codigo: '',
    emp: '',
    descricao: '',
    descricaoReduzida: '',
    diretiva: '',
    bal: '',
    codigoBarras: '',
    codigoNCM: '',
    vasilh: '',
    cst: '',
    cstPis: '',
    pis: '',
    cstCofins: '',
    cofins: '',
    cest: '',
    cts: '',
    ativo: '',
    prVenda: '',
    prVenda1: '',
    prVenda2: '',
    prVenda3: '',
    prVenda4: '',
    prVenda5: '',
    oferta: '',
    prNormal: '',
    codTiaa: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    console.log("Produto salvo:", formData);
    onClose();
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      fullWidth 
      maxWidth="md"
      PaperProps={{
        className: "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded-lg"
      }}
    >
      <DialogTitle className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 text-center font-bold">
        Novo Produto
      </DialogTitle>
      <DialogContent className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Código"
              name="codigo"
              value={formData.codigo}
              onChange={handleInputChange}
              fullWidth
              margin="dense"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Emp"
              name="emp"
              value={formData.emp}
              onChange={handleInputChange}
              fullWidth
              margin="dense"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Descrição"
              name="descricao"
              value={formData.descricao}
              onChange={handleInputChange}
              fullWidth
              margin="dense"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Descrição Reduzida"
              name="descricaoReduzida"
              value={formData.descricaoReduzida}
              onChange={handleInputChange}
              fullWidth
              margin="dense"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Diretiva"
              name="diretiva"
              value={formData.diretiva}
              onChange={handleInputChange}
              fullWidth
              margin="dense"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Bal."
              name="bal"
              value={formData.bal}
              onChange={handleInputChange}
              fullWidth
              margin="dense"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Código Barras"
              name="codigoBarras"
              value={formData.codigoBarras}
              onChange={handleInputChange}
              fullWidth
              margin="dense"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Código NCM"
              name="codigoNCM"
              value={formData.codigoNCM}
              onChange={handleInputChange}
              fullWidth
              margin="dense"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Vasilh."
              name="vasilh"
              value={formData.vasilh}
              onChange={handleInputChange}
              fullWidth
              margin="dense"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="CST"
              name="cst"
              value={formData.cst}
              onChange={handleInputChange}
              fullWidth
              margin="dense"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="CST Pis"
              name="cstPis"
              value={formData.cstPis}
              onChange={handleInputChange}
              fullWidth
              margin="dense"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Pis"
              name="pis"
              value={formData.pis}
              onChange={handleInputChange}
              fullWidth
              margin="dense"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="CST Cofins"
              name="cstCofins"
              value={formData.cstCofins}
              onChange={handleInputChange}
              fullWidth
              margin="dense"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Cofins"
              name="cofins"
              value={formData.cofins}
              onChange={handleInputChange}
              fullWidth
              margin="dense"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Cest"
              name="cest"
              value={formData.cest}
              onChange={handleInputChange}
              fullWidth
              margin="dense"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="CTS"
              name="cts"
              value={formData.cts}
              onChange={handleInputChange}
              fullWidth
              margin="dense"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Ativo"
              name="ativo"
              value={formData.ativo}
              onChange={handleInputChange}
              fullWidth
              margin="dense"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Pr.Venda"
              name="prVenda"
              value={formData.prVenda}
              onChange={handleInputChange}
              fullWidth
              margin="dense"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Pr.Venda 1"
              name="prVenda1"
              value={formData.prVenda1}
              onChange={handleInputChange}
              fullWidth
              margin="dense"
              size="small"
            />
          </Grid>
          {/* Continue adicionando outros campos restantes */}
        </Grid>
      </DialogContent>
      <DialogActions className="bg-white dark:bg-gray-800 p-4">
        <Button onClick={onClose} color="secondary" className="text-gray-800 dark:text-gray-200">Cancelar</Button>
        <Button onClick={handleSave} color="primary" variant="contained" className="bg-blue-600 dark:bg-blue-700">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
