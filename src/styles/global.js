import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    color: ${colors.dark};
  }

  body {
    background-color: ${colors.white};
    font-family: 'Baloo Tamma 2', cursive;
    font-weight: 900;
  }
`;
