import styled from 'styled-components';

import colors from '../../../styles/colors';

export const Container = styled.section`
  background-color: ${colors.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;

  .item {
    display: flex;
    flex-direction: column;

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
    max-width: 37rem;
    height: auto;
    padding-left: 2.5rem;

    ::-moz-selection {
      background: transparent;
    }
  
    ::selection {
      background: transparent;
    } 
  }

  button {
    padding: 0.4rem 3rem;
    border-radius: 0.9rem;
    background-color: ${colors.dark};
    font-family: 'Baloo Tamma 2', cursive;
    font-weight: 700;
    font-size: 1.5rem;
    color: ${colors.white};
    border: none;
    transition: 0.3s;

    :hover {
      transform: scale(1.05);
      cursor: pointer;
      background-color: ${colors.yellow};
      color: ${colors.dark};
    }

    :active {
      transition: 0.001s;
      background-color: ${colors.dark};
      color: ${colors.white};
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
`;
