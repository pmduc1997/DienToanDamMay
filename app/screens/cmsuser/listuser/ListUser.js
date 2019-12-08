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
import Header from './Header'
class ListUser extends BaseScreen {
  constructor(props) {
    super(props)
    this.state = {
      data: [
      ],
    }
  }
  _doAddUser = () => this.navigate('AddUser')
  _doDetailUser = (item) => (e) => {
    this.navigate('DetailUser', item)
  }
  _renderItem = (item) => {
    console.log('list render', item)
    return (
      <TouchableOpacity onPress={this._doDetailUser(item)}
      >
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
        this.setState({ data: data,newData:data });
      })
  }
  _onSearch = (text) => {
    console.log(text)
    const newData = this.state.data.filter(item => {
      return item.name.toLowerCase().search(text.toLowerCase()) !== -1;
    });

    this.setState({ newData: newData });
  }
  render() {
    const { goBack } = this.props.navigation
    return (
      <View style={styles.container}>
        <Header goBack={goBack}></Header>
        <View style={styles.search}>
          <View style={styles.icon}>
            <Icon name="search" size={16} color="gray" />
          </View>
          <TextInput style={styles.inputSearchUser} onChangeText={this._onSearch} />
        </View>
        <View style={styles.more}>


          <ScrollView>
            <FlatList
              data={this.state.newData}
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