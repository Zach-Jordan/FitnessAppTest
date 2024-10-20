import { Header } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Button,
  Form,
} from "react-native";

// CalenderWidget
export const CalenderWidget = () => {
  const date = new Date();

  // Gets the ordinal suffix of days less than 3 and more than 21
  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  // Get the current day and month
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" }); // "Nov" instead of "Novermber"

  return (
    <View>
      <Text>{`${month} ${day}${getOrdinalSuffix(day)}`}</Text>
    </View>
  );
};
