import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {    
    fontFamily: 'Montserrat, Arial, sans-serif',
    fontWeightBold: 'bold',
    allVariants: {
      color: '#fff',
      fontWeight: 'bold',
    },
  },
  palette: {
    text: {
      primary: '#fff',
    },
  },
});

export default theme;
