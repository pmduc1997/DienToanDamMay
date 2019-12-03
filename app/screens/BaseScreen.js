import React from "react";
import AppPreferences from "app/utils/AppPreferences";
import ValidationComponent from "app/validators/ValidationComponent";
import { BackHandler, Platform } from "react-native";
import RNExitApp from "react-native-exit-app";

export default class BaseScreen extends ValidationComponent {
  constructor(props) {
    super(props);
    // this.resetAuth();
  }

  _setState(params, callback = null) {
    this.setState(params, callback);
  }

  showError(message, status) {
    if (status === 401) {
      this.resetAuth();
      return;
    }

    this.refs.masterView.showError(message);
  }

  resetAuth() {
    AppPreferences.removeAccessToken().then(() => {
      this.navigate("Login");
    });
  }

  navigate(screen, params = {}) {
    const { navigate } = this.props.navigation;
    navigate(screen, params);
  }

  push(screen, params = {}) {
    const { push } = this.props.navigation;
    push(screen, params);
  }

  getParams(name, defaultValue = null) {
    return this.props.navigation.getParam(name, defaultValue);
  }

  componentWillUnmount() {
    if (Platform.OS === "android" && this.props.navigation) {
      return BackHandler.removeEventListener(
        "hardwareBackPress",
        this.onBackButtonPressAndroid
      );
    }
  }

  componentDidMount() {
    if (Platform.OS === "android" && this.props.navigation) {
      BackHandler.addEventListener(
        "hardwareBackPress",
        this.onBackButtonPressAndroid
      );
    }
  }

  onBackButtonPressAndroid = () => {
    const mainScreens = ["Main", "Login"];
    let index = mainScreens.indexOf(this.props.navigation.state.routeName);
    if (
      this.props.navigation.isFocused &&
      this.props.navigation.isFocused() &&
      index !== -1
    ) {
      RNExitApp.exitApp();
    }
  };
}
