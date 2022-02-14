import Box from '@mui/material/Box';

import { Footer, Header } from '.';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Box
      display="flex"
      minHeight="100vh"
      alignItems="center"
      flexDirection="column"
    >
      <Header />
      <Box flexGrow="1" width="100%" mt={6}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
