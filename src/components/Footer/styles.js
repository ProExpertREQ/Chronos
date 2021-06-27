import styled from 'styled-components';

import colors from '../styles/colors';

export const Container = styled.footer`
  background-color: ${colors.main};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: 'Baloo Tamma 2', cursive;
  color: ${colors.white};

  p {
    margin: 0;
    text-align: center;
    font-weight: 500;
  }

  .about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;

    .about-text {
      font-size: 1.2rem;
      margin: -.3rem 0 1rem 0;
    }

    h2 {
      margin: 0;
      font-size: 2rem;
      text-align: center;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: .4rem 3rem;
      border-radius: .9rem;
      background-color: ${colors.dark};
      border: none;
      transition: 0.3s;

      p {
        font-weight: 700;
        font-size: 1.5rem;
        color: ${colors.white};
        font-family: 'Baloo Tamma 2', cursive;
      }

      :hover {
        opacity: 0.95;
        transform: scale(1.05);
        cursor: pointer;
      }
      :active {
        transition: 0.001s;
        opacity: 0.7;
      }
      ::-moz-selection {
        color: ${colors.white};
        background: transparent;
      }
      ::selection {
        color: ${colors.white};
        background: transparent;
      }
      img {
        margin-right: 1rem;
      } 
    }
  }
`;