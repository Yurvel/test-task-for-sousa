import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {MOVIES_NS,moviesReducer} from "./moviesSlice"


export const store = configureStore({
    reducer: {
      [ MOVIES_NS ]: moviesReducer,
    },
  });
  
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;
  export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
  >;