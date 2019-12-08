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
      ],
    }
  }
  _doAddUser = () => this.navigate('AddUser')
  _doDetailUser = () => this.navigate('DetailUser')
  _renderItem = (item) => {
    return (
      <TouchableOpacity onPress={this._doDetailUser}>
        <View style={styles.item}>
          <View style={styles.textName}>
            <Text style={styles.listuser}>{item.name}</Text>
            <Text style={styles.desuser}>Xem tất cả danh sách User </Text>
          </View>
          <View style={styles.iconListUser}>
            <Icon name="info" size={16} color="gray" />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  componentDidMount() {
    const AuthStr = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODQ4NTkxNjcsImlhdCI6MTU3NTc3Mjc2Nywic3ViIjoiNWRhNjkxYWVjMGEzNGYwZjI2NTgwNTRlIn0.hmDnXUFLfGjWXRancIePeWfygSyL5XQMA8Ic4gm_7LU';
        
    axios.get(`http://108.160.133.232:3040/v1/users`, { headers: { Authorization: AuthStr } })
      .then(res => {
        const data = res.data;
        console.log(res.data)
        this.setState({ data: data });
      })
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