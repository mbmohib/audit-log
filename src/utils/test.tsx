import { render as rtlRender } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export function render(
  ui: React.ReactElement,
  {
    client = queryClient,
    rtlOptions = {},
  }: { client?: QueryClient; rtlOptions?: object } = {},
) {
  const Wrapper: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  );

  return { ...rtlRender(ui, { wrapper: Wrapper, ...rtlOptions }) };
}

export function createClientWrapper() {
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
