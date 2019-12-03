import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import DatePicker from "react-native-datepicker";

import BaseScreen from "app/screens/BaseScreen";
import styles from "./Styles";

import { KeyboardAvoidingViewKeyboardDismiss } from "app/helpers/KeyboardAvoidingViewKeyboardDismiss";
import i18n from "app/localization/i18n";

import logo_re_img from "app/assets/image/logo_re.png";

export default class Registration extends BaseScreen {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      birthDay: new Date(),
      phone: "",
      password: "",
      rePassword: "",
      isLoading: false
    };
  }

  handleSubmit = () => {
    let result = this.validate({
      firstName: { required: true },
      lastName: { required: true },
      birthDay: { required: true },
      phone: { required: true, numbers: true },
      password: { required: true },
      rePassword: { confirmPassword: this.state.password }
    });

    if (result) {
      this.setState({ isLoading: true });
      this.navigate("Verification");
    }
  };

  render() {
    return (
      <KeyboardAvoidingViewKeyboardDismiss>
        <View style={styles.container}>
          <View style={styles.headerRe}>
            <Image style={styles.logo} source={logo_re_img} />
            <View style={styles.title1}>
              <Text style={styles.headerTitle}>
                {i18n.t("registration.title")}
              </Text>
            </View>
            <View style={styles.title2}>
              <Text style={styles.label}>
                {i18n.t("registration.title_left")}
              </Text>
              <TouchableOpacity
                style={styles.titleLink}
                onPress={() => this.navigate("Login")}
              >
                <Text style={styles.labelLink}>
                  {i18n.t("registration.title_right")}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.main}>
            <View style={styles.inputGroupRe1}>
              <View style={styles.inputLeft1}>
                <Text style={styles.label}>
                  {i18n.t("registration.firstName")}
                </Text>
                <View style={styles.inputBox}>
                  <TextInput
                    style={styles.input}
                    keyboardType={"default"}
                    ref="firstName"
                    value={this.state.firstName}
                    onChangeText={firstName => this.setState({ firstName })}
                    onBlur={() =>
                      this.validate({
                        firstName: { required: true, number: true }
                      })
                    }
                  />
                  <Text style={styles.errorMessage}>
                    {this.isFieldInError("firstName")
                      ? this.getErrorsInField("firstName")[0]
                      : null}
                  </Text>
                </View>
              </View>
              <View style={styles.inputRight1}>
                <Text style={styles.label}>
                  {i18n.t("registration.lastName")}
                </Text>
                <View style={styles.inputBox}>
                  <TextInput
                    style={styles.input}
                    keyboardType={"default"}
                    ref="lastName"
                    value={this.state.lastName}
                    onChangeText={lastName => this.setState({ lastName })}
                    onBlur={() =>
                      this.validate({
                        lastName: { required: true, number: true }
                      })
                    }
                  />
                  <Text style={styles.errorMessage}>
                    {this.isFieldInError("lastName")
                      ? this.getErrorsInField("lastName")[0]
                      : null}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                {i18n.t("registration.birthDay")}
              </Text>
              <View style={styles.inputBoxDate}>
                <DatePicker
                  style={[{ width: "100%" }, styles.input]}
                  date={this.state.birthDay}
                  mode="date"
                  format="DD/MM/YYYY"
                  confirmBtnText={i18n.t("button.ok")}
                  cancelBtnText={i18n.t("button.cancel")}
                  customStyles={{
                    dateIcon: {
                      position: "absolute",
                      right: 0
                    },
                    dateInput: {
                      borderWidth: 0,
                      alignItems: "flex-start"
                    }
                  }}
                  onDateChange={date => {
                    this.setState({ birthDay: date });
                  }}
                />
                <Text style={styles.errorMessage}>
                  {this.isFieldInError("birthDay")
                    ? this.getErrorsInField("birthDay")[0]
                    : null}
                </Text>
              </View>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>{i18n.t("registration.phone")}</Text>
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
              <Text style={styles.label}>
                {i18n.t("registration.password")}
              </Text>
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
              <Text style={styles.label}>
                {i18n.t("registration.rePassword")}
              </Text>
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
            <View style={[styles.buttonLogin, {marginBottom: 20}]}>
              <Button
                buttonStyle={styles.primaryButton}
                disabled={this.state.isLoading}
                onPress={this.handleSubmit}
                title={i18n.t("registration.continueRegister")}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingViewKeyboardDismiss>
    );
  }
}
