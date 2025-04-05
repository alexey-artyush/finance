import { getExpensesThunk } from 'entities/expense/model';
import { ShowStatisticF } from 'features';
import { useEffect, useMemo } from 'react';
import { View } from 'react-native';
import { useAppDispatch, useTheme } from 'shared/hooks';
import { createStyles } from './ExpenseIncomeW.styles';

export const ExpenseIncomeW = () => {
  const { currentTheme } = useTheme();
  const styles = useMemo(() => createStyles(currentTheme), [currentTheme]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getExpensesThunk());
  }, []);

  return (
    <View style={styles.expenseIncomeW}>
      <ShowStatisticF />
    </View>
  );
};
