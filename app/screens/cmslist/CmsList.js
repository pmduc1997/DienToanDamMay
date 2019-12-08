import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import BaseScreen from 'app/screens/BaseScreen';
import styles from './Styles';
import ic_notification from 'app/assets/icons/notification.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconCom from 'react-native-vector-icons/MaterialCommunityIcons';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

export default class CmsList extends BaseScreen {
  constructor(props) {
    super(props);

    this.state = {
      DATA: [
        {
          id:1,
          title: 'Danh sách user',
          description: 'Xem tất cả danh sách user',
        },
        {
          id: 2,
          title: 'Danh sách bài viết',
          description: 'Xem tất cả danh sách bài viết',
        },
      ],
    };
  }

  _doList = (item) => {
    console.log("itemmmm vao day121",item)
  };

  Item = (item) => {
    return (
      <TouchableOpacity onPress={this._doList(item)} >
        <View style={styles.item } >
          <Text style={styles.listuser}>{item.title}</Text>
          <Text style={styles.desuser}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.headerTab}>
        <View style={styles.contentcmsuser}>
          <View style={styles.menuheader}>
            <View style={styles.left}>
              <TouchableOpacity>
                <IconCom name="arrow-left" size={20} color="white" />
              </TouchableOpacity>
            </View>

            <View style={styles.menu}>
              <Text style={styles.titlemenu}>Menu</Text>
            </View>
          </View>

          <View>
            <ScrollView>
              <FlatList
                data={this.state.DATA}
                renderItem={({item,index}) => this.Item(item,index)}
                keyExtractor={item => item.id}
              />
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}
