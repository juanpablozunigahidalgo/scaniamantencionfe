// src/reducers/rootReducer.ts

import { combineReducers } from 'redux';
import { SET_ANSWER } from '../actions/actions';

const initialState = {
  answer: '',
};

const answerReducer = (state = initialState.answer, action: any) => {
  switch (action.type) {
    case SET_ANSWER:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  answer: answerReducer,
});

export default rootReducer;