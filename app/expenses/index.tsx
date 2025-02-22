import { View } from 'react-native';
import { ExpenseIncomeW } from 'widgets';

export default function ExpensesList() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ExpenseIncomeW />
    </View>
  );
}
