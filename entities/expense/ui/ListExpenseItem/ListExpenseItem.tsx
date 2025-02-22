import { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { ExpenseItem } from '../ExpenseItem/ExpenseItem';
import { IExpense } from '../../model';

interface IProps {
  expenses: IExpense[];
}

export const ListExpenseItem: FC<IProps> = ({ expenses }) => {
  return (
    <View style={styles.container}>
      {expenses.map((expense) => (
        <View key={expense.id} style={styles.itemWrapper}>
          <ExpenseItem expense={expense} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: 10,
  },
  itemWrapper: {
    width: '28%',
    padding: 5,
  },
});
