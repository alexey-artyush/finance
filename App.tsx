import { StyleSheet } from 'react-native';
import { StoreProvider } from './appliaction/providers/store';
import { UiProvider } from 'appliaction/providers/ui';
import { Slot } from 'expo-router';


export default function App() {
  return (
    <StoreProvider>
      <UiProvider>
        <Slot />
      </UiProvider>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
});
