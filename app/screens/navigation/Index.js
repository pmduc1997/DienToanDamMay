import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { Image, View } from "react-native";
import i18n from "app/localization/i18n";

import Conversations from "../conversations/Index";
import Customers from "./../customers/Index";
import Profile from "./../profile/Index";
import Page from './../pages/Index'
import Dashboard from "./../dashboard/index";
import CustomText from "../../components/customText";

const TabNavigator = createBottomTabNavigator(
  {
    Conversations: {
      screen: Conversations,
      navigationOptions: ({ navigation }) => ({
        tabBarOnPress: () => {
          navigation.navigate("Conversations", {});
        },
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("app/assets/icons/chat.png")}
            style={{
              tintColor: tintColor,
              width: 25,
              height: 25
            }}
          />
        )
      })
    },
    Customers: {
      screen: Customers,
      navigationOptions: ({ navigation }) => ({
        tabBarOnPress: () => {
          navigation.navigate("Customers", {});
        },
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("app/assets/icons/customer.png")}
            style={{
              tintColor: tintColor,
              width: 32,
              height: 32
            }}
          />
        )
      })
    },
    Page: {
      screen: Page,
      navigationOptions: ({ navigation }) => ({
        tabBarOnPress: () => {
          navigation.navigate("Page", {});
        },
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("app/assets/icons/pages.png")}
            style={{
              tintColor: tintColor,
              width: 32,
              height: 32
            }}
          />
        )
      })
    },
    Dashboard: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        tabBarOnPress: () => {
          navigation.navigate("Dashboard", {});
        },
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("app/assets/icons/settings.png")}
            style={{
              tintColor: tintColor,
              width: 32,
              height: 32
            }}
          />
        )
      })
    }
  },
  {
    lazy: true,
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#08ADFA',
      inactiveTintColor: '#B9D0EC',
      style: {
        borderTopWidth: 1,
        borderTopColor: "#E1EDFC",
        height: 60
      }
    }
  }
);

export default createAppContainer(TabNavigator);