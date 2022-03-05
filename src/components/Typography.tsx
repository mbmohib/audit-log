import styled from 'styled-components';
import {
  SpaceProps,
  TypographyProps as TextProps,
  space,
  typography,
} from 'styled-system';

type TypographyProps = SpaceProps & TextProps;

const Typography = styled.p<TypographyProps>`
  ${space}
  ${typography}
`;

export default Typography;
