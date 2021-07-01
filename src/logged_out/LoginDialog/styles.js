import styled from 'styled-components';

import colors from '../../styles/colors';

const Button = styled.button`
  border-radius: .3rem !important;
  font-size: 1.5rem !important;
  color: ${colors.white};
  transition: .3s;
  background-color: ${colors.light};

  :active {
    background-color: ${colors.dark};
    color: ${colors.white} !important;
  }

  :hover {
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
`;

export default Button;
