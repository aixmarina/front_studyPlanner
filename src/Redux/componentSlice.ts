import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";

interface State {
  selectedComponent: string
}

const initialState: State = {
  selectedComponent: 'Home',
}

const componentSlice: Slice<State> = createSlice({
  name: "componentSlice",
  initialState,
  reducers: {
    changeComponent: (state, action: PayloadAction<string>) => {
      state.selectedComponent = action.payload
    }
  }
})

export const { changeComponent } = componentSlice.actions
export default componentSlice.reducer