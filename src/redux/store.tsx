import { configureStore } from "@reduxjs/toolkit";
import { evmSlice } from "./slices/evmSlice";

const store = configureStore({
  reducer: {
    evm: evmSlice.reducer,
  },
});

export default store;
