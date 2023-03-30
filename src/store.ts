import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./components/TodoList/todoList.slice";

export const store = configureStore({
  reducer: { todoListReducer: todoListReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
