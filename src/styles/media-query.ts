import { breakpointsRule } from './theme';

const mediaQueries =
  (key: keyof typeof breakpointsRule) =>
  (style: TemplateStringsArray | string) =>
    `@media (min-width: ${breakpointsRule[key]}px) { ${style} }`;

export default mediaQueries;
