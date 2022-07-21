import styled from "styled-components";

export default styled.form`
  fieldset {
    padding-block-start: 0.35em;
    padding-inline-start: 0.75em;
    padding-inline-end: 0.75em;
    padding-block-end: 0.625em;
    border-width: 2px;
    border-style: groove;
    border-color: var(--blue-color);
    border-image: initial;
    width: 70vw;
  }
  input {
    width: 100%;
    margin-top: 1.5rem;
    height: 1.7rem;
  }
  input[type="submit"] {
    background-color: var(--flashy-color);
    border-color: var(--flashy-color);
    border-radius: 15px;
  }
  @media screen and (min-width: 800px) {
    fieldset {
      width: 35vw;
    }
  }
`;
