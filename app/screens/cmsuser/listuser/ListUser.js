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
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'Danh sách Userrrrr',
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b',
          title: 'Danh sách User',
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28',
          title: 'Danh sách User',
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2',
          title: 'Danh sách User',
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb',
          title: 'Danh sách User',
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

          <Button
            title="Thêm mới User"
            onPress={this._doAddUser}
          />


          <ScrollView>
            <FlatList
              data={this.state.data}
              renderItem={({ item }) =>
                this._renderItem(item)
              }
              keyExtractor={item => item.id}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default ListUser;
