import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.header`
  background: ${colors.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  padding-top: 2rem;

  h1 {
    margin: 0 0 -0.5rem 0;
    font-size: 1.9rem;
    font-weight: 700;
    color: ${colors.dark};
    cursor: default;

    ::-moz-selection {
      color: ${colors.dark};
      background: transparent;
    }
  
    ::selection {
      color: ${colors.dark};
      background: transparent;
    } 
  }

  div {
    display: flex;
    align-items: stretch;

    button {
      padding: 0.4rem 3rem;
      border-radius: 0.9rem;
      font-family: 'Baloo Tamma 2', cursive;
      font-weight: 700;
      font-size: 1.5rem;
      color: ${colors.white};
      border: none;
      transition: 0.3s;

      :hover {
        transform: scale(1.05);
        cursor: pointer;
        color: ${colors.dark};
      }

      & + button {
        margin-left: 1.5rem;
      }

      ::-moz-selection {
        color: ${colors.white};
        background: transparent;
      }
  
      ::selection {
        color: ${colors.white};
        background: transparent;
      } 
    }

    .signup {
      background-color: ${colors.yellow};

      :active {
        transition: 0.001s;
        background-color: ${colors.dark};
        color: ${colors.white};
      }
  }
    .login {
      background-color: ${colors.light};
      
      :active {
        transition: 0.001s;
        background-color: ${colors.dark};
        color: ${colors.white};
      }
    }
  }
`;
