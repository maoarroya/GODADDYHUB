import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1B1D1F',
      light: '#d5eced',
    },
    secondary: {
      main: '#00A4EF',
    },
    background: {
      default: '#FFFFFF',
    },
    info: {
      main: '#1bdbdb',
    },
  },
  typography: {
    fontFamily: `"Inter", "Arial", "sans-serif"`,
    h4: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
