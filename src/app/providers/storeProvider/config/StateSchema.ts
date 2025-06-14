import { CurrentGoalSchema } from "entities/Testing/model/types/currentGoalSchema";

export interface StateSchema {
   currentGoal: CurrentGoalSchema;
}

export type StateSchemaKey = keyof StateSchema;
