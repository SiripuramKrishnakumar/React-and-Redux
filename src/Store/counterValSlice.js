import { createSlice } from "@reduxjs/toolkit";

const getCounterVal = () =>
{
    const counterVal = localStorage.getItem('counterVal');
    if(counterVal !== null && !isNaN(counterVal) && counterVal !== undefined && parseInt(counterVal) >= 0)
    {
        return parseInt(counterVal);
    }
    else
    {
        return 0;
    }
}


const initialState = {
    counterVal:  getCounterVal()
  };


const counterValSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    incrementCounterVal(state, action) {
      var payload = action.payload;
      state.counterVal += parseInt(payload);
      localStorage.setItem('counterVal',state.counterVal);
    },
    decrementCounterVal(state, action) {
      var payload = action.payload;
      state.counterVal -= parseInt(payload);
      localStorage.setItem('counterVal',state.counterVal);
    },
  },
});

export const counterActions = counterValSlice.actions;

export default counterValSlice.reducer;
