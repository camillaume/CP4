import styled from "styled-components";

export default styled.section`
  height: 84vh;
  .welcome {
    font-family: var(--title-font);
    position: center;
  }
  @media screen and (min-width: 800px) {
    height: 76vh;
    .welcome {
      font-family: var(--title-font);
      margin: auto;
      height: 5rem;
      width: 50vw;
      font-size: 2rem;
      display: flex;
      flex-direction: column;
    }
  }
`;
