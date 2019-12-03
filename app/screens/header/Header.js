import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import BaseScreen from "app/screens/BaseScreen";
import styles from "./Styles";
import ic_notification from "app/assets/icons/notification.png";
import ic_add from "app/assets/icons/icon-plus.png";
;

export default class Header extends BaseScreen {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.headerTab}>
        <View style={{ flex: 0.5, paddingLeft: 10 }}>
        </View>
        <View style={{ flex: 2 }}>
          {this.props.children}
        </View>
        <View style={{ flex: 0.5, paddingRight: 10, alignItems: "flex-end" }}>
          {!this.props.invisibleNotify && <TouchableOpacity onPress={() => this.navigate("Notification")}>
            <Image source={ic_add} style={styles.rightIcon}/>
          </TouchableOpacity>}
          {this.props.rightAction && <TouchableOpacity onPress={() => this.props.rightAction()}>
            <Image source={this.props.rightIcon} style={styles.rightIcon} resizeMode="contain"/>
          </TouchableOpacity>}
        </View>
      </View>
    );
  }
}
