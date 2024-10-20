import { Header } from "@react-navigation/stack";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Button,
  Form,
} from "react-native";
import { userSignup } from "../services/authApi";

const SignUp = ({ navigation }) => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);

  const handleSignUp = async () => {
    // Basic input validation
    if (!firstName || !lastName || !email || !password) {
      setError("All fields are required.");
      return;
    }

    try {
      const userData = { firstName, lastName, email, password };
      const response = await userSignup(userData);
      console.log("Signup success:", response);
      // Handle the response or navigate to another screen
    } catch (error) {
      console.error("Signup error:", error); // Log the error for debugging
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>SignUp</Text>
      <View style={styles.inputView}>
        <TextInput
          value={firstName}
          onChangeText={setFirstName}
          placeholder="First Name"
        />
        <TextInput
          value={lastName}
          onChangeText={setLastName}
          placeholder="Last Name"
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Button
          title="SIGNUP"
          onPress={handleSignUp}
          style={styles.loginBtn}
        ></Button>
        {error && <Text style={{ color: "red" }}>{error}</Text>}
        <View style={styles.loginOption}>
          <Text>Have an Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.inputText}> Login</Text>
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

export default SignUp;
