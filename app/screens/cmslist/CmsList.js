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

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Danh sách User',
  },
  
];
function Item({title}) {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <Text style={styles.listuser}>{title}</Text>
        <Text style={ styles.desuser }>Xem tất cả danh sách User  </Text>
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
              <Text>Icon</Text>
            </View>
            <View style={styles.menu}>
              <Text>Menu</Text>
            </View>
          </View>

          <View>
            <ScrollView>
              <FlatList
                data={DATA}
                renderItem={({item}) => (
                  <Item style={styles.listuser} title={item.title} />
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
