import { createSlice } from "@reduxjs/toolkit";
import { IAppState } from "../types/i-app-state";

const initialState: IAppState = {
  isDev: true,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
   
  },
});

export const { actions: appActions } = appSlice;
export const { reducer: appReducer } = appSlice;