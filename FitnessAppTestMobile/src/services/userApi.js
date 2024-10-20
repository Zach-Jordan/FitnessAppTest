import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_BASE_URL = "http://10.0.0.209:5000";

export const getUserData = async () => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    console.log("Token:", token); // Log the token

    if (!token) {
      throw new Error("No auth token found, please log in.");
    }

    const response = await axios.get(`${API_BASE_URL}/api/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data; // Return the user data
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};
