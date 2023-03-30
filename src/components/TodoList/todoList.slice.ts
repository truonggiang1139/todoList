import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { typeTodo } from "../../types/todo.type";

type todoListState = {
  todoList: typeTodo[];
};
const initState: todoListState = {
  todoList: [
    { id: "1", name: "Learn React", priority: "High", checked: false },
    { id: "2", name: "Learn Redux", priority: "Medium", checked: false },
    { id: "3", name: "Learn RTK", priority: "Low", checked: false },
  ],
};
const todoListSlice = createSlice({
  name: "todoList",
  initialState: initState,
  reducers: {
    addTodo: (state, action: PayloadAction<typeTodo>) => {
      state.todoList.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
});

export const { addTodo, deleteTodo } = todoListSlice.actions;
const todoListReducer = todoListSlice.reducer;
export default todoListReducer;
// export const addTodo = createAction<typeTodo>("todoList/addTodo");
// export const deleteTodo = createAction<string>("todoList/deleteTodo");
// const todoListReducer = createReducer(initState, (builder) => {
//   builder
//     .addCase(addTodo, (state, action) => {
//       state.todoList.push(action.payload);
//     })
//     .addCase(deleteTodo, (state, action) => {
//       state.todoList = state.todoList.filter(
//         (todo) => todo.id !== action.payload
//       );
//     });
// });
// export default todoListReducer;
