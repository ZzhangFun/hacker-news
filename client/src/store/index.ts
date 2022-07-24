import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { newsAPI } from "../API/NewsService";

const rootReducer = combineReducers({
  [newsAPI.reducerPath]: newsAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(newsAPI.middleware),
  });
};
