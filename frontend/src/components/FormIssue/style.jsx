import styled from "styled-components";

export default styled.form`
  display: flex;
  flex-direction: column;
  fieldset {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  input {
    width: 70vw;
    height: 1.5rem;
    box-sizing: border-box;
    border: 1px solid var(--main-color);
    border-radius: 6px;
    margin: 0.5rem auto;
    color: var(--main-color);
  }
  select {
    width: 70vw;
    height: 1.5rem;
    box-sizing: border-box;
    border: 1px solid var(--main-color);
    border-radius: 6px;
    margin: 0.5rem auto;
    color: var(--main-color);
  }
  @media screen and (min-width: 800px) {
    input {
      width: 60vw;
      margin: 0.7rem auto;
      height: 2rem;
      border: 1px solid var(--main-color);
    }
    select {
      color: var(--main-color);
      width: 60vw;
      margin: 0.7rem auto;
      height: 2rem;
      border: 1px solid var(--main-color);
    }
  }
`;
