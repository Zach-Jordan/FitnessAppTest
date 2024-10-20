import { Header } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Button,
} from "react-native";
import { userLogin } from "../services/authApi";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    setError(null);
    try {
      console.log("Attempting to login with data:", { email, password });
      const response = await userLogin({ email, password });
      console.log("Login successful:", response);
      navigation.navigate("Dashboard");
    } catch (err) {
      console.error("Login error object:", err);
      setError(err.message || "An unknown error occurred during login.");
    }
  };

  const onPressForgotPassword = () => {
    // Do something about forgot password operation
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <View style={styles.inputView}>
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
        <TextInput
          placeholder="Password"
          secureTextEntry // Make password input secure
          value={password}
          onChangeText={setPassword}
        />
        <Button
          title="LOGIN"
          onPress={handleLogin}
          style={styles.loginBtn}
        ></Button>
        <TouchableOpacity onPress={onPressForgotPassword}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={styles.loginOption}>
          <Text>Dont have an Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.inputText}> Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
  },
  header: {
    fontSize: 50,
    color: "black",
    marginBottom: 40, // Space between header and buttons
  },
  loginOption: {
    flexDirection: "row",
  },
  inputView: {
    alignItems: "center",
  },
});

export default Login;
