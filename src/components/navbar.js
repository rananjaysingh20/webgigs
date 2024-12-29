import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
      <AppBar
        position="static"
        sx={{ width: "60%", height: "70px", borderRadius: "50px", background: "white" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 800,
              fontSize: "22px",
              letterSpacing: ".3rem",
              color: "#f96c27",
              textDecoration: "none",
              fontFamily: "ABeeZee",
            }}
          >
            WebGigs
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", flexGrow: "3", marginRight: "42px", marginLeft: "42px" }} >
            <Typography
                variant="h6"
                component="div"
                sx={{ color: "black", fontWeight: 700 }}
            >
                Home
            </Typography>
            <Typography
                variant="h6"
                component="div"
                sx={{ color: "black", fontWeight: 700 }}
            >
                About
            </Typography>
            <Typography
                variant="h6"
                component="div"
                sx={{ color: "black", fontWeight: 700 }}
            >
                Services
            </Typography>
            <Typography
                variant="h6"
                component="div"
                sx={{ color: "black", fontWeight: 700 }}
            >
                Contact
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};