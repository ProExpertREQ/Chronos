import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export default createGlobalStyle`
  body {
    background-color: ${colors.white};
    font-family: 'Baloo Tamma 2', cursive;
    font-weight: 900;
    margin: 0;
  }
`;
