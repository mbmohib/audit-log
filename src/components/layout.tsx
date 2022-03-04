import styled from 'styled-components';

import { Header, Sidebar } from '.';
import { sidebarSize } from '../config';

const LayoutWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex-grow: 1;
  margin-top: 8px;
  margin-left: 200px;
  width: calc(100% - ${sidebarSize});
  padding-left: 16px;
  padding-right: 16px;
`;

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <LayoutWrapper>
      <Sidebar />
      <Content>
        <Header />
        {children}
      </Content>
    </LayoutWrapper>
  );
}
