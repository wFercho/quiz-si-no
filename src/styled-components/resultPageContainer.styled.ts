import styled from "styled-components";

export const ResultPageContainer = styled.div`
  display: flex;
  flex-direction:column;
  background-color: rgba(240,240,240, 1);
  width: 100%;

  & > div {
    display: flex;
    justify-content: center;
    gap: 12rem;
  }
`;
