import { Link, usePathname } from "expo-router";
import { Text } from "react-native";

export default function() {
  const path = usePathname();
  return (
    <>
      <Text>Profile</Text>
      <Link href={`${path}/friends`}>Friends</Link>
    </>
  );
}
