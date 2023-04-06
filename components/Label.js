import { Text } from "react-native";

export default function Label(props) {
  const style = props.style;
  delete props.style;
  return (
    <Text
      {...props}
      style={{
        fontFamily: props.medium ? "Poppins-Medium" : "Poppins-Regular",
        ...style,
      }}
    >
      {props.children}
    </Text>
  );
}
