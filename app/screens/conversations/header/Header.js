import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import BaseScreen from "app/screens/BaseScreen";
import styles from "./Styles";
import ic_notification from "app/assets/icons/notification.png";

export default class Header extends BaseScreen {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.headerTab}>
        <View style={styles.left}>
          {this.props.children}
        </View>
        <View style={{ flex: 0.5, paddingRight: 10, alignItems: "flex-end" }}>
          <TouchableOpacity onPress={() => this.navigate("Notification")}>
            <Image source={ic_notification} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
