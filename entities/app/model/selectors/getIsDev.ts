import { createSelector } from "@reduxjs/toolkit";
import { getAppState } from "./getAppState";

export const getIsDev = createSelector(getAppState, (appState): boolean => appState.isDev)