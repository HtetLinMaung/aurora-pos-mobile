import { Input } from "@rneui/themed";

export default function BorderInput(props) {
  const { containerStyle, inputContainerStyle, inputStyle } = props;
  delete props.containerStyle;
  delete props.inputContainerStyle;
  delete props.inputStyle;

  return (
    <Input
      {...props}
      containerStyle={{ paddingHorizontal: 0, ...(containerStyle || {}) }}
      inputContainerStyle={{
        borderBottomWidth: 0,
        ...(inputContainerStyle || {}),
      }}
      inputStyle={{
        borderColor: "#dadbdf",
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 16,
        height: 50.83,
        fontFamily: "Poppins-Regular",
        fontSize: 14,
        display: "flex",
        justifyContent: "center",
        ...(inputStyle || {}),
      }}
    />
  );
}
