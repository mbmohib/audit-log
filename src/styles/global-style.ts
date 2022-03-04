import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.colors.body};
    font-size: 16px;
    line-height: 1.5;
    font-family: 'Roboto', sans-serif;
  }
`;
