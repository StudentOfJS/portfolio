import * as styledComponents from 'styled-components';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
ThemeInterface
>;

export interface ThemeInterface {
  accent?: string;
  fontFamily: string;
  primaryTextColor: string;
  primaryColor: string;
  secondaryTextColor: string;
  radius?: string;
}

export const theme = {
  accent: 'yellow',
  // tslint:disable-next-line:max-line-length
  fontFamily: `medium-content-sans-serif-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif`,
  primaryTextColor: 'white',
  primaryColor: 'black',
  radius: '30px',
  secondaryTextColor: 'grey'
};

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider };
