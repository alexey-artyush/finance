import { AppRoutes } from 'appliaction/router/config';
import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen 33</Text>
      <Link href={AppRoutes.EXPENSES}>Expenses</Link>
    </View>
  );
}