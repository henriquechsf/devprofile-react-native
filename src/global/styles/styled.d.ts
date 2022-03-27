import 'styled-components';
import theme from './theme';

// override no módulo
declare module 'styled-components' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
