import styled from "styled-components";

export default styled.header`
  height: 8vh;
  h1 {
    text-align: center;
    padding-top: 0.5rem;
    color: var(--main-color);
    font-weight: bold;
    font-size: 2rem;
    font-family: var(--title-font);
    letter-spacing: 0rem;
  }
  nav {
    display: none;
  }
  @media screen and (min-width: 800px) {
    height: 24vh;
    h1 {
      font-size: 5rem;
      vertical-align: middle;
    }
    nav {
      display: block;
    }
  }
`;
