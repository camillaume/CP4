import styled from "styled-components";

export default styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  input {
    width: 50vw;
    box-sizing: border-box;
    border: 1px solid var(--middle-green);
    border-radius: 6px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 1;
  }
  select {
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;
  }
  @media screen and (min-width: 800px) {
    select {
      margin: 1rem auto;
      height: 4rem;
      border: 2px solid var(--middle-green);
      color: var(--main-color);
    }
    input {
      margin: 1rem auto;
      height: 4rem;
      border: 2px solid var(--middle-green);
      color: var(--main-color);
    }
  }
`;
