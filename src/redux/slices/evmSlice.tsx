import { createSlice } from "@reduxjs/toolkit";

export const evmSlice = createSlice({
  name: "misc",
  initialState: {
    address: "",
    callTrigger: 0,
  },
  reducers: {
    setAddress: (state: any, action) => {
      state.address = action.payload;
    },
    setCallTrigger: (state: any) => {
      state.callTrigger = state.callTrigger + 1;
    },
  },
});

export const { setAddress, setCallTrigger } = evmSlice.actions;
export default evmSlice.reducer;
