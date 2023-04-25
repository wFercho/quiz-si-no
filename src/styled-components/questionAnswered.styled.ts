import styled from "styled-components";

export const QuestionAnswered = styled.div<{ isTrue: boolean | null }>`
  background-color: ${(props) => (props.isTrue === null ? "white" : (props.isTrue ? "#4AAB55":"#F35453"))};
  width: 400px;
  height: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.isTrue === null ? "#2C2B28" : "#F6F5F3")};;
  padding:0 2rem;
  border-radius: 12px;
  font-size: medium;
  & span {
    font-weight: 900;
  }
`;
