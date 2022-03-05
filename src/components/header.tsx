import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Container, Image, Typography } from '.';
import userImage from '../assets/images/user-photo.png';
import { sideMenus } from '../config';

const UserMenu = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`;

export default function Header() {
  const location = useLocation();

  return (
    <Container>
      <HeaderContainer>
        <Typography fontWeight={600}>
          {sideMenus.find(menu => menu.path === location.pathname)?.label}
        </Typography>

        <UserMenu>
          <Typography>Jones Ferdinand</Typography>
          <Image src={userImage} />
        </UserMenu>
      </HeaderContainer>
    </Container>
  );
}
