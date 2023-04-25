import { createContext } from "react";
import { QuestionsState } from "./questions.store";

export const QuestionsToAnswerdContext = createContext<any>(null)
export const QuestionsToAnswerdDispatchContext = createContext<any>(null)