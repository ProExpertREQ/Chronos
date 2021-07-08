import styled from 'styled-components';

import colors from '../../../../styles/colors';

const Article = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.main};
  border-radius: 1rem;
  padding: 1.4rem;
  transition: 0.5s;

  & + article {
    margin-left: 4rem;
  }

  :hover {
    transform: scale(1.2);
  }

  p {
    text-align: center;
    font-size: 1.3rem;
    font-weight: 500;
    color: ${colors.white};
    cursor: default;
    margin: 0;

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

export default Article;
