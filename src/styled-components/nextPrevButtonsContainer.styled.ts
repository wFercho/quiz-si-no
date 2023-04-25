import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  height: 3rem;
  color: #2c2b28;
  & button:disabled a {
    text-decoration: none;
    color: gray;
    pointer-events: none;
    cursor: none;
  }

  & button a {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }

  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    cursor: pointer;
    border-radius: 10px;
    border: none;
    width: 8rem;
    font-weight: 600;
  }
`;
