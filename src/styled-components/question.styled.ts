import styled from "styled-components";

export const QuestionContainer = styled.article`
  border: 2px solid #c3c6ce;
  border-radius: 20px;
  background-color: #F8FAFB;
  width: 600px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
  color:#2C2B28;

  & span {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    font-weight: bold;
  }
  & h3 {
    height: 40px;
    width: 80%;
  }

  & div {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }
`;
