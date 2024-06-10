// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      yellow: '#FABD33',
      main: '#5ACCCC',
      steelBlue: '#335C6E',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#CFFAFA',
      turquoiseDark1: '#53C2C2',
      turquoiseDark2: '#2BBBBB',
      orangeRed: '#F76434',
      teal: '#4AA088',
      yellowDark: '#FAAD00',
      orangePastel: '#FFE6DC',
      contrastText: '#000000',
    },
    background: {
      default: '#f5f5f5',
    },
    text: {
      primary: '#333',
      secondary: '#335C6E'
    },
  },
  typography: {
    fontFamily: 'Mulish, Arial, sans-serif',
  },
});

export default theme;
