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
  display: flex;
  flex-direction: column;

  &.inactive {
    width: 6rem;

    h1 {
      opacity: 0 !important;
    }

    .top-section i {
      color: ${colors.white};
      transition: .5s;
      margin-right: .7rem;

      :hover {
        cursor: pointer;
        color: ${colors.dark};
      }

      :active {
        color: ${colors.white};
      }
    }

    .main-menu .menu-item span {
      opacity: 0;
    }

    .footer-menu .user-info{
      h5, p {
        opacity: 0;
      }
    }
  }

  .top-section {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      margin: 0;
      font-size: 1.9rem;
      font-weight: 700;
      color: ${colors.dark};
      display: inline-block;
      opacity: 1;
      transition: opacity .5s ease-in;
    }

    button {
      background-color: transparent;
      transition: .5s;

      :hover {
        cursor: pointer;
        color: ${colors.white};
      }

      :active {
        color: ${colors.dark};
      }
    }

    .toggle-menu-btn {
      color: ${colors.dark};
      border: none;
      font-size: 2rem;
      position: absolute;
      top: .3rem;
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

  .main-menu {
    position: relative;
    overflow: hidden;

    ul {
      padding: 0;
      list-style-type: none;

      li {
        padding: 0 1rem;
      }

      .active{
        border-left: 2px solid ${colors.white};
        background-color: rgba(24,66,68,.3);
        border-radius: .3rem;
        i, span {
          color: ${colors.dark};
        }
      }
    }

    .menu-item {
      color: ${colors.white};
      display: block;
      font-weight: 400;
      font-size: 1.3rem;
      text-decoration: none;
      margin: 1rem 0;
      padding-top: .6rem;

      .item-icon {
        display: inline-block;
        font-size: 1.5rem;
        margin-right: .5rem;
      }

      span {
        position: absolute;
        display: inline-block;
        opacity: 1;
        transition: opacity .5s ease-in;
        white-space: nowrap;
      }
    }
  }

  .footer-menu {
    width: 100%;
    height: 100px;
    background-color: rgba(24,66,68,.3);
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 2rem 1rem;
    box-sizing: border-box;
    overflow: hidden;

    .avatar {
      width: 3rem;
      height: 3rem;
      overflow: hidden;
      border-radius: 50%;
      border: 1px solid ${colors.yellow};
      display: inline-block;

      img {
        max-width: 100%;
      }
    }

    .user-info {
      display: inline-block;
      margin-left: 1rem;
      color: ${colors.white};
      position: absolute;
      top: 2rem;

      h5, p {
        margin: 0;
        opacity: 1;
        overflow: hidden;
        transition: opacity .5s ease-out;
      }

      h5 {
        font-size: 1.2rem;
        font-weight: 500;
        overflow: hidden;
        white-space: nowrap;
      }

      p {
        font-size: .8rem;
        font-weight: 400;
        margin-top: -.5rem;
      }
    }
  }
`;

export default SideMenu;
