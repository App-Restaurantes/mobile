import { useSearchParams, Stack } from "expo-router";
import { View, Text } from "react-native";


export default function() {
  const { place } = useSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: place }} />
      <Text>Welcome to {place}</Text>
    </View>
  );
}
