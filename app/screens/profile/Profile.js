import React, { Fragment } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput
} from "react-native";
import BaseScreen from "app/screens/BaseScreen";
import styles from "./Styles";
import Header from "app/screens/header/Header";

import i18n from "app/localization/i18n";
import rf from "app/libs/RequestFactory";
import AppConfig from "app/utils/AppConfig";

const NextIcon = require('app/assets/icons/arrow-next.png')
import ic_logout from "app/assets/icons/logout.png"

import { Avatar } from 'react-native-elements'
import CustomText from "app/components/customText";
import CustomDivider from "app/components/customDivider";

const MessengerIcon = require('../../assets/icons/messenger_black.png');
const EditIcon = require('../../assets/icons/edit.png')

export default class Profile extends BaseScreen {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  onEndReached() {

  }

  _renderItem(item) {
    return (
      <View style={styles.contact}>
        <View style={styles.contactAvatar}>
          {item.avatar
            ?
            <Avatar size={50} rounded source={{ uri: item.avatar }} />
            :
            <Avatar size="large" rounded title={item.name} />
          }
        </View>
        <View style={styles.contactInfo}>
          <CustomText size={16} style={styles.contactName}>{item.name}</CustomText>
          <CustomText size={13} style={styles.lastMessage}>{item.lastMessage}</CustomText>
        </View>
        <View style={styles.contactMore}>
          <TouchableOpacity>
            <Image
              style={styles.messenger}
              source={MessengerIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.navigate('EditCustomer') }}>
            <Image
              style={styles.edit}
              source={EditIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

    )
  }

  _goAbout = () => { }

  _goVersion = () => { }

  _goLogout = () => this.navigate('Login')
  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.area}>
        <Header ref={"header"} navigation={this.props.navigation} invisibleNotify rightIcon={ic_logout} rightAction={this._goLogout}>
          <CustomText style={styles.titleTab}>Cài đặt</CustomText>
        </Header>
        <View style={[styles.container]}>
          <View style={styles.boxAvatar}>
            <Image
              style={styles.avatar}
              source={{ uri: 'https://znews-photo.zadn.vn/w660/Uploaded/pnbcuhbatgunb/2019_09_14/70534444_150857789485843_7517361369506288123_n_1.jpg' }} />
            <View style={styles.infoUser}>
              <CustomText size={18} style={styles.username}>Bé Sa</CustomText>
              <CustomText size={12} style={{ lineHeight: 20 }}>besa_dichoi@gmail.com</CustomText>
              <CustomText size={12} style={{ lineHeight: 20 }}>Version: 1.0.0</CustomText>
              <View style={styles.btnUpdate}>
                <CustomText size={12}>Cập nhật phiên bản mới</CustomText>
              </View>
            </View>
          </View>
          <CustomDivider />
          <View style={styles.setting}>

          </View>
        </View>
      </View>
    );
  }
}
