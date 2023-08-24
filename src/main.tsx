import React from 'react';
import ReactDOM from 'react-dom/client';

import { ServicesSearch } from './pages/ServicesSearch';


import GlobalStyles from './styles/global.js';
import { ThemeProvider } from 'styled-components';

import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ServicesSearch />
    </ThemeProvider>
  </React.StrictMode>,
)
