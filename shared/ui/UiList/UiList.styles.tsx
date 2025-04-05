import { StyleSheet } from 'react-native';
import { MD3Theme } from 'react-native-paper';

export const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    uiList: {
      marginTop: 20,
      width: '100%',
      height: '100%',
      backgroundColor: theme.colors.surfaceVariant,
    },
    listItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.outlineVariant,
    },
    listContent: {
      paddingHorizontal: 12,
    },
    leftSection: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconContainer: {
      width: 36,
      height: 36,
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
    },
    name: {
      fontSize: 16,
      fontWeight: '500',
      color: theme.colors.onSurface,
    },
    rightSection: {
      alignItems: 'flex-end',
    },
    percentage: {
      fontSize: 14,
      marginBottom: 4,
    },
    amount: {
      fontSize: 14,
      fontWeight: '600',
      color: theme.colors.onSurfaceVariant,
    },
  });
