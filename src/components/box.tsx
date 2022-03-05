import styled from 'styled-components';
import {
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  flexbox,
  grid,
  layout,
  position,
  space,
} from 'styled-system';

type BoxProps = LayoutProps &
  SpaceProps &
  FlexboxProps &
  GridProps &
  PositionProps;

const Box = styled.div<BoxProps>`
  ${layout}
  ${space}
  ${grid}
  ${flexbox}
  ${position}
`;

export default Box;
