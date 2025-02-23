import { StyleSheet } from 'react-native';
import { MD3Theme } from 'react-native-paper';

export const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      width: '100%',
      padding: 16,
      alignItems: 'center',
    },
    inputContainer: {
      width: '65%',
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 2,
      borderColor: theme.colors.outline,
    },
    input: {
      flex: 1,
      height: 'auto',
      textAlign: 'center',
      fontSize: 22,
      color: theme.colors.outline,
    },
    currencyButton: {
      paddingHorizontal: 8,
      height: 'auto',
      justifyContent: 'center',
    },
    currencyText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.colors.primary,
    },
    currencyList: {
      position: 'absolute',
      right: '25%',
      backgroundColor: theme.colors.background,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: theme.colors.outline,
      padding: 8,
      elevation: 5,
      shadowColor: theme.colors.outline,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    currencyItem: {
      padding: 8,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.outline,
    },
    currencyItemText: {
      color: theme.colors.outline,
      fontSize: 16,
    },
    selectedCurrencyItem: {
      backgroundColor: `${theme.colors.primary}20`,
    },
    selectedCurrencyText: {
      color: theme.colors.primary,
      fontWeight: 'bold',
    },
  });
