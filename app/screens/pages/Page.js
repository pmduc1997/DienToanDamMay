import React from "react";
import {
  View,
  TouchableWithoutFeedback,
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
import ic_add from "app/assets/icons/icon-plus.png";

export default class Pages extends BaseScreen {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: 'Vé máy bay giá rẻ',
          avatar: 'https://i.pinimg.com/736x/e3/f3/4d/e3f34de992ae4267f272550a5935447f.jpg',
          status: 'Hoạt động',
          color: 'green'
        },
        {
          id: 2,
          name: '1 bước đến với thành công',
          avatar: 'https://i.pinimg.com/736x/e3/f3/4d/e3f34de992ae4267f272550a5935447f.jpg',
          status: 'Mất kết nối',
          color: 'red'
        },
        {
          id: 3,
          name: 'Du lịch giá rẻ hôm nay',
          avatar: 'https://i.pinimg.com/736x/e3/f3/4d/e3f34de992ae4267f272550a5935447f.jpg',
          status: 'Tạm dừng',
          color: 'gray'
        },

      ],
      page: 1
    };
  }

  onEndReached() {

  }

  _renderItem(item) {
    return (
      <TouchableOpacity>
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
            <CustomText size={13} style={[styles.lastMessage, { color: item.color }]}>{item.status}</CustomText>
          </View>
          <View style={styles.contactMore}>
            <Image
              style={styles.messenger}
              source={MessengerIcon}
            />
            <Image
              style={styles.edit}
              source={EditIcon}
            />
          </View>
        </View>
      </TouchableOpacity>

    )
  }

  onSearch = () => { }

  _goConnectPage = () => this.navigate('ConnectPage')

  renderFooter = () => <View style={styles.noPage}>
    <TouchableWithoutFeedback onPress={this._goConnectPage}>
      <View style={styles.btnRefresh}>
        <Image style={styles.addIcon} source={ic_add} />
        <CustomText style={styles.txtConnect}>Kết nối fanpage</CustomText>
      </View>
    </TouchableWithoutFeedback>
  </View>

  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.area}>
        <Header ref={"header"} navigation={this.props.navigation}>
          <CustomText style={styles.titleTab}>Trang của :Tên shop:</CustomText>
        </Header>
        <View style={[styles.container]}>
          <View style={styles.inputSearch}>
            <Image style={styles.searchIc} source={ic_search} />
            <TextInput
              keyboardType={"default"}
              placeholder={"Tìm theo tên page"}
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
              ListFooterComponent={this.renderFooter}
            />
          </View>
        </View>
      </View>
    );
  }
}
