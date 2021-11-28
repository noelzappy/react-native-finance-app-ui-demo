import React from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  FlatList,
} from "react-native";
import { height, width } from "react-native-dimension";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Displaycard from "../components/Displaycard";
import { appColors } from "../constants/colors";

export default function Home() {
  const dummyData = [
    {
      amount: 5628,
      text: "I love cheese",
    },
    {
      amount: 7828,
      text: "Paid in 23 days",
    },
    {
      amount: 65228,
      text: "May not be paid",
    },
    {
      amount: 5238,
      text: "in 23 day or later",
    },
  ];
  return (
    <SafeAreaProvider
      style={{
        backgroundColor: appColors.appAsh,
      }}
    >
      <ImageBackground
        style={{
          height: height(30),
          backgroundColor: appColors.appMain,
        }}
        source={{
          uri: "https://i.ibb.co/2j65Rtw/bg-1.jpg",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: width(5),
            alignItems: "center",
            marginTop: height(2),
            marginBottom: height(5),
          }}
        >
          <View>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/men/1.jpg",
              }}
              style={{
                height: height(6),
                width: width(10),
                borderRadius: width(12),
                padding: width(7),
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              padding: height(1.3),
              borderRadius: width(1),
            }}
          >
            <Text
              style={{
                color: appColors.appMain,
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Payday in a week
            </Text>
          </View>
        </View>
        <View style={{ marginHorizontal: width(5), marginTop: height(5) }}>
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
            Total Balance to spend
          </Text>
          <Text style={{ color: "#fff", fontSize: 62, fontWeight: "bold" }}>
            $763992
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          // margin: width(5),
          backgroundColor: appColors.appAsh,
          marginHorizontal: width(5),
          paddingVertical: height(2),
        }}
      >
        <Text style={{ fontSize: 24 }}>Planning Ahead</Text>
        <Text>$430 > </Text>
      </View>
      <View
        style={{
          marginLeft: width(5),
        }}
      >
        {/* <Displaycard />
        <Displaycard />
        <Displaycard />
        <Displaycard /> */}
        <FlatList
          data={dummyData}
          renderItem={({ item }) => <Displaycard data={item} />}
          keyExtractor={(item, index) => `${item.amount}${index.toString()}`}
          horizontal
        />
      </View>
      <StatusBar barStyle="default" backgroundColor={appColors.appMain} />
    </SafeAreaProvider>
  );
}
