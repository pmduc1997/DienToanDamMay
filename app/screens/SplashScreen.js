import React from "react";
import { Image } from "react-native";
import BaseScreen from "app/screens/BaseScreen";
import { View, Text } from "react-native";
import { initApp } from "../../App";
import AppConfig from "app/utils/AppConfig";

import splash from "app/assets/image/logo-fchat-color.png"
import { _getUserStore } from "../utils/asyncStore";
import AppPreferences from "../utils/AppPreferences";

export default class SplashScreen extends BaseScreen {
  constructor(props) {
    super(props);
  }

  async creatApp() {
    let self = this;
    await initApp();
    let user = await _getUserStore();
    if (user) {
      user = JSON.parse(user);
      console.log(user.access_token)
      AppPreferences.saveAccessToken(
        user.user,
        user.access_token,
        true
      );
      self.navigate("Main");
    } else {
      self.navigate("Login");
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image style={styles.logo} source={splash} resizeMode="contain"/>
      </View>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.creatApp();
    }, 1000);
  }
}

const styles = {
  logo: {
    width: '60%',
    height: 80,
    borderWidth: 1
  }
}
