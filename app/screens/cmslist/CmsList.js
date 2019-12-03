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

const DATA = [
  {
    id: '1',
    title: 'Danh sách user',
    description:"Xem tất cả danh sách user"
  },
  {
    id: '2',
    title: 'Danh sách bài viết',
    description:"Xem tất cả danh sách bài viết"

  },
];
function Item({title,description}) {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <Text style={styles.listuser}>{title}</Text>
        <Text style={styles.desuser}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}
export default class CmsList extends BaseScreen {
  constructor(props) {
    super(props);
  }

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
                data={DATA}
                renderItem={({item}) => (
                  <Item style={styles.listuser} title={item.title} description={item.description} />
                )}
                keyExtractor={item => item.id}
              />
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}
