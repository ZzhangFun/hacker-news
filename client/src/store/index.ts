import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { newsReducer } from "./reducers/newsReducer";

const rootReducer = combineReducers({
  news: newsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));
