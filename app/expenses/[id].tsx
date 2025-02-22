import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ExpenseDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Expense Details for ID: {id}</Text>
    </View>
  );
}