import { StyleSheet } from 'react-native';
import { MD3Theme } from 'react-native-paper';

export const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      marginTop: 20,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      gap: 10,
      position: 'relative',
    },
    expensesContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      gap: 10,
      marginTop: 20,
      position: 'relative',
    },
    itemWrapper: {
      width: '28%',
      padding: 5,
    },
    amountContainer: {
      width: '100%',
      padding: 16,
      alignItems: 'center',
    },
    input: {
      color: theme.colors.primary,
      width: '50%',
      height: 60,
      borderBottomWidth: 1,
      textAlign: 'center',
      borderColor: theme.colors.secondary,
      borderRadius: 8,
      fontSize: 22,
      paddingHorizontal: 10,
    },
    datesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingHorizontal: 16,
      paddingVertical: 8,
      marginTop: 16,
    },
    dateItem: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 5,
      backgroundColor: theme.colors.background,
      borderWidth: 1,
      borderColor: theme.colors.secondary,
    },
    selectedDateItem: {
      backgroundColor: theme.colors.primary,
      borderColor: theme.colors.primary,
    },
    dateText: {
      fontSize: 16,
      color: theme.colors.primary,
    },
    selectedDateText: {
      color: theme.colors.background,
      fontWeight: 'bold',
    },
    errorText: {
      position: 'absolute',
      color: theme.colors.error,
      fontSize: 12,
      marginTop: 4,
      textAlign: 'center',
    },
    expenseError: {
      position: 'absolute',
      color: theme.colors.error,
      fontSize: 12,
      width: '100%',
      textAlign: 'center',
      bottom: -5,
    },
    submitButton: {
      backgroundColor: theme.colors.primary,
      paddingVertical: 16,
      paddingHorizontal: 32,
      borderRadius: 12,
      margin: 'auto',
      marginBottom: 4,
      marginTop: 'auto',
      opacity: 0.98,
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
    },
    submitButtonText: {
      color: theme.colors.background,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
