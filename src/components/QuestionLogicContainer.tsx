import { useContext, useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsFillArrowUpRightCircleFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  QuestionsToAnswerdContext,
  QuestionsToAnswerdDispatchContext,
} from "../state/questions.context";

import { ButtonsContainer } from "../styled-components/nextPrevButtonsContainer.styled";
import { Space } from "../styled-components/space.styled";
import Question from "./Question";
import { HomePageContainer } from "../styled-components/homePageContainer.styled";
import { QuestionAnswerd } from "../domain/question.entity";

const QuestionLogicContainer = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questionsToAnswerd: QuestionAnswerd[] = useContext(
    QuestionsToAnswerdContext
  );
  const dispatch = useContext(QuestionsToAnswerdDispatchContext);

  const handleNextQuestion = () => {
    if (currentQuestion === questionsToAnswerd.length - 1) return;
    setCurrentQuestion((prev) => prev + 1);
  };

  const handlePrevQuestion = () => {
    if (currentQuestion === 0) return;
    setCurrentQuestion((prev) => prev - 1);
  };

  const handleYesAnswer = () => {
    const id = questionsToAnswerd[currentQuestion].id;
    dispatch({ type: "response", id, answered: true });
    handleNextQuestion();
  };

  const handleNoAnswer = () => {
    const id = questionsToAnswerd[currentQuestion].id;
    dispatch({ type: "response", id, answered: false });
    handleNextQuestion();
  };

  return (
    <>
      <QuestionsToAnswerdContext.Provider value={questionsToAnswerd}>
        <QuestionsToAnswerdDispatchContext.Provider value={dispatch}>
          <HomePageContainer>
            <Question
              currentQuestion={currentQuestion}
              numTotalQuestions={questionsToAnswerd.length}
              id={questionsToAnswerd[currentQuestion].id}
              key={questionsToAnswerd[currentQuestion].id}
              value={questionsToAnswerd[currentQuestion].value}
              answer={questionsToAnswerd[currentQuestion].answer}
              handleYesAnswer={handleYesAnswer}
              handleNoAnswer={handleNoAnswer}
            />

            <Space m="5rem" />
            <ButtonsContainer>
              <button
                disabled={currentQuestion === 0}
                onClick={handlePrevQuestion}
              >
                <BsFillArrowLeftCircleFill />
                ANTERIOR
              </button>

              {currentQuestion === questionsToAnswerd.length - 1 ? (
                <button
                  disabled={
                    questionsToAnswerd[currentQuestion].answered === null
                  }
                >
                  <Link to="/results">FINALIZAR</Link>
                  <BsFillArrowUpRightCircleFill />
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  disabled={
                    questionsToAnswerd[currentQuestion].answered === null
                  }
                >
                  SIGUIENTE
                  <BsFillArrowRightCircleFill />
                </button>
              )}
            </ButtonsContainer>
          </HomePageContainer>
        </QuestionsToAnswerdDispatchContext.Provider>
      </QuestionsToAnswerdContext.Provider>
    </>
  );
};

export default QuestionLogicContainer;
