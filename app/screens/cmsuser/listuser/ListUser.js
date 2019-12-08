import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Button
} from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import BaseScreen from '../../BaseScreen'

class ListUser extends BaseScreen {
  constructor(props) {
    super(props)
    this.state = {
      data: [
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
          title: 'PM Vuong',
          desuser: 'Xem tất cả danh sách user ',
        },
        {
          id: '4',
          title: 'PM Lê',
          desuser: 'Xem tất cả danh sách user ',
        },
        {
          id: '5',
          title: 'PM Dam',
          desuser: 'Xem tất cả danh sách user ',
        },
      ]
    }
  }
  _doAddUser = () => this.navigate('AddUser')
  _doDetailUser = () => this.navigate('DetailUser')
  _renderItem = (item) => {
    return (
      <TouchableOpacity onPress={this._doDetailUser}>
        <View style={styles.item}>
          <View style={styles.textName}>
            <Text style={styles.listuser}>{item.title}</Text>
            <Text style={styles.desuser}>Xem tất cả danh sách User </Text>
          </View>
          <View style={styles.iconListUser}>
            <Icon name="info" size={16} color="gray" />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
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
              data={this.state.data}
              renderItem={({ item }) =>
                this._renderItem(item)
              }
              keyExtractor={item => item.id}
            />
          </ScrollView>
          <TouchableOpacity style={styles.more2} onPress={this._doAddUser}>
            <Text style={styles.btnAddUser}>Thêm User </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ListUser;