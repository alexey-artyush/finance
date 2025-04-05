import { useMemo } from 'react';
import { View } from 'react-native';
import { ExpenseIncomeLayout } from 'shared/ui';
import { createStyles } from './add-transaction.styles';
import { useTheme } from 'shared/hooks';
import { AddExpenseW } from 'widgets/AddExpense';

export default function AddTransaction() {
  const { currentTheme } = useTheme();
  const styles = useMemo(() => createStyles(currentTheme), [currentTheme]);

  const expenses = [
    {
      id: '1',
      title: 'Transaction 1',
      categoryId: '1',
      description: 'Description 1',
    },
    {
      id: '2',
      title: 'Transaction 2',
      categoryId: '2',
      description: 'Description 2',
    },
    {
      id: '3',
      title: 'Transaction 3',
      categoryId: '3',
      description: 'Description 3',
    },
  ];

  return (
    <View style={styles.addTransaction}>
      <ExpenseIncomeLayout>
        <AddExpenseW expenses={expenses} />
      </ExpenseIncomeLayout>
    </View>
  );
}
