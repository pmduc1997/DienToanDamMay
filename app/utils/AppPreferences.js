import * as Keychain from "react-native-keychain";
import AppConfig from "./AppConfig";

export default class AppPreferences {
  static async saveAccessToken(userInfo, token, remember = false) {
    AppPreferences.saveUserInfo(userInfo, token);
    if (remember) {
      await Keychain.setGenericPassword(JSON.stringify(userInfo), token, {
        accessible: Keychain.ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY
      });
    }
  }

  static saveUserInfo(userInfo, token) {
    AppConfig.userInfo = userInfo;
    AppConfig.ACCESS_TOKEN = token;
  }

  static async getAccessToken() {
    return await Keychain.getGenericPassword();
  }

  static async removeAccessToken() {
    AppConfig.userInfo = {};
    AppConfig.ACCESS_TOKEN = "";
    return await Keychain.resetGenericPassword();
  }
}
