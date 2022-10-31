import { createSlice } from '@reduxjs/toolkit';

export default topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    icon: action.payload.icon,
                    quizIds: [] 
                }
            ]
        }
    }
})

export const selectTopics = state => state.topics;