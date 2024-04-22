import componentSlice from "../Redux/componentSlice";

export interface RootState {
  componentSlice: ReturnType<typeof componentSlice>
}
