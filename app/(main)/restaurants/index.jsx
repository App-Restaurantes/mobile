import { Link, usePathname } from "expo-router";
import { Text } from "react-native";


export default function() {
  const path = usePathname();
  const restaurants = ["El Antojo", "La Parrilla de Pepe"];

  return (
    <>
      <Text>RESTAURANTS</Text>
      {restaurants.map(r => <Link href={`${path}/${r}`} key={r}>{r}</Link>)}
    </>
  );
}
