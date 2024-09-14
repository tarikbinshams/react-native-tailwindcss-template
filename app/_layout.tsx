import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        headerTitle: "Home Screen",
        headerTitleStyle: {
          color: "black",
          fontWeight: "bold",
          fontSize: 16,
        },
        headerStyle: {
          backgroundColor: "#f5f5f5",
        },
      }}></Stack.Screen>
    </Stack>
  );
}
