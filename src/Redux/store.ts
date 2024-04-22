import {Store, configureStore} from "@reduxjs/toolkit";
import componentSlice from "./componentSlice.ts";
import {RootState} from "../types/types.ts";

const store: Store<RootState> = configureStore({
  reducer: {
    componentSlice
  }
})

export default store