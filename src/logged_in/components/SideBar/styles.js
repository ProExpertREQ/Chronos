import styled from 'styled-components';

import colors from '../../../styles/colors';

const SideMenu = styled.section`
  position: fixed;
  top: 0;
  background-color: ${colors.main};
  width: 15rem;
  height: 100%;
  box-sizing: border-box;
  padding: 2rem 1rem;
  transition: width .5s ease-in;

  &.inactive {
    width: 5rem;

    h1 {
      color: transparent !important;
    }
  }

  .top-section {
    position: relative;
    overflow: hidden;

    h1 {
      margin: 0;
      font-size: 1.9rem;
      font-weight: 700;
      color: ${colors.dark};
      display: inline-block;
    }

    button {
      background-color: transparent;
      transition: .2s;

      :hover {
        cursor: pointer;
        color: ${colors.dark};
      }

      :active {
        color: ${colors.white};
      }
    }

    .toggle-menu-btn {
      color: ${colors.white};
      border: none;
      font-size: 2rem;
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  .divider {
    width: 100%;
    height: 1px;
    border-radius: 1px;
    background-color: ${colors.white};
    opacity: .5;
  }
`;

export default SideMenu;
