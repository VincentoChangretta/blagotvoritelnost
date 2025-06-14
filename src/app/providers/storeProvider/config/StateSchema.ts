import type { CurrentGoalSchema } from 'entities/CurrentGoal';

export interface StateSchema {
   currentGoal: CurrentGoalSchema;
}

export type StateSchemaKey = keyof StateSchema;
