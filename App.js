/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import screens from "app/screens/Screens";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { CommonStyles } from "app/assets/styles/CommonStyles";
import AppPreferences from "app/utils/AppPreferences";
import { YellowBox } from "react-native";
import CmsList from "./app/screens/cmslist/CmsList";
import ListUser from "./app/screens/cmsuser/listuser/ListUser";
import Header from "./app/screens/header/Header";
import DetailUser from "./app/screens/cmsuser/detailuser/DetailUser";

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillUpdate is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

const MainNavigator = createAppContainer(
  createStackNavigator(screens, {
    headerMode: "none",
    //initialRouteName: "EditProfile" //test 
  })
);

const App = () => {
  return (
    // <SafeAreaView style={styles.area}>
    //   <StatusBar backgroundColor="#006AFE" barStyle="light-content" />
    //   <MainNavigator />
      
    // </SafeAreaView>
    // <CmsList></CmsList>
    <DetailUser></DetailUser>
    
  );
};

function initApp() {
  return AppPreferences.getAccessToken()
    .then(credentials => {
      AppPreferences.saveUserInfo(
        JSON.parse(credentials.username),
        credentials.password
      );
    })
    .catch(() => {
      AppPreferences.removeAccessToken();
    });
}

const styles = StyleSheet.create({
  ...CommonStyles
});

export default App;
export { initApp };
