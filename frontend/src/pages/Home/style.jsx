import styled from "styled-components";

export default styled.section`
  min-height: 84vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .welcome {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.9rem;
    text-align: center;
    margin: 0.5rem auto;
    line-height: 1.5em;
    p {
      padding-left: 0.5rem;
    }
  }
  @media screen and (min-width: 800px) {
    min-height: 76vh;
    .welcome {
      height: 3rem;
      width: 50vw;
      font-size: 1.1rem;
      display: flex;
      flex-direction: column;
      p {
        padding-left: 0.5rem;
      }
    }
  }
`;
