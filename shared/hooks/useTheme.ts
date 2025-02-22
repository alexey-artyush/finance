import { useCallback } from 'react';
import { appActions, getCurrentTheme } from 'entities/app';
import { ETheme } from 'entities/app/model/types/e-theme';
import { useSelector } from 'react-redux';
import { uiThemeHelper } from 'shared/lib';
import { MD3DarkTheme, MD3LightTheme, MD3Theme } from 'react-native-paper';
import { useAppDispatch } from './useAppDispatch';

export const useTheme = (): {
  currentTheme: MD3Theme;
  currentThemeType: ETheme;
  toggleTheme: () => Promise<void>;
  loadSavedTheme: () => Promise<void>;
} => {
  const dispatch = useAppDispatch();
  const currentThemeType = useSelector(getCurrentTheme);
  
  const currentTheme = currentThemeType === ETheme.LIGHT ? MD3LightTheme : MD3DarkTheme;

  const toggleTheme = useCallback(async () => {
    const newTheme = currentThemeType === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT;
    dispatch(appActions.setTheme(newTheme));
    await uiThemeHelper.save(newTheme);
  }, [currentThemeType, dispatch]);

  const loadSavedTheme = useCallback(async () => {
    try {
      const savedTheme = await uiThemeHelper.load();
      if (savedTheme) {
        dispatch(appActions.setTheme(savedTheme));
      }
    } catch (error) {
      console.error('Failed to load theme:', error);
    }
  }, [dispatch]);

  return { 
    currentTheme,
    currentThemeType,
    toggleTheme, 
    loadSavedTheme 
  };
};
