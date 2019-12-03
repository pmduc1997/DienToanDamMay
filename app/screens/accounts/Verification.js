import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";

import BaseScreen from "app/screens/BaseScreen";
import styles from "./Styles";

import { KeyboardAvoidingViewKeyboardDismiss } from "app/helpers/KeyboardAvoidingViewKeyboardDismiss";
import i18n from "app/localization/i18n";

import ic_back from "app/assets/icons/back.png";
import verify_img from "app/assets/image/verify.png";

export default class Verification extends BaseScreen {
  constructor(props) {
    super(props);
    this.state = {
      code1: "",
      code2: "",
      code3: "",
      code4: "",
      isLoading: false
    };
  }

  handleSubmit = () => {
    this.navigate("CompleteRegister")
  };

  render() {
    return (
      <KeyboardAvoidingViewKeyboardDismiss>
        <View style={styles.containerVerify}>
          <View style={styles.headerVerify}>
            <TouchableOpacity style={styles.headerButton} onPress={()=> this.navigate("Registration")}>
              <Image source={ic_back} />
              <Text style={styles.headerText}>
                {i18n.t("verification.back")}
              </Text>
            </TouchableOpacity>
            <View style={styles.logoVerify}>
              <Image source={verify_img} />
            </View>
            <View style={styles.logoVerify}>
              <Text style={styles.titleVerify}>
                {i18n.t("verification.title1")}
              </Text>
            </View>
          </View>
          <View style={styles.main}>
            <View style={this.state.errorMessage ? styles.errorBox : {}}>
              <Text style={styles.errorMessage}>
                {this.state.errorMessage ? this.state.errorMessage : null}
              </Text>
            </View>
            <Text style={styles.labelVerify}>
              {i18n.t("verification.title2")}
            </Text>
          </View>
          <View style={styles.footer}>
            <View style={[styles.buttonLogin, {marginTop: 120} ]}>
              <Button
                buttonStyle={styles.primaryButton}
                disabled={this.state.isLoading}
                onPress={this.handleSubmit}
                title={i18n.t("verification.susses")}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingViewKeyboardDismiss>
    );
  }
}
