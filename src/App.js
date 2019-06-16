import React from 'react';
import { ThemeProvider } from 'styled-components';

import BlogPage from './pages/BlogPage';

import GlobalStyle from './styles/global';
import theme from './styles/theme';

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <>
        <BlogPage />
        <GlobalStyle />
      </>
    </ThemeProvider>
  </>
);

export default App;
