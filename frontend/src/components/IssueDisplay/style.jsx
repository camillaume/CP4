import styled from "styled-components";

export default styled.section`
  min-height: 86vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  /* justify-content: flex-start; */
  .void {
    justify-content: flex-start;
    p {
      margin-bottom: 0.5rem;
    }
  }
  h2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .newElement {
    width: 50vw;
    height: 2rem;
    margin: 0 auto;
    background-color: var(--light-green);
    color: var(--main-color);
    border-radius: 6px;
  }
  @media screen and (min-width: 800px) {
    min-height: 75vh;
    .parent {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
    h2 {
      font-size: 1.3rem;
    }
    select {
      margin: 1rem auto;
      border-radius: 6px;
      height: 3rem;
      border: 2px solid var(--middle-green);
      color: var(--main-color);
    }
  }
`;
