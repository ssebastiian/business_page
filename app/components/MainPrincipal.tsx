'use client'

import React, { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, CssBaseline, AppBar, Toolbar, IconButton, Button, Drawer, Divider, List, ListItem, ListItemButton, ListItemText, alpha, useTheme} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 200;
const navItems = [
  { text: 'Inicio', href: '/' },
  { text: 'Noticias', href: '/series' },
  { text: 'Articulos', href: '/articulos' },
];

interface Props {
  window?: () => Window;
}

export const MainPrincipal: FC<Props> = ({ window }) => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: alpha(theme.palette.primary.main, 0.6), boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center" mt={2}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Link href={'/'} passHref>
              <Image
                src={'/image/LogoVeoanime.png'}
                alt='image principal'
                width={100}
                height={120}
                objectFit="cover"
              />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: 'center' }}>
            {navItems.map((item) => (
              <Link key={item.text} href={item.href} passHref>
                <Button sx={{ color: 'white' }}>
                  {item.text}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={window !== undefined ? () => window().document.body : undefined}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: alpha(theme.palette.primary.main, 0.3) },
          }}
        >
          <Box
            onClick={handleDrawerToggle}
            sx={{
              backgroundColor: alpha(theme.palette.primary.main, 0.1),
              width: drawerWidth,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                bgcolor: 'white',
              }}
            >
              <Image
                src={'/image/LogoVeoanime.png'}
                alt='Logo'
                width={100}
                height={120}
              />
            </Box>
            <Divider sx={{ borderColor: alpha(theme.palette.primary.main, 0.9) }} />
            <List>
              {navItems.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                    <Link href={item.href} passHref>
                      <ListItemText primary={item.text} primaryTypographyProps={{ sx: { color: 'white' } }} />
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </nav>
    </Box>
  );
};