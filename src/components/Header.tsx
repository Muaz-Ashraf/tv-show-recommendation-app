import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/MAICON.ico";
import { Stack } from "@mui/material";

function Header() {
  return (
    <Box width="100%">
      <AppBar
        position="static"
        sx={{
          bgcolor: "blanchedalmond",
          color: "black",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack direction={"row"}>
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

                borderRadius: "50%",
                padding: 2,
              }}
            />
          </Stack>
          <Typography
            variant="h4"
            sx={{
              margin: 2,
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
