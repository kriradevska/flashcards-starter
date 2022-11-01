import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicSlice";

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { quizId, name, topicId, cardIds} = action.payload;
            state.quizzes[quizId] = {
                id: quizId, 
                name: name,
                topicId: topicId,
                cardIds: cardIds
            }
        }
    }
});

export const addQuizzWithId = (props) => {
    return (dispatch) => {
        const { quizId, name, topicId, cardIds} = props;
        dispatch(quizzesSlice.actions.addQuiz(props));
        dispatch(addQuizId({ quizId: quizId, topicId: topicId }));
    }
}

export const selectQuizzes = state => state.quizzes.quizzes;

export const {
    addQuiz
} = quizzesSlice.actions;

export default quizzesSlice.reducer;