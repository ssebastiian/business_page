"use client";

import { FC } from "react";
import { Box, Container } from "@mui/material";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";

interface Props {
    children: React.ReactNode
};

export const LayoutPrincipal:FC<Props> = ({ children }) => {
    
    return(
        <Box 
            display="flex" 
            flexDirection="column" 
            minHeight="100vh"
            bgcolor="black"
        >   
            <Navbar/>
            <Container component="main" maxWidth="xl" sx={{ mt: 1, mb: 5 }}>
                { children }
            </Container>
            <Footer />
        </Box>
    );
};