import styled from "styled-components";

export default styled.section`
  display: flex;
  flex-direction: column;

  input {
    width: 70vw;
    box-sizing: border-box;
    border: 1px solid var(--middle-green);
    border-radius: 6px;
    margin: auto;
    margin-top: 0.8rem;
  }
  select {
    width: 70vw;
  }

  @media screen and (min-width: 800px) {
    select {
      margin: 1.5rem auto;
      border-radius: 6px;
      height: 3rem;
      border: 2px solid var(--middle-green);
      color: var(--main-color);
    }
    input {
      margin: 1rem auto;
      height: 3rem;
      border: 2px solid var(--middle-green);
      color: var(--main-color);
    }
  }
`;
