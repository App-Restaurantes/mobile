import { Stack, useSearchParams } from "expo-router";
import { Text } from "react-native";


export default function() {
  const { friend } = useSearchParams();

  return (
    <>
      <Stack.Screen options={{ title: friend }} />
      <Text>{friend} profile</Text>
    </>
  );
}
