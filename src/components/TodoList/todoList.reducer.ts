import { createReducer } from "@reduxjs/toolkit";
const initState = {
  todoList: [
    { name: "Learn React", priority: "High" },
    { name: "Learn Redux", priority: "Medium" },
    { name: "Learn RTK", priority: "Low" },
  ],
};

const todoListReducer = createReducer(initState, (builder) => {});
export default todoListReducer;
