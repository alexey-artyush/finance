import { IExpense } from 'entities/expense';
import { getExpenses, getExpensesThunk } from 'entities/expense/model';
import { IIncome } from 'entities/income';
import { AddExpense } from 'features/AddExpense/AddExpense';
import { FC, useEffect } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks';

interface IProps {
  selectedItem: IExpense | IIncome | null;
  setSelectedItem: (item: IExpense | IIncome | null) => void;
  currentTab: 'income' | 'expenses';
}

export const ChooseExpenseIncomeItem: FC<IProps> = ({
  selectedItem,
  setSelectedItem,
  currentTab,
}) => {
  const dispatch = useAppDispatch();
  const expenses = useSelector(getExpenses);

  useEffect(() => {
    dispatch(getExpensesThunk());
  }, []);

  return (
    <View>
      {currentTab === 'expenses' && <AddExpense expenses={expenses} />}
      {/* {currentTab === 'income' && <ListIncomeItem expenses={expenses} />} */}
    </View>
  );
};
