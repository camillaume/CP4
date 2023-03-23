import styled from "styled-components";

export default styled.header`
  height: 8vh;
  a {
    text-decoration: none;
  }
  h1 {
    text-align: center;
    font-family : var(--title-font)
    padding-top: 0.7rem;
    color: var(--main-color);
    font-weight: bold;
    font-size: 2.2rem;
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
