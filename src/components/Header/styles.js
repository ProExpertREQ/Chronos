import styled from 'styled-components';

import colors from '../styles/colors';

export const Navbar = styled.header`
  background: ${colors.main};
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
  height: 7rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${colors.dark};
    width: 100%;
  }

  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 1rem;
      width: 11.6rem;
      height: 3.4rem;
      border-radius: 0.9rem;
      font-family: 'Baloo Tamma 2', cursive;
      font-size: 1.5rem;
      font-weight: 700;
      color: ${colors.white};
      border: none;
      transition: 0.7s;
      z-index: 1;

      :hover {
        opacity: 0.95;
        -webkit-transform: scale(1.05);
        -ms-transform: scale(1.05);
        transform: scale(1.05);
      }
      :active {
        opacity: 0.7;
      }
    }

    .signup {
        background-color: ${colors.yellow};
    }
    .login {
        background-color: ${colors.light};
    }
  }
`;
