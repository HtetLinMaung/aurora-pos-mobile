import { View, StyleSheet } from "react-native";
import { primaryColor } from "../constants";

export default function Logo({ style = {} }) {
  return (
    <View style={{ ...styles.container, ...style }}>
      <View style={styles.bar1}></View>
      <View style={styles.bar2}></View>
      <View style={styles.circle}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar1: {
    width: 31.94,
    height: 71.61,
    backgroundColor: primaryColor,
    borderTopRightRadius: 25,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    position: "absolute",
    left: 24.19,
    top: 24.19,
    // bottom: 24.19,
  },
  bar2: {
    width: 31.94,
    height: 71.61,
    backgroundColor: primaryColor,
    position: "absolute",
    transform: "rotate(-90deg)",
    bottom: 4.19,
    left: 44.19,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  circle: {
    width: 31.94,
    height: 31.94,
    borderRadius: 999,
    backgroundColor: primaryColor,
    position: "absolute",
    right: 24.19,
    top: 24.19,
  },
  container: {
    width: 120,
    height: 120,
    borderRadius: 999,
    backgroundColor: "#fff",
    position: "relative",
  },
});
