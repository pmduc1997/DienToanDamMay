import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";

import BaseScreen from "app/screens/BaseScreen";
import styles from "./Styles";

import { KeyboardAvoidingViewKeyboardDismiss } from "app/helpers/KeyboardAvoidingViewKeyboardDismiss";
import i18n from "app/localization/i18n";

import ic_back from "app/assets/icons/back.png";
import forgot_img from "app/assets/image/forgot.png";

export default class ForgotPassword extends BaseScreen {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      password: "",
      rePassword: "",
      isLoading: false
    };
  }

  handleSubmit = () => {
    let result = this.validate({
      phone: { required: true, numbers: true },
      password: { required: true },
      rePassword: { confirmPassword: this.state.password }
    });

    if (result) {
      this.setState({ isLoading: true });
      this.navigate("CompleteForgot");
    }
  };

  render() {
    return (
      <KeyboardAvoidingViewKeyboardDismiss>
        <View style={styles.containerVerify}>
          <View style={styles.headerVerify}>
            <TouchableOpacity
              style={styles.headerButton}
              onPress={() => this.navigate("Login")}
            >
              <Image source={ic_back} />
              <Text style={styles.headerText}>
                {i18n.t("verification.back")}
              </Text>
            </TouchableOpacity>
            <View style={styles.logoVerify}>
              <Image source={forgot_img} />
            </View>
            <View style={styles.logoVerify}>
              <Text style={styles.titleVerify}>
                {i18n.t("forgotPassword.title1")}
              </Text>
            </View>
          </View>
          <View style={[styles.main, { paddingHorizontal: 15 }]}>
            <View style={this.state.errorMessage ? styles.errorBox : {}}>
              <Text style={styles.errorMessage}>
                {this.state.errorMessage ? this.state.errorMessage : null}
              </Text>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>{i18n.t("forgotPassword.text1")}</Text>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  keyboardType={"numeric"}
                  ref="phone"
                  value={this.state.phone}
                  onChangeText={phone => this.setState({ phone })}
                  onBlur={() =>
                    this.validate({
                      phone: { required: true, number: true }
                    })
                  }
                />
                <Text style={styles.errorMessage}>
                  {this.isFieldInError("phone")
                    ? this.getErrorsInField("phone")[0]
                    : null}
                </Text>
              </View>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>{i18n.t("forgotPassword.text2")}</Text>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  ref="password"
                  value={this.state.password}
                  onChangeText={password => this.setState({ password })}
                  onBlur={() => this.validate({ password: { required: true } })}
                />
                <Text style={styles.errorMessage}>
                  {this.isFieldInError("password")
                    ? this.getErrorsInField("password")[0]
                    : null}
                </Text>
              </View>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>{i18n.t("forgotPassword.text3")}</Text>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  ref="rePassword"
                  value={this.state.rePassword}
                  onChangeText={rePassword => this.setState({ rePassword })}
                  onBlur={() =>
                    this.validate({
                      rePassword: { confirmPassword: this.state.password }
                    })
                  }
                />
                <Text style={styles.errorMessage}>
                  {this.isFieldInError("rePassword")
                    ? this.getErrorsInField("rePassword")[0]
                    : null}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.buttonLogin}>
              <Button
                buttonStyle={styles.primaryButton}
                disabled={this.state.isLoading}
                onPress={this.handleSubmit}
                title={i18n.t("forgotPassword.next")}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingViewKeyboardDismiss>
    );
  }
}
