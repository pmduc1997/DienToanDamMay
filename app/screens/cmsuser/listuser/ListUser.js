import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Danh sách User',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Danh sách User',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Danh sách User',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Danh sách User',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Danh sách User',
  },
];

function Item({title}) {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <View style={styles.textName}>
          <Text style={styles.listuser}>{title}</Text>
          <Text style={styles.desuser}>Xem tất cả danh sách User </Text>
        </View>
        <View style={styles.iconListUser}>
            <Icon name="info" size={16} color="gray" />
          </View>
      </View>
    </TouchableOpacity>
  );
}
class ListUser extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.search}>
          <View style={styles.icon}>
            <Icon name="search" size={16} color="gray" />
          </View>
          <TextInput style={styles.inputSearchUser} />
        </View>
        <View style={styles.more}>
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
    );
  }
}

export default ListUser;
