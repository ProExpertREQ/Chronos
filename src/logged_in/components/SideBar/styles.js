import styled from 'styled-components';

import colors from '../../../styles/colors';

const SideMenu = styled.section`
  position: fixed;
  top: 0;
  background-color: ${colors.main};
  width: 15rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 0 0 -0.5rem 0;
    font-size: 1.9rem;
    font-weight: 700;
    color: ${colors.dark};
    cursor: default;
    margin-top: 2rem;

    ::-moz-selection {
      color: ${colors.dark};
      background: transparent;
    }

    ::selection {
      color: ${colors.dark};
      background: transparent;
    }
  }
`;

export default SideMenu;
