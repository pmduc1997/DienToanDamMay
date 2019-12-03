import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView
} from "react-native";
import { Button } from "react-native-elements";
import BaseScreen from "app/screens/BaseScreen";
import styles from "./Styles";
import Header from "app/screens/header/Header";

import i18n from "app/localization/i18n";
import rf from "app/libs/RequestFactory";
import AppConfig from "app/utils/AppConfig";
import AppPreferences from "app/utils/AppPreferences";

import ic_back from "app/assets/icons/back.png";

export default class ChildProfile extends BaseScreen {
  constructor(props) {
    super(props);
    this.state = {
      dataChild: [
        {
          img_path:
            "http://file.vforum.vn/hinh/2018/02/hinh-anh-be-gai-de-thuong-cute-nhat-anh-baby-con-gai-19.png",
          userName: "Lê Thị Phương Linh",
          class: "Số 11, ngõ 32, phường Dịch Vọng Hậu, Cầu Giấy, Hà Nội",
          phone: "0984727093",
          photoList: [
            {
              img_path:
                "http://file.vforum.vn/hinh/2018/02/hinh-anh-be-gai-de-thuong-cute-nhat-anh-baby-con-gai-19.png"
            },
            {
              img_path:
                "https://4.bp.blogspot.com/-VMRM0zVLfeY/WxPFENxBlFI/AAAAAAAAAJ8/9ODzs3yV8u0r7Z1oGVIw-ieX5Cdo6yDnQCLcBGAs/s1600/em-be-gai-le-le.jpg"
            },
            {
              img_path:
                "https://i.pinimg.com/236x/8e/79/69/8e79691c7cfebc19d1c6279c809c68a1.jpg"
            }
          ]
        }
      ]
    };
  }

  _renderItem(item) {
    console.log(item);
    return (
      <View style={styles.listPhotoChild} onPress={this.gotoChildInfo}>
        <Image style={styles.photoChild} source={{ uri: item.img_path }} />
      </View>
    );
  }

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
            <Text style={styles.titleTab}>{i18n.t("child.title")}</Text>
          </View>
          <View style={{ flex: 0.5, paddingRight: 10 }}></View>
        </View>
        <View style={styles.container}>
          <View style={styles.user}>
            <View style={styles.avatar}>
              <Image
                style={styles.imageAvatar}
                source={{ uri: this.state.dataChild[0].img_path }}
              />
            </View>
            <Text style={[styles.name, { marginBottom: 30 }]}>
              {this.state.dataChild[0].userName}
            </Text>
            <View style={styles.info}>
              <Text style={styles.infoText1}>{i18n.t("child.class")}</Text>
              <Text style={styles.infoText2}>
                {this.state.dataChild[0].class}
              </Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoText1}>{i18n.t("child.phone")}</Text>
              <Text>{this.state.dataChild[0].phone}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.headerChild}>{i18n.t("child.title2")}</Text>
            <View style={{ backgroundColor: "#88BDFF", height: 1 }} />
            <FlatList
              horizontal={true}
              data={this.state.dataChild[0].photoList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => this._renderItem(item)}
            />
          </View>
        </View>
      </View>
    );
  }
}
