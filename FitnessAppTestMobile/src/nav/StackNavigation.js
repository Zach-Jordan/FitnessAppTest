import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Dashboard from "../screens/Dashboard";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      {/* initialRouteName="Welcome" */}
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Login", headerShown: null }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: "Sign Up", headerShown: null }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ title: "Dashboard", headerShown: null }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
