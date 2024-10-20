import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome</Text>
      <View style={styles.navigationContainer}>
        <Text
          style={styles.navigation}
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Text>
        <Text style={styles.orText}> or </Text>
        <Text
          style={styles.navigation}
          onPress={() => navigation.navigate("SignUp")}
        >
          SignUp
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center", // Center content vertically
    backgroundColor: "grey",
  },
  header: {
    fontSize: 50,
    color: "black",
    marginBottom: 40, // Space between header and buttons
  },
  navigationContainer: {
    flexDirection: "row", // Arrange items in a row
    alignItems: "center", // Align items vertically in the center
  },
  navigation: {
    fontSize: 20,
    color: "black",
    paddingHorizontal: 10, // Add padding around text
  },
  orText: {
    fontSize: 18,
    color: "lightgrey",
  },
});

export default Welcome;
