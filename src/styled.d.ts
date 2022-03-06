import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    space: number[];
    breakpoints: string[];
    primaryFont: string;
    typeScale: {
      header1: string;
      header2: string;
      header3: string;
      header4: string;
      header5: string;
      paragraph: string;
      helperText: string;
      copyrightText: string;
    };
    colors: {
      primary: string;
      primary200: string;
      secondary: string;
      tertiary100: string;
      tertiary200: string;
      black: string;
      white: string;
      gray100: string;
      gray200: string;
      gray400: string;
      error: string;
    };
  }
}
