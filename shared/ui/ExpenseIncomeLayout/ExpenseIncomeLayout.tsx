import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { UiTabsSwitch } from 'shared/ui';

const tabs = [
  { title: 'Expenses' },
  { title: 'Income' },
];

interface IProps {
  children: React.ReactNode;
  expensesComponent?: React.ReactNode;
  incomeComponent?: React.ReactNode;
}

export const ExpenseIncomeLayout = ({ children, expensesComponent, incomeComponent }: IProps) => {
  const [currentTab, setCurrentTab] = useState(tabs[0].title);

  return (
    <View style={styles.container}>
      <UiTabsSwitch
        tabs={tabs}
        currentTab={currentTab}
        onTabChange={setCurrentTab}
      />
      <View style={styles.childrenContainer}>
        {children}
      </View>
      <View style={styles.contentContainer}>
        {currentTab === "Expenses" && expensesComponent}
        {currentTab === "Income" && incomeComponent}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  childrenContainer: {
    width: '100%',
    flex: 1,
    paddingVertical: 10,
  },
  contentContainer: {
    flex: 1,
    width: '100%',
  }
});