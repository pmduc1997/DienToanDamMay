import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";

import BaseScreen from "app/screens/BaseScreen";
import styles from "./Styles";

import { KeyboardAvoidingViewKeyboardDismiss } from "app/helpers/KeyboardAvoidingViewKeyboardDismiss";
import i18n from "app/localization/i18n";

import complete_img from "app/assets/image/complete.png";

export default class CompleteForgot extends BaseScreen {
  constructor(props) {
    super(props);
  }

  handleSubmit = () => {
    this.navigate("Login")
  };

  render() {
    return (
      <KeyboardAvoidingViewKeyboardDismiss>
        <View style={styles.containerVerify}>
          <View style={styles.header}>
            <View style={styles.logoComplete}>
              <Image source={complete_img} />
            </View>
            <Text>
              {i18n.t("completeForgot.title")}
            </Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.buttonLogin}>
              <Button
                buttonStyle={styles.primaryButton}
                disabled={this.state.isLoading}
                onPress={this.handleSubmit}
                title={i18n.t("completeRegister.susses")}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingViewKeyboardDismiss>
    );
  }
}
