import React, { FC } from 'react';
import { Container } from './styles/Container.styles';
import GlobalStyles from './styles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme';

export const App: FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <h1>hello</h1>
      </Container>
    </ThemeProvider>
  );
};
