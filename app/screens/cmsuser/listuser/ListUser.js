import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import BaseScreen from '../../BaseScreen';
const DATA = [
  {
    id: '1',
    title: 'PM Truong',
    desuser: 'Xem tất cả danh sách user ',
  },
  {
    id: '2',
    title: 'PM Du',
    desuser: 'Xem tất cả danh sách user ',
  },
  {
    id: '3',
    title: 'PM Nguyen',
    desuser: 'Xem tất cả danh sách user ',
  },
  {
    id: '4',
    title: 'PM Pham',
    desuser: 'Xem tất cả danh sách user ',
  },
  {
    id: '5',
    title: 'PM Dam',
    desuser: 'Xem tất cả danh sách user ',
  },
];

function Item({title, desuser}) {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <View style={styles.textName}>
          <Text style={styles.listuser}>{title}</Text>
          <Text style={styles.desuser}>{desuser}</Text>
        </View>
        <View style={styles.iconListUser}>
          <Icon name="info" size={16} color="gray" />
        </View>
      </View>
    </TouchableOpacity>
  );
}
class ListUser extends BaseScreen {
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
                <Item style={styles.listuser} title={item.title} desuser={item.desuser}/>
              )}
              keyExtractor={item => item.id}
            />
          </ScrollView>
          <TouchableOpacity style={styles.more2}>
            <Text style={styles.btnAddUser}>Thêm User </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ListUser;
