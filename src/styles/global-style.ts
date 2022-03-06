import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.tertiary100};
    color: ${({ theme }) => theme.colors.black};
    font-size: 16px;
    line-height: 1.5;
    font-family:  ${({ theme }) => theme.primaryFont};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }

  h1, h2,h3, h4, h5, h6, p {
    margin-bottom: 0;
    margin-top: 0;
  }

  h1, h2,h3, h4, h5, h6 {
    margin-bottom: 8px;
  }
`;
