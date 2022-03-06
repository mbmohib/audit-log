import styled from 'styled-components';
import { SpaceProps, space } from 'styled-system';

const Paper = styled.div<SpaceProps>`
  background: ${({ theme }) => theme.colors.white};
  padding: 24px;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;

  ${space}
`;

export default Paper;
