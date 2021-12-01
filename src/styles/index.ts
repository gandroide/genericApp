import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
  }

  html {
    font-size: 75%;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 87.5%;
    }

    @media screen and (min-width: 992px) {
      font-size: 100%;
    }
  }

  body {
    background-color: ${({ theme }) => theme.palette.common.black};
    color: ${({ theme }) => theme.palette.common.white}
  }

  h1 {
    font-size: 1rem;
  }
`;
