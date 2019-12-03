import React from "react";
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

import ic_back from "app/assets/icons/back.png";
import ic_search from "app/assets/icons/search.png";

import { Avatar } from 'react-native-elements'
import CustomText from "../../components/customText";
const MessengerIcon = require('../../assets/icons/messenger_black.png');
const EditIcon = require('../../assets/icons/edit.png')

export default class Customers extends BaseScreen {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: 'Nguyễn ngọc khánh chi',
          avatar: 'https://i.pinimg.com/736x/e3/f3/4d/e3f34de992ae4267f272550a5935447f.jpg',
          lastMessage: '@khanhchi'
        },
        {
          id: 2,
          name: 'Chi pu',
          avatar: 'https://znews-stc.zdn.vn/static/topic/person/chi%20pu.jpg',
          lastMessage: '@chipu'
        },
        {
          id: 3,
          name: 'Hoàng Anh',
          avatar: 'https://vtv1.mediacdn.vn/zoom/550_339/2017/crop-1508745739145.jpg',
          lastMessage: '@hoanganh'
        },

      ],
      page: 1
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

  onSearch = () => { }

  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.area}>
        <Header ref={"header"} navigation={this.props.navigation}>
          <CustomText style={styles.titleTab}>{i18n.t("customers.title")}</CustomText>
        </Header>
        <View style={[styles.container]}>
          <View style={styles.inputSearch}>
            <Image style={styles.searchIc} source={ic_search} />
            <TextInput
              keyboardType={"default"}
              placeholder={i18n.t("conversations.placeholder")}
              style={styles.searchTxt}
              // value={this.state.keySearch}
              onChangeText={keySearch => this.onSearch(keySearch)}
            />
          </View>
          <View>
            <FlatList
              data={this.state.data}
              keyExtractor={(item, index) => index.toString()}
              onEndReached={() => this.onEndReached()}
              onEndReachedThreshold={0.1}
              renderItem={({ item }) => this._renderItem(item)}
            />
          </View>
        </View>
      </View>
    );
  }
}
