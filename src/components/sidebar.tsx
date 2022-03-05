import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Image, Typography } from '.';
import logo from '../assets/images/logo.png';
import { sideMenus, sidebarSize } from '../config';

const SidebarWrapper = styled.aside`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.gray100};
  height: 100%;
  position: fixed;
  left: 0;
  width: ${sidebarSize};
  padding: 16px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Nav = styled.div`
  margin-top: 40px;
`;

const NavItem = styled(NavLink)`
  color: ${({ theme }) => theme.colors.gray100};
  text-decoration: none;
  display: block;
  padding: 4px;
  margin: 8px 0;

  :hover {
    color: ${({ theme }) => theme.colors.tertiary200};
  }

  &.active {
    color: ${({ theme }) => theme.colors.tertiary200};
  }
`;

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <Header>
        <Image src={logo} alt="logo" />
        <Typography fontWeight={600}>Dashboard</Typography>
      </Header>

      <Nav>
        {sideMenus.map(menu => (
          <NavItem
            className={({ isActive }) => (isActive ? 'active' : 'undefined')}
            to={menu.path}
          >
            {menu.label}
          </NavItem>
        ))}
      </Nav>
    </SidebarWrapper>
  );
}
