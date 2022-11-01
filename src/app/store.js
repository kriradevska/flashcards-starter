import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from '../features/topics/topicSlice.js';
import quizzesReducer from '../features/quizzes/quizzesSlice';

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesReducer
  },
});
