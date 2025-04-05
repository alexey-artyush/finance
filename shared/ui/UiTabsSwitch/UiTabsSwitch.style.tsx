import { StyleSheet } from 'react-native';
import { MD3Theme } from 'react-native-paper';

export const createStyles = (theme: MD3Theme, size: 'm' | 'l') =>
  StyleSheet.create({
    container: {},
    buttonWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      gap: size === 'm' ? 10 : 20,
    },
    tabButton: {
      padding: size === 'm' ? 8 : 16,
    },
    tabText: {
      fontSize: size === 'm' ? 16 : 24,
      color: theme.colors.outline,
    },
    activeTabText: {
      textDecorationLine: 'underline',
      color: theme.colors.primary,
    },
  });
