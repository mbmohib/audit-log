import { DefaultTheme } from 'styled-components';

export const breakpointsRule = {
  _: 600,
  sm: 768,
  md: 1024,
  lg: 1280,
  xl: 1536,
};

export const breakpoints = ['600px', '768px', '1024px', '1280px', '1536px'];

const theme: DefaultTheme = {
  space: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 100],
  breakpoints,
  primaryFont: "'Roboto', sans-serif",
  typeScale: {
    header1: '1.383rem',
    header2: '1.296rem',
    header3: '1.215rem',
    header4: '1.138rem',
    header5: '1.067rem',
    paragraph: '1rem',
    subtitle1: '0.878rem',
    subtitle2: '0.823rem',
  },
  colors: {
    primary: '#3495d5',
    primary200: '#2270a3',
    secondary: '#363740',
    tertiary100: '#F7F8FC',
    tertiary200: '#DDE2FF',
    black: '#252733',
    white: '#ffffff',
    gray100: '#A4A6B3',
    gray200: '#9fa2b4',
    gray400: '#DFE0EB',
    gray500: '#818181',
    gray900: '#3d3d3d',
    error: '#d32f2f',
  },
};

export default theme;
