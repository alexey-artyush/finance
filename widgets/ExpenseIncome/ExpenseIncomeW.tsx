import { getExpensesThunk } from 'entities/expense/model';
import { ShowStatisticF } from 'features';
import { FC, useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import { useAppDispatch, useTheme } from 'shared/hooks';
import { UiList, UiTabsSwitch } from 'shared/ui';
import { createStyles } from './ExpenseIncomeW.styles';
import { NavigateToAddExpenseF } from 'features/NavigateToAddExpense';

enum ETabs {
  EXPENSES = 'EXPENSES',
  INCOME = 'INCOME',
}

export const ExpenseIncomeW: FC = () => {
  const { currentTheme } = useTheme();
  const styles = useMemo(() => createStyles(currentTheme), [currentTheme]);
  const dispatch = useAppDispatch();
  const [currentTab, setCurrentTab] = useState<ETabs>(ETabs.EXPENSES);

  useEffect(() => {
    dispatch(getExpensesThunk());
  }, []);

  const expensesData = [
    {
      id: '1',
      icon: 'fast-food-outline',
      name: 'Groceries',
      percentage: 35,
      amount: 1500,
      color: '#FF6B6B',
    },
    {
      id: '2',
      icon: 'home-outline',
      name: 'Housing',
      percentage: 25,
      amount: 1000,
      color: '#4ECDC4',
    },
    {
      id: '3',
      icon: 'car-outline',
      name: 'Transportation',
      percentage: 15,
      amount: 600,
      color: '#FFD166',
    },
    {
      id: '4',
      icon: 'medical-bag',
      name: 'Healthcare',
      percentage: 10,
      amount: 450,
      color: '#F06292',
    },
    {
      id: '5',
      icon: 'school-outline',
      name: 'Education',
      percentage: 8,
      amount: 320,
      color: '#64B5F6',
    },
    {
      id: '6',
      icon: 'gamepad-variant-outline',
      name: 'Entertainment',
      percentage: 5,
      amount: 200,
      color: '#9575CD',
    },
    {
      id: '7',
      icon: 'tshirt-crew-outline',
      name: 'Clothing',
      percentage: 2,
      amount: 100,
      color: '#4DB6AC',
    },
  ];

  const incomeData = [
    {
      id: '1',
      icon: 'cash-outline',
      name: 'Salary',
      percentage: 35,
      amount: 15000,
    },
  ];

  return (
    <View style={styles.expenseIncomeW}>
      <UiTabsSwitch
        tabs={[{ title: ETabs.EXPENSES }, { title: ETabs.INCOME }]}
        currentTab={currentTab}
        onTabChange={title => setCurrentTab(title as ETabs)}
      />
      <ShowStatisticF />
      <NavigateToAddExpenseF />
      <View style={styles.contentContainer}>
        {currentTab === ETabs.EXPENSES && <UiList data={expensesData} />}
        {currentTab === ETabs.INCOME && <UiList data={incomeData} />}
      </View>
    </View>
  );
};
