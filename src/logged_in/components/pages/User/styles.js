import styled from 'styled-components';

import colors from '../../../../styles/colors';

export const Container = styled.div`
  background-color: white;
  color: ${colors.dark};
  border-radius: 10px;
  padding: 5px 30px;

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 30px;
    margin-bottom: 40px;
  }

  .user-info .avatar {
    width: 100px;

    img {
      border-radius: 50%;
      width: 100%;
      border: 1px solid ${colors.yellow};
    }
  }

  .content {
    width: 100%;
    max-width: 500px;
    height: 78px;

    p {
      margin: 0;
      font-size: 1em;
      font-weight: 400;
    }

    h4 {
      font-size: 1rem;
      font-weight: 600;
    }
  }

  .label {
    height: 30px;
  }

  .data {
    background-color: #ddd;
    border-radius: 5px;
    height: 40px;
    padding: 0 10px;
    text-align: center;
    display: flex;
    align-items: center;
  }

  .buttons {
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  button {
    background-color: ${colors.green};
    border: none;
    padding: .5rem;
    border-radius: 5px;
    width: 100%;
    font-family: 'Baloo Tamma 2', cursive;
    cursor: pointer;
    color: ${colors.white};
    font-weight: 600;
    font-size: .9rem;
    transition: all .2s ease-in;

    &:hover {
      background-color: #1c934d;
    }

    &:active {
      background-color: #41d77d;
    }
  }

  .delete {
    background-color: ${colors.red};
    margin-left: 10px;

    &:hover {
      background-color: #fd2e1c;
    }

    &:active {
      background-color: #fe5b4d;
    }
  }
`;
