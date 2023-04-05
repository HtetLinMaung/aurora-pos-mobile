import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Image } from "@rneui/themed";
import { primaryColor } from "../constants";
import logo from "../assets/logo.png";

export default function LoginScreen() {
  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#fff",
      }}
    >
      <Image
        source={logo}
        containerStyle={{
          width: "100%",
          height: "100%",
          // transform: "scale(0.5)",
          backgroundColor: "red",
        }}
        resizeMode="cover"
      />

      <Text>Login Screen</Text>
      <View style={styles.loginBtnContainer}>
        <Button
          title="Login"
          buttonStyle={styles.loginBtn}
          radius={15}
          titleStyle={styles.loginBtnTitle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginBtnContainer: {
    position: "absolute",
    bottom: 52.17,
    width: "100%",
    paddingHorizontal: 37,
  },
  loginBtnTitle: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
  },
  loginBtn: {
    backgroundColor: primaryColor,
    height: 50.83,
  },
});
