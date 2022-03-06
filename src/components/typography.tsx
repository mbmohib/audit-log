import styled, { css } from 'styled-components';
import {
  ColorProps,
  SpaceProps,
  TypographyProps as TextProps,
  color,
  space,
  typography,
} from 'styled-system';

import themeConfig from '../styles/theme';

type TypographyProps = SpaceProps &
  TextProps &
  ColorProps & {
    variant?: keyof typeof themeConfig.typeScale;
  };

const Typography = styled.p<TypographyProps>`
  font-size: ${({ theme }) => theme.typeScale.paragraph};
  font-weight: 400;
  line-height: 1.5;

  ${({ variant }) =>
    variant === 'header1' &&
    css`
      font-size: ${({ theme }) => theme.typeScale.header1};
    `}

  ${({ variant }) =>
    variant === 'header2' &&
    css`
      font-size: ${({ theme }) => theme.typeScale.header2};
    `}

  ${({ variant }) =>
    variant === 'header3' &&
    css`
      font-size: ${({ theme }) => theme.typeScale.header3};
    `}

  ${({ variant }) =>
    variant === 'header4' &&
    css`
      font-size: ${({ theme }) => theme.typeScale.header4};
    `}

  ${({ variant }) =>
    variant === 'header5' &&
    css`
      font-size: ${({ theme }) => theme.typeScale.header5};
    `}

  ${({ variant }) =>
    variant === 'paragraph' &&
    css`
      font-size: ${({ theme }) => theme.typeScale.paragraph};
    `}

  ${({ variant }) =>
    variant === 'paragraph' &&
    css`
      font-size: ${({ theme }) => theme.typeScale.paragraph};
    `}

  ${({ variant }) =>
    variant === 'subtitle1' &&
    css`
      font-size: ${({ theme }) => theme.typeScale.subtitle1};
    `}

  ${({ variant }) =>
    variant === 'subtitle2' &&
    css`
      font-size: ${({ theme }) => theme.typeScale.subtitle2};
    `}

  ${color}
  ${space}
  ${typography}
`;

Typography.defaultProps = {
  variant: 'paragraph',
};

export default Typography;
