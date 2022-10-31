import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from '../features/topics/topicSlice.js';

export default configureStore({
  reducer: {
    topics: topicsReducer
  },
});
