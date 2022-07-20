import styled from "styled-components";

export default styled.nav`
  .navbar {
    display: flex;
    justify-content: space-evenly;
    margin: auto;
    /* height: 7vh; */
    border-top: 2px solid var(--middle-green);
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
      a {
        text-decoration: none;
        font-family: var(--default-font);
        width: 50vw;
        img {
          display: block;
          margin: auto;
        }
      }
    }
  }
  @media screen and (min-width: 800px) {
    .navbar {
      display: flex;
      border-bottom: 2px solid var(--middle-green);
      border-top: 2px solid var(--middle-green);
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
    div {
      flex-direction: row;
    }
    a {
      height: 3rem;
    }
  }
`;
