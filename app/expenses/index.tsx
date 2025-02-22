import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function ExpensesList() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Expenses List</Text>
      <Link href="/expenses/123">View Expense #123</Link>
    </View>
  );
}
