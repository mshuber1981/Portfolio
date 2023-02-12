// https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#using-configurestore
import { configureStore } from "@reduxjs/toolkit";
//Reducers
import allProjectsReducer from "./pages/allProjectsSlice";

export const store = configureStore({
  reducer: {
    allProjects: allProjectsReducer,
  },
});
