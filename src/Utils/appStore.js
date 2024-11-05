import { configureStore } from "@reduxjs/toolkit";
import uReducer from "./toDoSlice";
//taking reducer by like this what's ever name you have to give it but import frome the slice.js

const appStore = configureStore({
  reducer: {
    user: uReducer,
  },
});

export default appStore;

// whenever we wants to read the state we need to useSelector Hook
// into a component and this useSelector Hook is part of react-redux
// now make a const varible to store the variable
// const user = useSelector((store) => store[this is our main store for].
//user[this is from our reducer from main appStore].items//[this is from slice.js])
