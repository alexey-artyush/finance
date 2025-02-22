import { View } from 'react-native';
import { ExpenseIncomeW } from 'widgets';

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ExpenseIncomeW />
    </View>
  );
}