import styled from 'styled-components';

import colors from '../styles/colors';

export const Container = styled.footer`
  background-color: ${colors.main};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  color: ${colors.white};
  /* height: 20rem; */

  svg {
    position: absolute;
    top: 70rem;
  }

  h2 {
    margin: 1rem 0 0 0;
    font-size: 2rem;
    text-align: center;
  }

  p {
    margin: 0 27rem 0 27rem;
    text-align: center;
    font-weight: 500;
  }

  button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1rem 0;
      width: 20rem;
      height: 3rem;
      border-radius: 0.9rem;
      background-color: ${colors.dark};
      font-family: 'Baloo Tamma 2', cursive;
      font-size: 1.5rem;
      font-weight: 500;
      color: ${colors.white};
      border: none;
      transition: 0.3s;
      align-self: center;

      :hover {
        opacity: 0.95;
        transform: scale(1.05);
      }
      :active {
        transition: 0.001s;
        opacity: 0.7;
      }

      img {
        width: 10%;
        margin-right: 1rem;
      }
  }
`;
