import styled from 'styled-components';
import {
  ColorProps,
  SpaceProps,
  TypographyProps as TextProps,
  color,
  space,
  typography,
} from 'styled-system';

type TypographyProps = SpaceProps & TextProps & ColorProps;

const Typography = styled.p<TypographyProps>`
  ${color}
  ${space}
  ${typography}
`;

export default Typography;
