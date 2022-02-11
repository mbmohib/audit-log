import { render as rtlRender } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

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
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
  );

  return { ...rtlRender(ui, { wrapper: Wrapper, ...rtlOptions }) };
}

export function createClientWrapper() {
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
