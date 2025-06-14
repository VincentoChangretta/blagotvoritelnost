import { useDispatch } from 'react-redux';
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { currentGoalReducer } from 'entities/CurrentGoal';

export const createReduxStore = (initialState?: StateSchema) => {
   const rootReducers: ReducersMapObject<StateSchema> = {
      currentGoal: currentGoalReducer,
   };

   return configureStore<StateSchema>({
      reducer: rootReducers,
      devTools: true,
      preloadedState: initialState,
   });
};

// Определяем тип хранилища
type StoreType = ReturnType<typeof createReduxStore>;
type AppDispatch = StoreType['dispatch'];

// Кастомный хук useAppDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
