import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrentGoalSchema } from '../types/currentGoalSchema';
import { GoalsDataType } from '../../data/data';

const initialState: CurrentGoalSchema = {
   currentGoal: null,
};

export const currentGoalSlice = createSlice({
   name: 'currentGoal',
   initialState,
   reducers: {
      add: (state, action: PayloadAction<GoalsDataType>) => {
         state.currentGoal = action.payload;
      },
   },
});

export const { actions: currentGoalActions } = currentGoalSlice;
export const { reducer: currentGoalReducer } = currentGoalSlice;
