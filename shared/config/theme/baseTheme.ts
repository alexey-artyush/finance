import { MD3LightTheme } from 'react-native-paper';

export const baseTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#006AF5',
    secondary: '#2B2D33',
    background: '#FFFFFF',
    surface: '#F5F5F5',
    error: '#B00020',
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
  },
  roundness: 8,
};