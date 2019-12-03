import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";

import BaseScreen from "app/screens/BaseScreen";
import styles from "./Styles";

import { KeyboardAvoidingViewKeyboardDismiss } from "app/helpers/KeyboardAvoidingViewKeyboardDismiss";
import i18n from "app/localization/i18n";

import complete_img from "app/assets/image/complete.png";

export default class CompleteRegister extends BaseScreen {
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
              {i18n.t("completeRegister.title1")}
            </Text>
            <View style={styles.textCompleteGroup}>
              <Text>
                {i18n.t("completeRegister.title2")}
              </Text>
              <Text style={styles.textHighlight}>
                {i18n.t("completeRegister.title3")}
              </Text>
              <Text>
                {i18n.t("completeRegister.title4")}
              </Text>
            </View>
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
