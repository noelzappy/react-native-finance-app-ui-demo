import React from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  FlatList,
  StyleSheet,
} from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import { height, width } from "react-native-dimension";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Displaycard from "../components/Displaycard";
import { appColors } from "../constants/colors";
import DetailedDisplayCard from "../components/DetailedDisplayCard";

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

  const dummyData2 = [
    {
      name: "Bitcoin",
      amount: -2356,
    },
    {
      amount: 563,
      name: "Ethereum",
    },
    {
      name: "ChainLink",
      amount: 26.403,
    },
    {
      name: "Binance Coin",
      amount: 697.43,
    },
    {
      name: "Binance Coin",
      amount: 697.43,
    },
    {
      name: "Binance Coin",
      amount: 697.43,
    },
    {
      name: "Binance Coin",
      amount: 697.43,
    },
  ];

  return (
    <SafeAreaProvider style={styles.container}>
      <ImageBackground
        style={styles.headerBackground}
        source={{
          uri: "https://i.ibb.co/2j65Rtw/bg-1.jpg",
        }}
      >
        <View style={styles.headerTop}>
          <View style={styles.profileContainer}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/men/1.jpg",
              }}
              style={styles.profileImage}
            />
            <View style={styles.profileBadge} />
          </View>
          <View style={styles.paydayBadge}>
            <Text style={styles.paydayText}>Payday in a week</Text>
          </View>
        </View>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>Total Balance to spend</Text>
          <Text style={styles.balanceAmount}>$763,992</Text>
        </View>
      </ImageBackground>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Planning Ahead</Text>
        <View style={styles.sectionAmount}>
          <Text style={styles.amountText}>$430 </Text>
          <Text style={styles.arrowText}> > </Text>
        </View>
      </View>

      <View style={styles.cardsContainer}>
        <FlatList
          data={dummyData}
          renderItem={({ item }) => <Displaycard data={item} />}
          keyExtractor={(item, index) => `${item.amount}${index.toString()}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardsList}
        />
      </View>

      <View style={styles.divider} />

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Last Month Expenses</Text>
        <View style={styles.sectionAmount}>
          <Text style={styles.amountText}>$7,630 </Text>
          <Text style={styles.arrowText}> > </Text>
        </View>
      </View>

      <CalendarStrip
        scrollable
        style={styles.calendar}
        calendarColor={appColors.appAsh}
        calendarHeaderStyle={styles.calendarHeader}
        dateNumberStyle={styles.dateNumber}
        dateNameStyle={styles.dateName}
        iconContainer={styles.calendarIcon}
        highlightDateNumberStyle={styles.highlightDateNumber}
        highlightDateNameStyle={styles.highlightDateName}
        dayComponentHeight={height(8)}
        dayComponentWidth={width(12)}
      />

      <DetailedDisplayCard
        data={dummyData2}
        styles={styles.detailedCard}
      />

      <StatusBar barStyle="light-content" backgroundColor={appColors.appMain} />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.appAsh,
  },
  headerBackground: {
    height: height(35),
    backgroundColor: appColors.appMain,
    borderBottomLeftRadius: width(8),
    borderBottomRightRadius: width(8),
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: width(5),
    alignItems: "center",
    marginTop: height(2),
    marginBottom: height(5),
  },
  profileContainer: {
    position: 'relative',
    width: width(15),
    height: width(15),
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: width(7.5),
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: width(4),
    height: width(4),
    borderRadius: width(2),
    backgroundColor: '#2ecc71',
    borderWidth: 2,
    borderColor: '#fff',
  },
  paydayBadge: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: height(1.3),
    borderRadius: width(3),
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  paydayText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  balanceContainer: {
    marginHorizontal: width(5),
    marginTop: height(5),
    marginBottom: height(2),
  },
  balanceLabel: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 18,
    fontWeight: "500",
    marginBottom: height(1),
  },
  balanceAmount: {
    color: "#fff",
    fontSize: width(12),
    fontWeight: "700",
    letterSpacing: 1,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: appColors.appAsh,
    marginHorizontal: width(5),
    paddingVertical: height(2),
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: '#2c3e50',
  },
  sectionAmount: {
    flexDirection: "row",
    alignItems: "center",
  },
  amountText: {
    fontSize: 20,
    fontWeight: "700",
    color: '#2c3e50',
  },
  arrowText: {
    color: "#95a5a6",
    fontSize: 20,
    marginLeft: width(1),
  },
  cardsContainer: {
    marginLeft: width(5),
  },
  cardsList: {
    paddingRight: width(5),
  },
  divider: {
    backgroundColor: "rgba(0,0,0,0.1)",
    height: 1,
    marginVertical: height(2.5),
  },
  calendar: {
    height: height(12),
    paddingTop: width(1),
    paddingBottom: width(1),
  },
  calendarHeader: {
    color: "black",
    fontSize: 18,
    display: "none",
  },
  dateNumber: {
    color: "#95a5a6",
    fontSize: 16,
    fontWeight: "500",
  },
  dateName: {
    color: "#95a5a6",
    fontSize: 14,
    fontWeight: "500",
  },
  highlightDateNumber: {
    color: appColors.appMain,
    fontSize: 18,
    fontWeight: "700",
  },
  highlightDateName: {
    color: appColors.appMain,
    fontSize: 14,
    fontWeight: "700",
  },
  calendarIcon: {
    flex: 0.1,
  },
  detailedCard: {
    marginHorizontal: width(4),
  },
});
