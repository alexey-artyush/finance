import { MD3Theme } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    expenseIncomeW: {
      backgroundColor: theme.colors.background,
    },
    contentContainer: {
      flex: 1,
    },
    listWrapper: {
      flex: 1,
      width: '100%',
    },
    incomeText: {
      color: theme.colors.onSurface,
      fontSize: 16,
      padding: 16,
      textAlign: 'center',
    },
  });
