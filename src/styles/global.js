import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 /* Reset */
  * {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-image: ${props => props.theme.default.colors.gradient};
  }

`;
