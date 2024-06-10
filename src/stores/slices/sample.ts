import { createSlice } from "@reduxjs/toolkit";

const initialState: IState = {
  tasks: [],
};

interface IState {
  tasks: ITask[];
}

interface ITask {
  id: number;
  text: string;
}
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload });
    },
    deleteTodo: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
