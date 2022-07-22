import styled from "styled-components";

export default styled.section`
  min-height: 84vh;
  display: flex;
  flex-direction: column;
  width: 60vw;
  margin: auto;
  text-align: center;
  h2 {
    padding: 2rem 0;
  }
  @media screen and (min-width: 800px) {
    min-height: 76vh;
    width: 40vw;
  }
`;
