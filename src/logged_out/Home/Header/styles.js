import styled from 'styled-components';

import colors from '../../../styles/colors';

const Section = styled.section`
  background-color: ${colors.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  height: 100vh;

  .item {
    display: flex;
    flex-direction: column;
    margin: 5rem 0 0 5rem;

    .item-1 {
      margin-top: -2.5rem;
      font-size: 3.8rem;
    }

    .item-2 {
      margin: -2rem;
      font-size: 5rem;
    }

    .item-3 {
      font-size: 3rem;
    }

    a {
      display: flex;
      justify-content: center;
      text-decoration: none;
    }
  }

  p {
    margin: 0;
    color: ${colors.white};
    font-weight: 800;
    text-align: center;
    cursor: default;

    ::-moz-selection {
      color: ${colors.white};
      background: transparent;
    }

    ::selection {
      color: ${colors.white};
      background: transparent;
    }
  }

  img {
    height: 100vh;

    ::-moz-selection {
      background: transparent;
    }

    ::selection {
      background: transparent;
    }
  }
`;

export default Section;
