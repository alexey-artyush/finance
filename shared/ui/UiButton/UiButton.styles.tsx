import { StyleSheet } from 'react-native';
import { MD3Theme } from 'react-native-paper';

export const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    uiButton: {
      marginVertical: 8,
      borderRadius: 8,
    },
    circleButton: {
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
    },
    circleButtonLabel: {
      height: 35,
      padding: 0,
      fontSize: 18,
      lineHeight: 18,
      textAlignVertical: 'center',
      textAlign: 'center',
    },
  });
