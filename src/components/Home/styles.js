import styled from 'styled-components';

import colors from '../styles/colors';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.main};

  .circle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: -0.5rem 0 0 5rem;
    background-color: ${colors.white};
    border-radius: 50%;
    width: 33rem;
    height: 33rem;
    color: ${colors.main};
    font-weight: 800;

    p {
      margin: 0;
    }

    .small-1{
      font-size: 4.5rem;
    }
    .small-2{
      font-size: 3.5rem;
    }
    .large {
      margin: -2rem;
      font-size: 6rem;
    }
  }

  img {
    position: relative;
    top: -4.5rem;
    width: 45rem;
    height: 45rem;
  }

  button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 1rem;
      width: 11.6rem;
      height: 3.4rem;
      border-radius: 0.9rem;
      background-color: ${colors.dark};
      font-family: 'Baloo Tamma 2', cursive;
      font-size: 1.5rem;
      font-weight: 700;
      color: ${colors.white};
      border: none;
      transition: 0.7s;

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
`;
