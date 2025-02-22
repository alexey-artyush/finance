import { StyleSheet } from 'react-native';
import { MD3Theme } from 'react-native-paper';

export const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {},
    buttonWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
    },
    tabButton: {
      padding: 8,
    },
    tabText: {
      fontSize: 16,
      color: theme.colors.outline,
    },
    activeTabText: {
      textDecorationLine: 'underline',
      color: theme.colors.primary,
    },
  });
