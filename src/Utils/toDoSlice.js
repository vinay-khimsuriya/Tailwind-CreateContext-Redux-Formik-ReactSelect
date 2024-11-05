import { createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    id: "",
  },
  reducers: {
    addUser: (state, action) => {
      state.items.push(action.payload);
    },
    removeUser: (state, action) => {
      state.items.pop();
    },
    testAdd: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { addUser, removeUser, testAdd } = toDoSlice.actions;

export default toDoSlice.reducer; //export like this
