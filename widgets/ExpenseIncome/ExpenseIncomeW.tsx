import { getExpenses, getExpensesThunk } from 'entities/expense/model';
import { AddExpense } from 'features/AddExpense/AddExpense';
import { FC, useEffect, useState } from 'react';
import { View } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks';
import { UiTabSwitch } from 'shared/ui/UiTabsSwitch/UiTabsSwitch';

enum ETabs {
  EXPENSES = 'EXPENSES',
  INCOME = 'INCOME',
}

export const ExpenseIncomeW: FC = () => {
  const dispatch = useAppDispatch();
  const expenses = useSelector(getExpenses);
  const [currentTab, setCurrentTab] = useState<ETabs>(ETabs.EXPENSES);

  useEffect(() => {
    dispatch(getExpensesThunk());
  }, []);

  return (
    <View>
      <UiTabSwitch
        tabs={[{ title: 'EXPENSES' }, { title: 'INCOME' }]}
        currentTab={currentTab}
        onTabChange={title => setCurrentTab(title as ETabs)}
      />

      <View>
        {currentTab === ETabs.EXPENSES && <AddExpense expenses={expenses} />}
        {/* {currentTab === ETabs.INCOME && <ListIncomeItem expenses={expenses} />} */}
      </View>
    </View>
  );
};
