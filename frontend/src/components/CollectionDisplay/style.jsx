import styled from "styled-components";

export default styled.section`
  min-height: 86vh;
  overflow: scroll;

  @media screen and (min-width: 800px) {
    min-height: 75vh;
    .parent {
      display: flex;
    }
  }
`;
