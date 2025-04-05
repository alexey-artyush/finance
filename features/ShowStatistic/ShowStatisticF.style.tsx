import { MD3Theme } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    showStatisticF: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      gap: 16,
    },
    periodNavigator: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
    },
    periodContainer: {
      flex: 1,
      alignItems: 'center',
      padding: 8,
      backgroundColor: '#f5f5f5',
      borderRadius: 8,
      marginHorizontal: 16,
    },
    periodText: {
      textAlign: 'center',
    },
    arrowPlaceholder: {
      width: 24,
    },
    chartContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 220,
    },
  });
