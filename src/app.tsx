import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';

import { worker } from './mocks/browser';
import { AuditLog } from './screens';
import GlobalCSS from './styles/global-style';
import './styles/normalize.css';
import theme from './styles/theme';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

const queryClient = new QueryClient();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AuditLog />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      <GlobalCSS />
    </ThemeProvider>
  );
}
