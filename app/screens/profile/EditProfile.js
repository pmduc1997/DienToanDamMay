import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { Button } from "react-native-elements";
import BaseScreen from "app/screens/BaseScreen";
import styles from "./Styles";
import Header from "app/screens/header/Header";

import i18n from "app/localization/i18n";
import rf from "app/libs/RequestFactory";
import AppConfig from "app/utils/AppConfig";
import AppPreferences from "app/utils/AppPreferences";

import ic_back from "app/assets/icons/back.png";

export default class EditProfile extends BaseScreen {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      phone1: "",
      phone2: ""
    };
  }

  handleSubmit = () => {
    let result = this.validate({
      address: { required: true },
      phone1: { required: true, numbers: true },
      phone2: { required: true, numbers: true }
    });
  };

  render() {
    return (
      <View style={styles.area}>
        <View style={styles.headerTab}>
          <View style={{ flex: 0.5, paddingLeft: 10 }}>
            <TouchableOpacity onPress={() => this.navigate("Profile")}>
              <Image source={ic_back} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 2 }}>
            <Text style={styles.titleTab}>{i18n.t("editProfile.title")}</Text>
          </View>
          <View style={{ flex: 0.5, paddingRight: 10 }}></View>
        </View>
        <View style={styles.container}>
          <View style={[styles.inputGroup, { marginTop: 30 }]}>
            <Text style={styles.label}>{i18n.t("editProfile.address")}</Text>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.input}
                keyboardType={"default"}
                ref="address"
                value={this.state.address}
                onChangeText={address => this.setState({ address })}
                onBlur={() => this.validate({ address: { required: true } })}
              />
              <Text style={styles.errorMessage}>
                {this.isFieldInError("address")
                  ? this.getErrorsInField("address")[0]
                  : null}
              </Text>
            </View>
          </View>
          <View style={[styles.inputGroup, { marginTop: 10 }]}>
            <Text style={styles.label}>{i18n.t("editProfile.phone1")}</Text>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.input}
                keyboardType={"numeric"}
                ref="phone1"
                value={this.state.phone1}
                onChangeText={phone1 => this.setState({ phone1 })}
                onBlur={() =>
                  this.validate({ phone1: { required: true, number: true } })
                }
              />
              <Text style={styles.errorMessage}>
                {this.isFieldInError("phone1")
                  ? this.getErrorsInField("phone1")[0]
                  : null}
              </Text>
            </View>
          </View>
          <View style={[styles.inputGroup, { marginTop: 10 }]}>
            <Text style={styles.label}>{i18n.t("editProfile.phone2")}</Text>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.input}
                keyboardType={"numeric"}
                ref="phone2"
                value={this.state.phone2}
                onChangeText={phone2 => this.setState({ phone2 })}
                onBlur={() =>
                  this.validate({ phone2: { required: true, number: true } })
                }
              />
              <Text style={styles.errorMessage}>
                {this.isFieldInError("phone2")
                  ? this.getErrorsInField("phone2")[0]
                  : null}
              </Text>
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.buttonLogin}>
              <Button
                buttonStyle={styles.primaryButton}
                disabled={this.state.isLoading}
                onPress={this.handleSubmit}
                title={i18n.t("editProfile.save")}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
