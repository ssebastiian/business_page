"use client";
import React from "react";
import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box sx={{ py: 3, textAlign: "center", bgcolor: "grey.100", mt: 4 }}>
      <Typography variant="body2" color="text.secondary">
        © 2025 FlexBiz. All rights reserved.
      </Typography>
    </Box>
  );
};