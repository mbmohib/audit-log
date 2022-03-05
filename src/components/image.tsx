import styled from 'styled-components';
import { LayoutProps, SpaceProps, layout, space } from 'styled-system';

type ImageProps = SpaceProps &
  LayoutProps & {
    src: string;
    alt?: string;
  };

const Image = styled.img<ImageProps>`
  max-width: 100%;
  display: block;

  ${layout}
  ${space}
`;

export default Image;
