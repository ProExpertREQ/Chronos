import styled from 'styled-components';

import colors from '../../../styles/colors';

const Container = styled.section`
  justify-content: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  h1 {
    color: ${colors.main};
    font-size: 4rem;
    text-align: center;
    cursor: default;
    margin: 5rem 0 0 0;

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
    padding: 0 5rem;
    margin-bottom: 3rem;
    background-color: ${colors.white};
  }
`;

export default Container;
