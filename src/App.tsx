import React from 'react';
import { ThemeProvider, Typography } from '@mui/material';
import theme from './shared/theme/Theme';
import './App.css';
import { EssentialInfo, Games, Token } from './Sections';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <EssentialInfo />
      <Games />
      <Token />
    </ThemeProvider> 
  );
};

export default App;
