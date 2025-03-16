import { StyleSheet, View, Text } from 'react-native';

export default function AddTransaction() {
  return (
    <View style={styles.container}>
      <Text>Add Transaction</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
