import { IAppState } from "../types/i-app-state";

export const getAppState = (state: IRootState): IAppState => state.app;