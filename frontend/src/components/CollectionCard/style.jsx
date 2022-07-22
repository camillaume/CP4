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
  figure {
    height: 70%;
    overflow: hidden;
  }
  div {
    height: 30%;
    overflow: hidden;
  }
  a {
    text-decoration: none;
    color: var(--main-color);
  }
  h3,
  h4,
  p {
    margin-top: 0.5rem;
  }

  @media screen and (min-width: 800px) {
    width: 20vw;
    margin: 1em;
  }
`;
