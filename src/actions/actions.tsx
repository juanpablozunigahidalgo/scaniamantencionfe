// src/actions/actions.ts

export const SET_ANSWER = 'SET_ANSWER';

export const setAnswer = (answer: string) => ({
  type: SET_ANSWER,
  payload: answer,
});