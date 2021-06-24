import styled from 'styled-components';

import colors from '../styles/colors';

export const Container = styled.section`
  background-color: ${colors.white};
  position: relative;
  top: -7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${colors.white};
  margin: 0;
  height: 35rem;
  
  section{
    border-radius: 1.3rem;
    background-color: ${colors.main};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1.5rem;
    transition: 0.5s;

    :hover {
      transform: scale(1.05);
    }
  }

  .feature-1 {
    margin: 0 4rem 0 4rem;
  }

  .feature-2 {
    margin: 0;
    height: 20rem;
  }

  p {
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
`;
