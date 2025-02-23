import { getExpensesThunk } from 'entities/expense/model';
import { ShowStatisticF } from 'features';
import { FC, useEffect, useState } from 'react';
import { View } from 'react-native';
import { useAppDispatch } from 'shared/hooks';
import { UiTabsSwitch } from 'shared/ui';

enum ETabs {
  EXPENSES = 'EXPENSES',
  INCOME = 'INCOME',
}

export const ExpenseIncomeW: FC = () => {
  const dispatch = useAppDispatch();
  const [currentTab, setCurrentTab] = useState<ETabs>(ETabs.EXPENSES);

  useEffect(() => {
    dispatch(getExpensesThunk());
  }, []);

  return (
    <View>
      <UiTabsSwitch
        tabs={[{ title: ETabs.EXPENSES }, { title: ETabs.INCOME }]}
        currentTab={currentTab}
        onTabChange={title => setCurrentTab(title as ETabs)}
      />
      <ShowStatisticF />
      <View>
        {/* {currentTab === ETabs.EXPENSES && <AddExpense expenses={expenses} />} */}
        {/* {currentTab === ETabs.INCOME && <ListIncomeItem expenses={expenses} />} */}
      </View>
    </View>
  );
};
