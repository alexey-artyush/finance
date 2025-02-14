import { useCallback } from 'react';
import { appActions, getCurrentTheme } from 'entities/app';
import { ETheme } from 'entities/app/model/types/e-theme';
import { useAppDispatch } from 'appliaction/providers/store';
import { useSelector } from 'react-redux';
import { uiThemeHelper } from 'shared/lib';
import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';

const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#006AF5',
    secondary: '#2B2D33',
  },
};

const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#2196F3',
    secondary: '#FFFFFF',
  },
};

export const useTheme = () => {
  const dispatch = useAppDispatch();
  const currentThemeType = useSelector(getCurrentTheme);
  
  const currentTheme = currentThemeType === ETheme.LIGHT ? lightTheme : darkTheme;

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