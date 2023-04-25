import { ID, Question, QuestionAnswerd } from "../domain/question.entity";

export const QuestionArrayToQuestionAnswerArray = (
  questions: Question[]
): QuestionAnswerd[] => {
  return questions.map((question) => ({ ...question, answered: null }));
};


export const findQuestionAnswerd = (id:ID, questions:QuestionAnswerd[]) => questions.find((question) => question.id === id)

const numRightsAnswers = (questions:QuestionAnswerd[]) => questions.reduce((prev, curr) => {
  const right = curr.answer === curr.answered ? 1 : 0;

  return prev + right
}, 0)


export const reduceToAnswers = (questions:QuestionAnswerd[]) => {
  const numRights = numRightsAnswers(questions)
  return [numRights, (questions.length - numRights)]
}