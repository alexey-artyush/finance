import { NavigateToAddExpenseF } from 'features/NavigateToAddExpense';
import { StyleSheet, View } from 'react-native';
import { ExpenseIncomeLayout, UiList } from 'shared/ui';
import { ExpenseIncomeW } from 'widgets';

export default function Home() {
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
    <View style={styles.container}>
      <ExpenseIncomeLayout
        expensesComponent={<UiList data={expensesData} />}
        incomeComponent={<UiList data={incomeData} />}
      >
        <ExpenseIncomeW />
        <View style={styles.navigateToAddExpenseF}>
          <NavigateToAddExpenseF />
        </View>
      </ExpenseIncomeLayout>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigateToAddExpenseF: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
