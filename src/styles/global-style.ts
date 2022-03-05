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
`;
