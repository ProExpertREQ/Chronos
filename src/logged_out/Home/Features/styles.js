import styled from 'styled-components';

import colors from '../../../styles/colors';

const Container = styled.section`
  justify-content: center;

  h1 {
    color: ${colors.main};
    font-size: 4rem;
    text-align: center;
    cursor: default;
    margin: 2rem 0;

    ::-moz-selection {
      color: ${colors.main};
      background: transparent;
    }

    ::selection {
      color: ${colors.main};
      background: transparent;
    }
  }

  .row {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5rem 6rem 5rem;
    background-color: ${colors.white};
  }
`;

export default Container;
