import styled from "styled-components";

export const Button = styled.button<{ isTrue: boolean }>`
  padding: 17px 40px;
  border-radius: 50px;
  border: 0;
  background-color: ${(props) => (props.isTrue ? "#4AAB55" : "#F35453")};
  box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: 15px;
  transition: all 0.5s ease;
  color: white;
  cursor: pointer;
  font-weight: 800;

  &:hover {
    letter-spacing: 3px;
    background-color: ${(props) => (props.isTrue ? "#4AAB55" : "#F35453")};
    color: hsl(0, 0%, 100%);
    box-shadow: ${(props) => (props.isTrue ? "#4AAB55" : "#F35453")} 0px 7px 29px 0px;
  }

  &:active {
    letter-spacing: 3px;
    background-color: ${(props) => (props.isTrue ? "#4AAB55" : "#F35453")};
    color: hsl(0, 0%, 100%);
    box-shadow: rgb(93 24 220) 0px 0px 0px 0px;
    transform: translateY(10px);
    transition: 100ms;
  }
`;
