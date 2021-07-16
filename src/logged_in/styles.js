import styled from 'styled-components';

const Body = styled.div`
  .container, .sidebar-hidden {
    padding: 2rem;
  }

  .container {
    margin-left: 15rem;
    transition: margin-left .5s ease-in;
  }

  .sidebar-hidden {
    margin-left: 5rem;
    transition: margin-left .5s ease-in;
  }
`;

export default Body;
