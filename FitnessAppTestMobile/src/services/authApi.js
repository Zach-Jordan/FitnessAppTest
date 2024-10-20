import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_BASE_URL = "http://10.0.0.209:5000";

// Function to hanlde user signup API calls
export const userSignup = async (userData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/users/register`,
      userData
    );
    return response.data;
  } catch (error) {
    console.error("Axios error:", error); // Full error object

    if (error.response) {
      console.log("Response data:", error.response.data);
      console.log("Response status:", error.response.status);
      console.log("Response headers:", error.response.headers);

      throw new Error(error.response.data.error || "Signup failed.");
    } else if (error.request) {
      console.log("No response received from the server");
      throw new Error("No response received from the server.");
    } else {
      console.log("Error setting up request:", error.message);
      throw new Error("Error: " + error.message);
    }
  }
};

// Function to handle user login API calls and store token in AsyncStorage
export const userLogin = async (userData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/users/login`,
      userData
    );

    if (response.data && response.data.token) {
      await AsyncStorage.setItem("authToken", response.data.token);
      await AsyncStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    } else {
      throw new Error("Login failed: Token not provided");
    }
  } catch (error) {
    console.error("Login error object:", error); // Log the error here
    throw new Error(error.message || "Login failed");
  }
};

// To log out, remove the token and user info from AsyncStorage
export const userLogout = async () => {
  await AsyncStorage.removeItem("authToken");
  await AsyncStorage.removeItem("user");
};
