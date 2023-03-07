import { Link, usePathname } from "expo-router";
import { Text } from "react-native";


export default function() {
  const path = usePathname();
  const friends = ["pepe", "jorge", "jaime", "pablo"];
  return (
    <>
      <Text>FRIENDS</Text>
      {friends.map(f => <Link href={`${path}/${f}`} key={f}>{f}</Link >)}
    </>
  );
}
