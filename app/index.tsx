import { StyleSheet, View } from 'react-native';
import { ExpenseIncomeW } from 'widgets';

export default function Home() {
  return (
    <View style={styles.container}>
      <ExpenseIncomeW />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
