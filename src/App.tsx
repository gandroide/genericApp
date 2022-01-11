import React, { FC, useState } from 'react';
import { Container } from './styles/Container.styles';
import GlobalStyles from './styles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme';
import { NavBar } from './components/NavBar';
import { MenuProvider } from './context/MenuContext';
import { ListOfCards } from './components/ListOfCards';

export const App: FC = () => {
  const [expanded, setExpanded] = useState(false);

  const onExpanded = () => {
    setExpanded(prevState => !prevState);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <MenuProvider />
      <GlobalStyles />
      <NavBar expanded={expanded} onExpanded={onExpanded} />
      <Container expanded={expanded}>
        <h1>HUB</h1>
        <ListOfCards />
      </Container>
      <MenuProvider />
    </ThemeProvider>
  );
};
