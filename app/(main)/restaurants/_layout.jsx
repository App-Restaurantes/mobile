import { Stack } from "expo-router";


export const unstable_settings = {
  initialRouteName: "index",
};

export default function() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Explore" }} />
    </Stack>
  );
}
