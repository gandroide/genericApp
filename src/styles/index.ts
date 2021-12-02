import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
   margin: ${({ theme }) => theme.spacing.md};;
   padding: 0;
   box-sizing: border-box;
  }

  html {
    font-size: 75%;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 87.5%;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      font-size: 100%;
    }
  }

  body {
    background-color: ${({ theme }) => theme.palette.common.black};
    color: ${({ theme }) => theme.palette.common.white};
    font-size: ${({ theme }) => theme.typography.text};
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.h1};
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.h2};
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.h3};
  }
`;
