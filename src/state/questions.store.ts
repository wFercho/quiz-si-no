import { futbolQuestions, quizQuestions } from "../data";
import { QuestionAnswerd, ID } from "../domain/question.entity";
import {
  QuestionArrayToQuestionAnswerArray,
} from "../utils";

export const initialState: QuestionAnswerd[] =
  QuestionArrayToQuestionAnswerArray(quizQuestions);

export type QuestionsState = QuestionAnswerd[];

export type QuestionActionTypes = "response" | "get";

export type QuestionsActionType = {
  type: QuestionActionTypes;
  id: ID;
  answered: boolean | null;
};

export const questionsToAnswerdReducer = (
  state: QuestionsState,
  action: QuestionsActionType
): QuestionsState => {
  if (action.type === "response") {
    return state.map(question => {
      if(question.id === action.id){
        question.answered = action.answered
      }
      return question
    });
  }

  return state;
};
