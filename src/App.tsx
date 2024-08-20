import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from './shared/theme/Theme';
import './App.css';
import { EssentialInfo, Games, Token } from './Sections';
import MemberBenefits from './Sections/MemberBenefits';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <EssentialInfo />
      <Games />
      <Token />
      <MemberBenefits />
    </ThemeProvider> 
  );
};

export default App;
