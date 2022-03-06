import styled from 'styled-components';

import { Container, Image, Typography } from '.';
import userImage from '../assets/images/user-photo.png';

const UserMenu = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 60px;
`;

export default function Header() {
  return (
    <Container>
      <HeaderContainer>
        <UserMenu>
          <Typography>Jones Ferdinand</Typography>
          <Image src={userImage} />
        </UserMenu>
      </HeaderContainer>
    </Container>
  );
}
