import 'styled-components';

interface IPalette {
  light: string;
  default: string;
  dark: string;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      blue: IPalette;
      red: IPalette;
      green: IPalette;
      common: {
        black: string;
        white: string;
      };
      typography: {
        light: string;
        default: string;
        dark: string;
      };
    };
    breakpoints: {
      sm: string;
    };
  }
}
