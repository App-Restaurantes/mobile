import { useSearchParams, Stack, Link, usePathname } from "expo-router";
import { View, Text } from "react-native";


export default function() {
  const path = usePathname();
  const { list } = useSearchParams();

  const examplePlaces = ["El Antojo", "La Parrilla de Pepe"];
  return (
    <View>
      <Stack.Screen options={{ title: list }} />
      <Text>Welcome to {list}</Text>
      <View>
        <Text>Places:</Text>
        {examplePlaces.map(p => <Link href={`${path}/${p}`} key={p}>{p}</Link>)}
      </View>
    </View>
  );
}
