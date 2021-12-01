import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  borderRadius: '4px',
  palette: {
    common: {
      black: '#222',
      white: '#F9FAFB',
    },
    blue: {
      light: '#60A5FA',
      default: '#2563EB',
      dark: '#1E40AF',
    },
    red: {
      light: '#F87171',
      default: '#DC2626',
      dark: '#991B1B',
    },
    green: {
      light: '#34D399',
      default: '#059669',
      dark: '#065F46',
    },
    typography: {
      light: '#A3A3A3',
      default: '#222',
      dark: '#171717',
    },
  },
  breakpoints: {
    sm: '768px',
  },
};
