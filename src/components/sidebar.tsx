import styled from 'styled-components';

import { sidebarSize } from '../config';

const SidebarWrapper = styled.aside`
  background-color: #363740;
  height: 100%;
  position: fixed;
  left: 0;
  width: ${sidebarSize};
  padding: 16px;
`;

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <p>Dashboard</p>
    </SidebarWrapper>
  );
}
