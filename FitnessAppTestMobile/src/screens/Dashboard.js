import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { getUserData } from "../services/userApi";
import { CalenderWidget } from "../components/Calander/Calander";

const Dashboard = ({ navigation }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUserData();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <View style={style.container}>
      {user ? (
        <>
          <Text>Welcome back, {user.firstName}!</Text>
          <CalenderWidget />
          {/* <WorkoutTrackerWidgetComponent /> */}
          {/* <CalorieTrackerWidgetComponent /> */}
          {/* <ProgressComponent /> */}
          {/* <ProfileComponent /> */}
          <Button title="Logout" onPress={() => navigation.navigate("Login")} />
        </>
      ) : (
        <Text>Loading user data...</Text> // Show loading state while fetching
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});

export default Dashboard;
