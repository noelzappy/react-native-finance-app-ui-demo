import React from "react";
import { View, Text } from "react-native";
import { height, width } from "react-native-dimension";
import { FontAwesome5 } from "@expo/vector-icons";
import { appColors } from "../constants/colors";

export default function Displaycard({ data }) {
  console.log(data);
  return (
    <View
      style={{
        backgroundColor: "#fff",
        padding: height(2),
        borderRadius: width(1),
        elevation: 5,
        marginRight: width(2),
      }}
    >
      <FontAwesome5
        name="bitcoin"
        size={32}
        color="orange"
        style={{ paddingBottom: 5 }}
      />
      <Text
        style={{ color: appColors.appMain, fontSize: 18, fontWeight: "bold" }}
      >
        {data.amount}
      </Text>
      <Text style={{ color: "grey" }}>{data.text}</Text>
    </View>
  );
}
