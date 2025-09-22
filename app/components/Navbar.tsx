"use client";
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  InputBase,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#f2f2f2",
  marginLeft: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  padding: "0 8px",
}));

export const Navbar = () => {
  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography variant="h6" fontWeight="bold">
          FlexBiz
        </Typography>

        {/* Menu */}
        <Box sx={{ display: "flex", gap: 3 }}>
          {["Home", "About", "Services", "Portfolio", "Team", "Dropdown", "Contact"].map(
            (item, idx) => (
              <Button
                key={idx}
                color={item === "Home" ? "error" : "inherit"}
                sx={{ textTransform: "none", fontWeight: item === "Home" ? "bold" : "normal" }}
              >
                {item}
              </Button>
            )
          )}
        </Box>

        {/* Socials + Search */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton><FacebookIcon /></IconButton>
          <IconButton><TwitterIcon /></IconButton>
          <IconButton><InstagramIcon /></IconButton>
          <Search>
            <SearchIcon />
            <InputBase placeholder="Search…" />
          </Search>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
