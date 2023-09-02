// import { createStore } from "redux";
// ///// install redux before using this old code.
// // const redux = require("redux");

// const counterReducer = (state = { counter: 0 }, action) => {
//   if (action.type === "Increment" && parseInt(action.val) > 0) {
//     return {
//       counter: state.counter + parseInt(action.val),
//     };
//   }
//   if (action.type === "Decrement" && parseInt(action.val) > 0) {
//     return {
//       counter: state.counter - parseInt(action.val),
//     };
//   }
//   return state;
// };

// //const store = redux.createStore(counterReducer);
// const store = createStore(counterReducer);

// export default store;


// redux with redux-toolkit



import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterValSlice';

const store = configureStore({
  reducer: {'counter': counterReducer }
})

export default store;