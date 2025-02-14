import { StyleSheet, Text, View } from 'react-native';
import { StoreProvider } from './appliaction/providers/store';
import { UiProvider } from 'appliaction/providers/ui';
import { Slot } from 'expo-router';


export default function App() {
  return (
    <StoreProvider>
      <UiProvider>
        <View>
        <Slot />
        </View>
      </UiProvider>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
