import React from "react";
import { View, Text, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { height, width } from "react-native-dimension";
import { appColors } from "../constants/colors";

export default function DetailedDisplayCard({ data }) {
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
          <View
            style={{
              marginRight: width(3),
              backgroundColor: "rgba(106, 13, 173, 0.3)",
              borderRadius: width(15),
              padding: width(1.4),
            }}
          >
            <Feather name="percent" size={22} color="#6a0dad" />
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                //   fontWeight: "bold",
              }}
            >
              {`5% of ${item.amount}`}
            </Text>
            <Text style={{ fontSize: 16, color: "grey" }}>{item.date}</Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 18,
            //   fontWeight: "bold",
            color: "grey",
          }}
        >
          {`+${item.amount}`}
        </Text>
      </View>
    );
  };
  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: width(5),
        padding: height(2),
        // elevation: 4,
      }}
    >
      <FlatList
        data={data}
        renderItem={renderFlatlistItem}
        keyExtractor={(item, index) => `${item.name}${index}`}
      />
    </View>
  );
}
