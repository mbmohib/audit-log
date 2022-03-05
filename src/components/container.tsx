import styled from 'styled-components';
import { space } from 'styled-system';

import media from '../styles/media-query';

const Container = styled.div`
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;

  ${media('sm')`
    max-width: 768px;
  `};

  ${media('md')`
    max-width: 1024px;
  `};

  ${media('lg')`
    max-width: 1280px;
  `};

  ${space}
`;

export default Container;
