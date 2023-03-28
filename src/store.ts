import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "./components/TodoList/todoList.reducer";

export const store = configureStore({
  reducer: { todoListReducer: todoListReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
