import { useContext } from "react";
import { QuestionsToAnswerdContext } from "../state/questions.context";
import { QuestionsState } from "../state/questions.store";
import { ResultPageContainer } from "../styled-components/resultPageContainer.styled";
import { Space } from "../styled-components/space.styled";
import QuestionResponded from "./QuestionResponded";
import { Tittle } from "../styled-components/title.styled";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { reduceToAnswers } from "../utils";
import { DoughnutContainer } from "../styled-components/doughnutContainer.styled";

ChartJS.register(ArcElement, Tooltip, Legend);

const Results = () => {
  const questionsToAnswerd: QuestionsState = useContext(
    QuestionsToAnswerdContext
  );

  const reduceAnswers = reduceToAnswers(questionsToAnswerd);

  const data = {
    labels: ["Correctas", "Incorrectas"],
    datasets: [
      {
        label: "Resultados",
        data: reduceAnswers,
        backgroundColor: ["#4AAB55", "#F35453"],
      },
    ],
  };

  return (
    <ResultPageContainer>
      <Tittle>RESULTADOS</Tittle>
      <Space m="1rem" />
      <div>
        <div>
          {questionsToAnswerd.map(({ id, answered, answer, value }) => (
            <div key={id}>
              <QuestionResponded
                answer={answer}
                answered={answered}
                id={id}
                value={value}
              />
              <Space m="2rem" />
            </div>
          ))}
        </div>
        <DoughnutContainer>
          <h3>El total de preguntas es de {questionsToAnswerd.length}</h3>
          <Doughnut data={data} />
        </DoughnutContainer>
      </div>
    </ResultPageContainer>
  );
};

export default Results;
