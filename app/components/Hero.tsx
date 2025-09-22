"use client";
import React from "react";
import { Grid, Box } from "@mui/material";
import { HeroCard } from "./HeroCard";

export const Hero = () => {
  return (
    <Box sx={{ bgcolor: "black", py: 6, px: 4 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Texto (HeroCard) */}
        <Grid size={{xs:8, md:6 }}>
          <HeroCard
            title="Build modern interfaces that feel effortless"
            subtitle="Nibh tristique gravida arcu, posuere luctus imperdiet. Aenean varius sem id, at ullamcorper sodales lectus purus facilisis."
            badge="Lorem ipsum vivamus dictum"
            btnPrimary="Explore Now"
            btnSecondary="Watch Overview"
          />
        </Grid>

        {/* Imágenes */}
        <Grid size={{xs:12, md:6 }}>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
            <Box
              component="img"
              src="/web.jpg"
              alt="Server"
              sx={{ width: "50%", borderRadius: 2 }}
            />
            <Box
              component="img"
              src="/web.jpg"
              alt="Working woman"
              sx={{ width: "40%", borderRadius: 2 }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
