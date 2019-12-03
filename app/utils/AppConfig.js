export default class AppConfig {
  static isFakeRequest = true;
  static userInfo = {};
  static ACCESS_TOKEN = "";
  static defaultLang = "vn";

  static getApiServer() {
    return "http://45.76.186.225/api/v1";
  }
}
