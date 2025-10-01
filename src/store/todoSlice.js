import { createSlice } from "@reduxjs/toolkit";

// Initialize the state object
const initialState = {
  heading: "Zoom notes",
  todoList: [], // array to hold the list of tasks
  completed: [], // array to hold completed tasks
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
      localStorage.setItem("tasks", JSON.stringify(state.todoList));
    },

    deleteTask: (state, action) => {
      state.todoList = state.todoList.filter(
        // remove the task with id value that matches the payload.id
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("tasks", JSON.stringify(state.todoList));
    },

    markTask: (state, action) => {
      // find the task with the  id value that matches the payload
      const task = state.todoList.find((item) => item.id === action.payload.id);
      if (task) {
        // toggle the boolean value using negation operator (!)
        // set true to false and false to true
        task.isComplete = !task.isComplete;
        if (task.isComplete) {
          state.completed.push(task);
        } else {
          state.completed = state.completed.filter((item) => item.id !== task.id);
        }
        localStorage.setItem("completedTasks", JSON.stringify(state.completed));
      }
    },

    editTask: (state, action) => {
      const task = state.todoList.find((item) => item.id === action.payload.id);
      // find the task with the  id value that matches the payload
      if (task) {
        // edit the content value of the task
        task.content = action.payload.newTaskContent;
        localStorage.setItem("tasks", JSON.stringify(state.todoList));
      }
    },
  },
});

export const { addTask, deleteTask, editTask, markTask } = todoSlice.actions;
export default todoSlice.reducer;
