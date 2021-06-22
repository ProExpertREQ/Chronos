import styled from 'styled-components';

import colors from '../styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.main};

  .circle {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.white};
    border-radius: 50%;
    width: 500px;
    height: 500px;
  }

  img {
    width: 50rem;
    height: 50rem;
  }
`;
