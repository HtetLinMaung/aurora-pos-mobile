import { View, Text } from "react-native";
import { Button } from "@rneui/themed";

export default function LoginScreen() {
  return (
    <View
      style={{
        height: 500,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Login Screen</Text>

      <Button title="Solid" />
      <Button title="Outline" type="outline" />
      <Button title="Clear" type="clear" />
    </View>
  );
}
