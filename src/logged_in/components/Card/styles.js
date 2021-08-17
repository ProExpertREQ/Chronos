import styled from 'styled-components';

import colors from '../../../styles/colors';

export const Container = styled.div`
  background-color: rgba(254, 82, 68, .3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  max-width: 13rem;
  width: 100%;
  border-radius: 0.5rem;

  .card-header .card-title {
    font-weight: 400;
    font-size: 1em;
  }

  .card-content {
    font-weight: 500;
    font-size: 2em;
  }

  .card-footer {
    background-color: ${colors.red};
    color: ${colors.white};
    padding: .3rem 1.5rem;
    border-radius: .2rem;
    font-size: .8rem;
  }
`;
