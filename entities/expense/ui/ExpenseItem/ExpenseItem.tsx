import { Pressable } from 'react-native';
import { IExpense } from '../../model/types/i-expense';

interface IProps {
  expense: IExpense;
  onPress: (expense: IExpense) => void;
  currentExpense: boolean;
}

export const ExpenseItem = ({ expense, onPress, currentExpense }: IProps) => {

  return (
    <Pressable onPress={() => onPress(expense)}>
      {/* <View style={[styles.container, currentExpense && styles.activeContainer]}>
        <View style={styles.circle} />
        <Text style={styles.title}>{expense.title}</Text>
      </View> */}
    </Pressable>
  );
};
