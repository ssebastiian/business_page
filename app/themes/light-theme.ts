import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#00FFEE',
    },
    secondary: {
      main: '#17202a',
    },
    error: {
      main: '#BA1A1A',
    },
    info: {
      main: '#0061A3',
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed',
      },
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          height: 60
        },
      }
    },

    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 30,
          fontWeight: 600,
        },
        h2: {
          fontSize: 20,
          fontWeight: 400
        },
        subtitle1: {
          fontSize: 18,
          fontWeight: 600
        },
        h5:{//
          fontSize:22,
        },
        h6: {
          fontSize: 16,
          fontWeight: 600,
          color: '#000000',
          ":hover": {color: "#0D7068" }
        },
      }
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "1em",
        },
      },
    },

    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'small',
        disableElevation: true,
        color: 'primary',
        sx:{
          md:{
            paddingX: 2, 
          },
          paddingY: 1,
          borderRadius: 5
        }
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: 10,
          fontSize: 14
        },
      }
    },

    MuiCard: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          borderRadius: '10px',
        }
      }
    },
  }
});