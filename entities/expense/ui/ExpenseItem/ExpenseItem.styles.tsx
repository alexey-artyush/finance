import { StyleSheet } from 'react-native';
import { MD3Theme } from 'react-native-paper';

export const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      padding: 8,
      borderRadius: 8,
    },
    activeContainer: {
      backgroundColor: theme.colors.elevation.level5,
    },
    circle: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: theme.colors.primary,
      marginBottom: 8,
    },
    title: {
      fontSize: 14,
      color: theme.colors.primary,
    },
  });
