import { Question as IQuestion } from "../domain/question.entity";
import { Button } from "../styled-components/button.styled";
import { QuestionContainer } from "../styled-components/question.styled";
import { Space } from "../styled-components/space.styled";
interface Props extends IQuestion{
  numTotalQuestions: number;
  currentQuestion: number;
  handleYesAnswer:() => void
  handleNoAnswer:() => void
}

const Question = ({
  id,
  value,
  currentQuestion,
  numTotalQuestions,
  handleNoAnswer,
  handleYesAnswer
}: Props) => {
 
  return (
    <QuestionContainer>
      <span>
        {currentQuestion + 1}/{numTotalQuestions}
      </span>
      <h3>{value}</h3>
      <Space m="1rem" />
      <div>
        <Button isTrue onClick={handleYesAnswer}>
          SI
        </Button>
        <Button isTrue={false} onClick={handleNoAnswer}>
          NO
        </Button>
      </div>
    </QuestionContainer>
  );
};

export default Question;
