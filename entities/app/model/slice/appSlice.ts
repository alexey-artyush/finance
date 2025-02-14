import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAppState } from "../types/i-app-state";
import { ETheme } from "../types/e-theme";

const initialState: IAppState = {
  isDev: true,
  theme: ETheme.LIGHT
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
   setTheme: (state, action: PayloadAction<ETheme>) => {
    state.theme = action.payload;
   }
  },
});

export const { actions: appActions } = appSlice;
export const { reducer: appReducer } = appSlice;