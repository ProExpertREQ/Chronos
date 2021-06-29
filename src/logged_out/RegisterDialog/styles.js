import styled from 'styled-components';

import colors from '../../styles/colors';

export const Modal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, .8);
  display: flex;
  justify-content: center;
  align-items: center !important;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${colors.white};
    width: 26.5rem;
    border-radius: 0.5rem;
    padding: 1rem 1.5rem;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: ${colors.dark};

    h3 {
      font-size: 2rem;
      font-weight: 500;
      margin: 0;
    }

    p {
      margin: 0;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: 0.001s;

      :active {
        color: ${colors.dark} !important;
      }

      :hover {
        transform: scale(1.1);
        color: ${colors.yellow};
      }
    }
  }

  #form {
    display: flex;
    flex-direction: column;

    label {
      font-size: 1rem;
      font-weight: 500;
      color: ${colors.dark};
      margin-top: .5rem;
    }

    input { 
      width: 23.4rem;
      border: none;
      border-radius: .3rem;
      background-color: #D4EEEF;
      font-family: 'Baloo Tamma 2', cursive;
      font-size: 1.3rem;
      color: ${colors.dark};
      padding: .5rem 1.5rem;
    }

    #register {
      border-radius: .3rem;
      font-family: 'Baloo Tamma 2', cursive;
      font-weight: 700;
      font-size: 1rem;
      margin-top: 1rem;
      color: ${colors.white};
      transition: .3s;
      background-color: ${colors.yellow};

      :active {
        transition: 0.001s;
        background-color: ${colors.dark};
        color: ${colors.white} !important;
      }

      :hover {
        transform: scale(1.05);
        cursor: pointer;
        color: ${colors.dark};
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
  }
`;
