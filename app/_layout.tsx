import { routeConfig } from 'appliaction/router/config';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {Object.values(routeConfig).map((route) => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          options={{
            headerTitle: route.title,
          }}
        />
      ))}
    </Stack>
  );
}
