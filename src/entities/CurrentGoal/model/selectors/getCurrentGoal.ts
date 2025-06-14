import { StateSchema } from 'app/providers/storeProvider';

export const getCurrentGoal = (state: StateSchema) => state.currentGoal.currentGoal;
