import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Button } from "@rneui/themed";
import { primaryColor } from "../constants";
import Logo from "../components/Logo";
import Label from "../components/Label";
import BorderInput from "../components/BorderInput";

export default function LoginScreen() {
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "#fff",
      }}
    >
      <ScrollView>
        <View
          style={{
            alignItems: "center",
            marginTop: 87,
            marginBottom: 43,
          }}
        >
          <Logo />
        </View>
        <Label
          medium
          style={{
            textAlign: "center",
            fontSize: 24,
            marginBottom: 43,
          }}
        >
          Login to Your Account
        </Label>
        <View style={{ paddingHorizontal: 37, marginBottom: 10 }}>
          <Label
            style={{
              fontSize: 12,
              marginBottom: 3.04,
            }}
          >
            Email
          </Label>
          <BorderInput />
        </View>
        <View style={{ paddingHorizontal: 37 }}>
          <Label
            style={{
              fontSize: 12,
              marginBottom: 3.04,
            }}
          >
            Password
          </Label>
          <BorderInput secureTextEntry={true} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 37,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Label medium style={{ fontSize: 14 }}>
              Remember me
            </Label>
          </View>
          <View>
            <Label medium style={{ fontSize: 14, color: primaryColor }}>
              Forgot Password
            </Label>
          </View>
        </View>
      </ScrollView>

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
