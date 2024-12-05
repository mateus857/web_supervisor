"use client";

import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// Tipagem para as propriedades do Header
interface HeaderProps {
  toggleDrawer?: () => void; // Função opcional para alternar o Drawer (modo mobile)
  toggleSidebar: () => void; // Função obrigatória para alternar a sidebar (modo desktop)
}

const Header: React.FC<HeaderProps> = ({ toggleDrawer, toggleSidebar }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#374151", // Cinza neutro
        color: "white", // Texto branco para contraste
      }}
    >
      <Toolbar>
  

        {/* Botão para alternar a sidebar no modo desktop */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
          sx={{ marginRight: 2 }}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo e nome */}
        <Box
          component="img"
          src="/images/logo.jpg"
          alt="Logo"
          sx={{ height: 40, width: 40, marginRight: 2 }}
        />
        <Typography variant="h6" noWrap>
          Supervisor
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
