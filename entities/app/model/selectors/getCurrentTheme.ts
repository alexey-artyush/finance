import { createSelector } from "@reduxjs/toolkit";
import { getAppState } from "./getAppState";
import { ETheme } from "../types/e-theme";

export const getCurrentTheme = createSelector(getAppState, (appState): ETheme => appState.theme)