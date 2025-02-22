import { StoreProvider } from 'appliaction/providers/store';
import { UiProvider } from 'appliaction/providers/ui';
import { routeConfig } from 'appliaction/router/config';
import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
      </SafeAreaView>
      <StoreProvider>
        <UiProvider>
          <Stack>
            {Object.values(routeConfig).map(route => (
              <Stack.Screen
                key={route.name}
                name={route.name}
                options={{
                  headerTitle: route.title,
                  headerShown: false,
                }}
              />
            ))}
          </Stack>
        </UiProvider>
      </StoreProvider>
    </>
  );
}
