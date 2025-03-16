import { StyleSheet } from 'react-native';
import { MD3Theme } from 'react-native-paper';

export const createStyles = (theme: MD3Theme) => {
  return StyleSheet.create({
    uiChart: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: 220,
      backgroundColor: theme.colors.background,
    },
  });
};
