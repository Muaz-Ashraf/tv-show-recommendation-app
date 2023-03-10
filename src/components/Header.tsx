import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/MAICON.ico";

function Header() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#FFCCCB" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <img
            src={logo}
            alt="Logo"
            style={{
              height: "40px",
              marginRight: "auto",
            }}
          />
          <Typography
            variant="h4"
            sx={{
              margin: 2,
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            TV with Muaz
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
