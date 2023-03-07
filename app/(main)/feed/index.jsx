import { Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../../redux/slices/example";


export default function() {
  const count = useSelector(state => state.example.value);
  const dispatch = useDispatch();

  console.log(count);

  return (
    <>
      <Text>Feed</Text>
      <Text>Count: {count}</Text>
      <TouchableOpacity onPress={() => dispatch(increment())}>
        <Text>Increment</Text>
      </TouchableOpacity>
    </>
  );
}
