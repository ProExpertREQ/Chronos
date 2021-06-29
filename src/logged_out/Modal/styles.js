import styled from 'styled-components';

import colors from '../../styles/colors';

const Modal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(24, 66, 68, .8);
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
    padding: 1.5rem 1.5rem 2rem 1.5rem;
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

    .close {
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: .2rem 1rem;
      color: ${colors.dark};
      font-size: 2rem;
      font-weight: 500;

      ::-moz-selection {
        color: ${colors.dark};
        background: transparent;
      }
  
      ::selection {
        color: ${colors.dark};
        background: transparent;
      } 
    }
  }

  #form {
    display: flex;
    flex-direction: column;

    label {
      font-size: .9rem;
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
      padding: .2rem 1rem;
    }

    #button-label {
      color: ${colors.white};
      
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

export default Modal;
