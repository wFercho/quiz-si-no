import React from "react";
import { ID } from "../domain/question.entity";
import { QuestionAnswered } from "../styled-components/questionAnswered.styled";

interface Props {
  id: ID;
  value: string;
  answer: boolean;
  answered: boolean | null;
}

const QuestionResponded = ({ id, answer, answered, value }: Props) => {
  if (answered === null){
    return <QuestionAnswered isTrue={answered}><p>{value}</p><p>NO SE HA RESPONDIDO A ESTA PREGUNTA</p></QuestionAnswered>;
  }
  return <QuestionAnswered isTrue={answer === answered}><p>{value}</p><span>Su respuesta fue: {answered ? "VERDADERO":"FALSO"}</span></QuestionAnswered>;
};

export default QuestionResponded;
