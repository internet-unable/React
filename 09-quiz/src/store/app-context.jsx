import { createContext } from 'react';

export const AppContext = createContext({
    userAnswers: [],
    answerState: '',
    answerSelect:  () => {},
    answerSkip: () => {}
});