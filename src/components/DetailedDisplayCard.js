import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { height, width } from "react-native-dimension";

export default function DetailedDisplayCard({ data, styles: propStyles }) {
  const renderFlatlistItem = ({ item, index }) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemLeft}>
          <View style={styles.iconContainer}>
            <FontAwesome5
              name="bitcoin"
              size={20}
              color="orange"
              style={styles.icon}
            />
          </View>
          <Text style={styles.itemName}>{item.name}</Text>
        </View>
        <Text style={[
          styles.itemAmount,
          item.amount < 0 ? styles.negativeAmount : styles.positiveAmount
        ]}>
          {item.amount < 0 ? '-' : ''}${Math.abs(item.amount).toLocaleString()}
        </Text>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderFlatlistItem}
      keyExtractor={(item, index) => `${item.name}${index}`}
      contentContainerStyle={[styles.container, propStyles]}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: width(5),
    padding: height(2),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "rgba(0,0,0,0.05)",
    borderBottomWidth: 1,
    paddingVertical: height(2),
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: width(10),
    height: width(10),
    borderRadius: width(5),
    backgroundColor: 'rgba(255, 165, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: width(3),
  },
  icon: {
    marginBottom: 0,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2c3e50",
  },
  itemAmount: {
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  positiveAmount: {
    color: "#2ecc71",
  },
  negativeAmount: {
    color: "#e74c3c",
  },
});
