import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";
import { FontAwesome5 } from "@expo/vector-icons";
import { appColors } from "../constants/colors";

export default function Displaycard({ data }) {
  // console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <FontAwesome5
          name="bitcoin"
          size={28}
          color="orange"
          style={styles.icon}
        />
      </View>
      <Text style={styles.amount}>
        ${data.amount.toLocaleString()}
      </Text>
      <Text style={styles.text}>{data.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: height(2),
    borderRadius: width(4),
    marginRight: width(2),
    width: width(40),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  iconContainer: {
    width: width(12),
    height: width(12),
    borderRadius: width(6),
    backgroundColor: 'rgba(255, 165, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height(1.5),
  },
  icon: {
    marginBottom: 0,
  },
  amount: {
    color: appColors.appMain,
    fontSize: 22,
    fontWeight: "700",
    marginBottom: height(0.5),
    letterSpacing: 0.5,
  },
  text: {
    color: "#95a5a6",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
  },
});
