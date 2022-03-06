import styled from 'styled-components';
import {
  BordersProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  border,
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
  BordersProps &
  PositionProps;

const Box = styled.div<BoxProps>`
  ${layout}
  ${space}
  ${grid}
  ${flexbox}
  ${position}
  ${border}
`;

export default Box;
