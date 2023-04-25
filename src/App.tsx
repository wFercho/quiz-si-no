import { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import QuestionLogicContainer from "./components/QuestionLogicContainer";
import Results from "./components/Results";
import {
  QuestionsToAnswerdContext,
  QuestionsToAnswerdDispatchContext,
} from "./state/questions.context";
import {
  initialState,
  questionsToAnswerdReducer,
} from "./state/questions.store";
import { AppContainer } from "./styled-components/appContainer.styled";

function App() {
  const [questionsToAnswerd, dispatch] = useReducer(
    questionsToAnswerdReducer,
    initialState
  );

  return (
    <AppContainer>
      <QuestionsToAnswerdContext.Provider value={questionsToAnswerd}>
        <QuestionsToAnswerdDispatchContext.Provider value={dispatch}>
          <Routes>
            <Route path="/" element={<QuestionLogicContainer />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </QuestionsToAnswerdDispatchContext.Provider>
      </QuestionsToAnswerdContext.Provider>
    </AppContainer>
  );
}

export default App;
