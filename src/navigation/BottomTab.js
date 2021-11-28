import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, AntDesign } from "@expo/vector-icons";
import { height, width } from "react-native-dimension";

import Home from "../screens/Home";
import Save from "../screens/Save";
import Schedule from "../screens/Schedule";
import MenuScreen from "../screens/Menu";
import AddScreen from "../screens/Add";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#27C5B2",
        // tabBarStyle: { height: height(7) },
        tabBarStyle: {
          height: height(8),
          paddingBottom: height(1.5),
          paddingTop: height(1),
        },
        tabBarLabelStyle: {
          // marginBottom: width(2),
          fontSize: 16,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Spend",
          tabBarIcon: ({ color, size }) => (
            <Feather name="credit-card" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Save"
        component={Save}
        options={{
          tabBarLabel: "Save",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="hearto" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarLabel: "Schedule",
          tabBarIcon: ({ color, size }) => (
            <Feather name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarLabel: "Menu",
          tabBarIcon: ({ color, size }) => (
            <Feather name="menu" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AddScreen"
        component={AddScreen}
        options={{
          //   tabBarLabel: null,
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                backgroundColor: "#27C5B2",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: width(12),
                margin: -height(2),
                padding: width(3),
                elevation: 5,
                alignContent: "center",
              }}
            >
              <AntDesign name="plus" size={size} color="#fff" />
            </View>
          ),
          tabBarLabelStyle: { display: "none" },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
