import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    color: ${colors.dark};
    font-family: 'Baloo Tamma 2', cursive;
  }

  body {
    background-color: ${colors.white};
    font-weight: 900;
  }
`;
