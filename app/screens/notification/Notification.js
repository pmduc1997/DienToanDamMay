import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView
} from "react-native";
import BaseScreen from "app/screens/BaseScreen";
import styles from "./Styles";

import i18n from "app/localization/i18n";
import rf from "app/libs/RequestFactory";
import AppConfig from "app/utils/AppConfig";

import ic_back from "app/assets/icons/back.png";
import CustomText from "../../components/customText/index";
import data from "./data";
import { Icon } from 'react-native-elements'
import { mainColor } from "../../utils/styleUtils";

export default class New extends BaseScreen {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.area}>
        <View style={styles.headerTab}>
          <View style={{ flex: 0.5, paddingLeft: 10 }}>
            <TouchableOpacity onPress={() => this.navigate("Conversations")}>
              <Image source={ic_back} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 2 }}>
            <Text style={styles.titleTab}>{i18n.t("notification.title")}</Text>
          </View>
          <View style={{ flex: 0.5, paddingRight: 10 }}></View>
        </View>
        <View style={[styles.container, { marginTop: 20 }]}>
          <ScrollView>
            {
              data.map((item, index) =>
                <View key={index}>
                  <TouchableOpacity style={styles.notiItem}>
                    <View style={styles.notiIcon}>
                      <Icon type="font-awesome" name={item.icon} color='white' size={25} />
                    </View>
                    <View style={styles.notiContent}>
                      <CustomText style={{ fontSize: 18, flexWrap: 'wrap' }}>{item.status}</CustomText>
                      <CustomText style={{ fontSize: 15, color: '#bdbdbd' }}>{item.time}</CustomText>
                    </View>
                  </TouchableOpacity>
                </View>
              )
            }
          </ScrollView>
        </View>
      </View>
    );
  }
}
