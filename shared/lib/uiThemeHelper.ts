import AsyncStorage from '@react-native-async-storage/async-storage';
import { ETheme } from 'entities/app';

const THEME_KEY = 'app_theme';

export const uiThemeHelper = {
  async save(theme: ETheme): Promise<void> {
    await AsyncStorage.setItem(THEME_KEY, theme);
  },

  async load(): Promise<ETheme | null> {
    return AsyncStorage.getItem(THEME_KEY) as Promise<ETheme | null>;
  }
};