"use client";
import React from "react";
import { 
  Box, 
  Typography, 
  IconButton, 
  Container,
  Stack 
} from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  Language
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

// Types
interface SocialLink {
  icon: React.ReactElement;
  href: string;
  label: string;
}

interface FooterProps {
  companyName?: string;
  tagline?: string;
  socialLinks?: SocialLink[];
  backgroundColor?: string;
  textColor?: string;
}

// Styled components
const StyledFooter = styled(Box)(() => ({
  backgroundColor: '#f8f9fa',
  padding: '4rem 0 2rem',
  borderTop: '1px solid rgba(0,0,0,0.05)',
}));

const LogoText = styled(Typography)(() => ({
  fontWeight: 'bold',
  fontSize: '2.5rem',
  color: '#2c3e50',
  marginBottom: '1rem',
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
}));

const TaglineText = styled(Typography)(() => ({
  color: '#6c757d',
  fontSize: '1.1rem',
  lineHeight: 1.6,
  marginBottom: '2rem',
  maxWidth: '500px',
  margin: '0 auto 2rem',
}));

const SocialIconButton = styled(IconButton)(() => ({
  width: 56,
  height: 56,
  backgroundColor: 'white',
  border: '2px solid #e9ecef',
  borderRadius: '16px',
  color: '#6c757d',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#ff5722',
    borderColor: '#ff5722',
    color: 'white',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(255, 87, 34, 0.3)',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '1.5rem',
  },
}));

const CopyrightText = styled(Typography)(() => ({
  color: '#6c757d',
  fontSize: '0.9rem',
  marginTop: '2rem',
  paddingTop: '2rem',
  borderTop: '1px solid rgba(0,0,0,0.05)',
}));

export const Footer: React.FC<FooterProps> = ({
  companyName = "FlexBiz",
  tagline = "Innovating the digital landscape with elegant solutions and timeless design.",
  socialLinks: customSocialLinks,
  backgroundColor = '#f8f9fa',
  textColor = '#2c3e50'
}) => {
  const defaultSocialLinks: SocialLink[] = [
    {
      icon: <Facebook />,
      href: "https://facebook.com",
      label: "Facebook"
    },
    {
      icon: <Instagram />,
      href: "https://instagram.com",
      label: "Instagram"
    },
    {
      icon: <LinkedIn />,
      href: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: <Twitter />,
      href: "https://twitter.com",
      label: "Twitter"
    },
    {
      icon: <Language />,
      href: "https://dribbble.com",
      label: "Website"
    }
  ];

  const socialLinks = customSocialLinks || defaultSocialLinks;

  const handleSocialClick = (href: string): void => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <StyledFooter sx={{ backgroundColor }}>
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Box textAlign="center">
          {/* Logo */}
          <LogoText 
            variant="h2" 
            sx={{ color: textColor }}
          >
            {companyName}
          </LogoText>

          {/* Tagline */}
          <TaglineText variant="body1">
            {tagline}
          </TaglineText>

          {/* Social Media Icons */}
          <Stack 
            direction="row" 
            spacing={2} 
            justifyContent="center"
            sx={{ mb: 2 }}
          >
            {socialLinks.map((social, index) => (
              <SocialIconButton
                key={index}
                onClick={() => handleSocialClick(social.href)}
                aria-label={`Visit our ${social.label} page`}
                title={social.label}
              >
                {social.icon}
              </SocialIconButton>
            ))}
          </Stack>

          {/* Copyright */}
          <CopyrightText variant="body2">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </CopyrightText>
        </Box>
      </Container>
    </StyledFooter>
  );
};