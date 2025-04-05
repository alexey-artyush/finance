import { Pressable, Text, View } from 'react-native';
import { IExpense } from '../../model/types/i-expense';
import { useTheme } from 'shared/hooks';
import { useMemo } from 'react';
import { createStyles } from './ExpenseItem.styles';

interface IProps {
  expense: IExpense;
  onPress: (expense: IExpense) => void;
  currentExpense: boolean;
}

export const ExpenseItem = ({ expense, onPress, currentExpense }: IProps) => {
  const { currentTheme } = useTheme();
  const styles = useMemo(() => createStyles(currentTheme), [currentTheme]);

  return (
    <Pressable onPress={() => onPress(expense)}>
      <View style={[styles.container, currentExpense && styles.activeContainer]}>
        <View style={styles.circle} />
        <Text style={styles.title}>{expense.title}</Text>
      </View>
    </Pressable>
  );
};
