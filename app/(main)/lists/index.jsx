import { Link, usePathname } from "expo-router";
import { View, Text } from "react-native";


export default function() {
  const path = usePathname();

  return (
    <View>
      <Text>LISTS</Text>
      <Link href={`${path}/list001`}>
        Go to list 001
      </Link>
    </View>
  );
}
