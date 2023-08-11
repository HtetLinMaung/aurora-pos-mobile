import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Button, CheckBox } from "@rneui/themed";
import { primaryColor, serverUrl } from "../constants";
import Logo from "../components/Logo";
import Label from "../components/Label";
import BorderInput from "../components/BorderInput";
import http from "starless-http";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    const [response, error] = await http.post(`${serverUrl}/login`, {
      username,
      password,
      rememberMe,
    });
    if (error || !response || response.status >= 400 || !response.data) {
      let message = "Something went wrong!";
      if (response && response.data) {
        message = response.data.message;
      } else if (error) {
        message = error.message;
      }
      console.log(message);
    }
    console.log(response.data);
  };

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
          <BorderInput
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
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
          <BorderInput
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 37,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <CheckBox
              title="Remember Me"
              textStyle={{ fontSize: 14, fontFamily: "Poppins-Medium" }}
              onPress={() => setRememberMe(!rememberMe)}
              checked={rememberMe}
              size={20}
              containerStyle={{
                paddingHorizontal: 0,
                paddingVertical: 0,
                marginLeft: 0,
                marginHorizontal: 0,
                // paddingLeft: 0,
                // paddingRight: 10,
              }}
              checkedColor={primaryColor}
            />
            {/* <Label
              medium
              style={{ fontSize: 14 }}
              onPress={() => setRememberMe(!rememberMe)}
            >
              Remember me
            </Label> */}
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
          onPress={handleLogin}
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
