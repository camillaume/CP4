import styled from "styled-components";

export default styled.article`
  .container {
    display: flex;
    flex-wrap: wrap;
  }
  border: 2px solid var(--middle-green);
  width: 70vw;
  aspect-ratio: 3/4;
  margin: 1em auto;

  picture,
  img {
    width: 100%;
  }
  figure,
  div {
    height: 50%;
    overflow: hidden;
  }
  a {
    text-decoration: none;
    color: var(--main-color);
  }

  @media screen and (min-width: 800px) {
    width: 20vw;
    margin: 1em;
  }
`;
