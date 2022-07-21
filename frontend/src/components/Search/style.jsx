import styled from "styled-components";

export default styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  input {
    box-sizing: border-box;
    width: 345px;
    height: 48px;
    border: 1px solid #071540;
    border-radius: 6px;
    /* Inside auto layout */
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
  }
`;
