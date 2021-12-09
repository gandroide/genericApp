import React, { FC } from 'react';
import { Container } from './styles/Container.styles';
import GlobalStyles from './styles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme';
import { toast, ToastContainer } from 'react-toastify';

export const App: FC = () => {
  const notify = () => {
    toast('🦄 Wow so easy!', {
      position: 'top-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type: 'info',
    });
  };

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <button onClick={notify}>Notify!</button>
        </Container>
      </ThemeProvider>
      <ToastContainer />
    </>
  );
};
