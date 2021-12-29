import React, { FC, useState } from 'react';
import { Container } from './styles/Container.styles';
import GlobalStyles from './styles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme';
import { NavBar } from './components/NavBar';
import { CustomButton } from './components/CustomButton';

export const App: FC = () => {
  const [expanded, setExpanded] = useState(false);

  const onExpanded = () => {
    setExpanded(prevState => !prevState);
  };
  //retirar la div con los estilos de prueba
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <NavBar expanded={expanded} onExpanded={onExpanded} />
        <Container expanded={expanded}>
          <h1>Hello World</h1>
          <div style={{ width: '15rem' }}>
            <CustomButton text="Click" />
          </div>
        </Container>
      </ThemeProvider>
    </>
  );
};
