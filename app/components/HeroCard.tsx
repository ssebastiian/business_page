"use client";
import React from "react";
import { Box, Typography, Button, Chip } from "@mui/material";

interface HeroCardProps {
  title: string;
  subtitle: string;
  badge: string;
  btnPrimary: string;
  btnSecondary: string;
}

export const HeroCard: React.FC<HeroCardProps> = ({ title, subtitle, badge, btnPrimary, btnSecondary }) => {
  return (
    <Box
      sx={{
        p: 4,
        borderRadius: 3,
        bgcolor: "grey.900",
        color: "white",
        maxWidth: 500,
      }}
    >
      <Chip label={badge} color="error" sx={{ mb: 2 }} />
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" color="grey.400" gutterBottom>
        {subtitle}
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <Button variant="contained" color="error">{btnPrimary}</Button>
        <Button variant="outlined" color="inherit">{btnSecondary}</Button>
      </Box>

      <Box sx={{ display: "flex", gap: 2, mt: 3, fontSize: 14 }}>
        <Typography>⚡ Fusce aptent interdum</Typography>
        <Typography>📌 Quam nunc tempor</Typography>
        <Typography>📊 Ultricies porta lectus</Typography>
      </Box>
    </Box>
  );
};
