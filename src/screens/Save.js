import React from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { height, width } from "react-native-dimension";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { appColors } from "../constants/colors";
import SavingsDisplayCard from "../components/SavingsDisplayCard";

export default function MenuScreen() {
  const dummyData = [
    {
      name: "Bitcoin",
      amount: -2356,
      date: "Dec 25",
    },
    {
      amount: 563,
      name: "Ethereum",
      date: "Dec 25",
    },
    {
      name: "ChainLink",
      amount: 26.403,
      date: "Dec 25",
    },
    {
      name: "Binance Coin",
      amount: 697.43,
      date: "Dec 25",
    },
    {
      name: "Binance Coin",
      amount: 697.43,
      date: "Dec 25",
    },
    {
      name: "Binance Coin",
      amount: 697.43,
      date: "Dec 25",
    },
    {
      name: "Binance Coin",
      amount: 697.43,
      date: "Dec 25",
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
              // backgroundColor: "#fff",
              padding: height(1.3),
              borderRadius: width(1),
            }}
          />
        </View>
        <View style={{ marginHorizontal: width(5), marginTop: height(5) }}>
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
            Apartment Savings
          </Text>
          <Text style={{ color: "#fff", fontSize: 62, fontWeight: "bold" }}>
            $700.55
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: width(5),
          paddingVertical: height(2),
          backgroundColor: "#fff",
        }}
      >
        <Text style={{ fontSize: 22 }}>Saving 5% of daily pay</Text>
        <View style={{ flexDirection: "row" }}>
          {/* <Text style={{ fontSize: 20 }}>$430 </Text> */}
          <Text style={{ color: "grey", fontSize: 20 }}> > </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: width(5),
          paddingVertical: height(2),
          backgroundColor: appColors.appAsh,
        }}
      >
        <Text style={{ fontSize: 22 }}>Activity</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 20 }}>View all </Text>
          <Text style={{ color: "grey", fontSize: 20 }}> > </Text>
        </View>
      </View>

      <SavingsDisplayCard
        data={dummyData}
        styles={{ marginHorizontal: width(7), marginBottom: height(2) }}
      />

      <StatusBar barStyle="default" backgroundColor={appColors.appMain} />
    </SafeAreaProvider>
  );
}
