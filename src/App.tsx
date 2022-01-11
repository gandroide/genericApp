import React, { FC, useState } from 'react';
import { Container } from './styles/Container.styles';
import GlobalStyles from './styles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme';
import { NavBar } from './components/NavBar';
import { MenuProvider } from './context/MenuContext';
import UserProvider from './context/UserContext';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { PlayGround } from './pages/PlayGround';

export const App: FC = () => {
  const [expanded, setExpanded] = useState(false);

  const onExpanded = () => {
    setExpanded(prevState => !prevState);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <UserProvider>
        <MenuProvider />
        <GlobalStyles />
        {/* <NavBar expanded={expanded} onExpanded={onExpanded} /> */}
        <Container expanded={expanded}>
          <h1>PAF</h1>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/playground" element={<PlayGround />} />
          </Routes>
        </Container>
        <MenuProvider />
      </UserProvider>
    </ThemeProvider>
  );
};
