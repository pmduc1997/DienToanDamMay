import React from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import { CheckBox, Button } from "react-native-elements";

import BaseScreen from "app/screens/BaseScreen";
import styles from "./Styles";

import { KeyboardAvoidingViewKeyboardDismiss } from "app/helpers/KeyboardAvoidingViewKeyboardDismiss";
import i18n from "app/localization/i18n";
import rf from "app/libs/RequestFactory";
import AppPreferences from "app/utils/AppPreferences";
import AppConfig from "app/utils/AppConfig";
import CustomText from "app/components/customText";

import logo_img from "app/assets/image/logo-fchat-color.png";
import ic_england from "app/assets/icons/england.png";
import ic_vietnam from "app/assets/icons/vietnam.png";
import { _setUserStore } from "../../utils/asyncStore";

export default class Login extends BaseScreen {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  _doLogin = () => this.navigate('ConnectPage')

  render() {
    return (
      <View style={styles.containerLogin}>
        <StatusBar backgroundColor="white" barStyle="light-content" />
        <View style={styles.contentLogo}>
          <Image style={styles.logo} source={logo_img} resizeMode="contain" />
        </View>
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
          <CustomText size={25} style={{ color: '#006AFE', fontWeight: 'bold', textAlign: 'center' }}>QUẢN LÝ BÁN HÀNG TRÊN FANPAGE</CustomText>
          <CustomText size={16} style={{ textAlign: 'center', marginTop: 10 }}>Quản lý comments, inbox của nhiều pages trên 1 cửa sổ - Tạo và quản lý đơn hàng</CustomText>
        </View>
        <View style={styles.contentBtn}>
          <TouchableWithoutFeedback onPress={this._doLogin}>
            <View style={styles.btnLogin}>
              <CustomText size={18} style={{ color: 'white', fontWeight: 'bold' }}>Đăng nhập với facebook</CustomText>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}
