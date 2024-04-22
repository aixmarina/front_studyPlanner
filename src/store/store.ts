import {Store, configureStore} from "@reduxjs/toolkit";
import {RootState} from "../types/types.ts";
import componentSlice from "./componentSlice.ts";

const store: Store<RootState> | void = configureStore({
  reducer: {
    componentSlice
  }
})

export default store