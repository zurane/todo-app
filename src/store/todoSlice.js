import { createSlice } from "@reduxjs/toolkit";

// Initialize the state object
const initialState = {
  heading: "Zoom notes",
  todoList: [
    {
      content: "This is the first task",
      id: Date.now() + Math.random(),
      isComplete: false,
    },
    {
      content: "This is the second task",
      id: Date.now() + Math.random(),
      isComplete: false,
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        // Generate an id number for the new task
        id: Date.now() + Math.random(),
        content: action.payload.text,
        isComplete: false,
      };
      // insert the new task in the existing list of tasks
      state.todoList.push(newTask);
    },
    deleteTask: (state, action) => {
      state.todoList = state.todoList.filter(
        // remove the task with id value that matches the payload.id
        (item) => item.id !== action.payload.id
      );
    },
    markTask: (state, action) => {
      // find the task with the  id value that matches the payload
      const task = state.todoList.find((item) => item.id === action.payload.id);
      if (task) {
        // toggle the boolean value using negation operator (!)
        // set true to false and false to true
        task.isComplete = !task.isComplete;
      }
    },
    editTask: (state, action) => {
      const task = state.todoList.find((item) => item.id === action.payload.id);
      // find the task with the  id value that matches the payload
      if (task) {
        // edit the content value of the task
        task.content = action.payload.newTaskContent;
      }
    },
  },
});

export const { addTask, deleteTask, editTask, markTask } = todoSlice.actions;
export default todoSlice.reducer;
