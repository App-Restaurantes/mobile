import { Stack } from "expo-router";


export const unstable_settings = {
  initialRouteName: "index",
};

export default function() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Profile" }} />
      <Stack.Screen name="map" options={{ title: "Map" }} />
      <Stack.Screen name="friends/index" options={{ title: "Friends" }} />
    </Stack>
  );
}
