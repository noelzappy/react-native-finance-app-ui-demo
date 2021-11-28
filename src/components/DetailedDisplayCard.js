import React from "react";
import { View, Text, FlatList } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { height, width } from "react-native-dimension";

export default function DetailedDisplayCard({ data, styles }) {
  const renderFlatlistItem = ({ item, index }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomColor: "grey",
          borderBottomWidth: 0.5,
          paddingVertical: height(2),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FontAwesome5
            name="bitcoin"
            size={24}
            color="orange"
            style={{ paddingRight: width(3) }}
          />
          <Text
            style={{
              fontSize: 20,
              //   fontWeight: "bold",
            }}
          >
            {item.name}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            //   fontWeight: "bold",
            color: "grey",
          }}
        >
          {item.amount}
        </Text>
      </View>
    );
  };
  return (
    <FlatList
      data={data}
      renderItem={renderFlatlistItem}
      keyExtractor={(item, index) => `${item.name}${index}`}
      contentContainerStyle={{
        ...styles,
        backgroundColor: "#fff",
        borderRadius: width(5),
        padding: height(2),
        // elevation: 4,
      }}
    />
  );
}
