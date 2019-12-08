import React, { Component } from 'react';
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
import { Avatar } from 'react-native-elements';
import axios from 'axios';
import BaseScreen from '../../BaseScreen'
import Header from '../listuser/Header'

class DetailUser extends BaseScreen {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        mobile: '',
        description: ''
      },
    };
  }
  componentDidMount() {
    const { params } = this.props.navigation.state
    
    const AuthStr = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODQ4NTkxNjcsImlhdCI6MTU3NTc3Mjc2Nywic3ViIjoiNWRhNjkxYWVjMGEzNGYwZjI2NTgwNTRlIn0.hmDnXUFLfGjWXRancIePeWfygSyL5XQMA8Ic4gm_7LU';

    axios.get(`http://108.160.133.232:3040/v1/users/`+params.id, { headers: { Authorization: AuthStr } })
      .then(res => {
        const data = res.data;
        this.setState({ user: data });
      })
  
  }
  _doEditUser = (user) => (e) => {
    this.navigate('EditUser',user)
  }
  render() {
    const { user } = this.state;
    const { goBack } = this.props.navigation
    return (
      <View style={styles.container}>
        <Header style={{ flex: 1 }} goBack={goBack}></Header>
        <View style={styles.more}>
          <Text style={styles.textInfo}>Thông tin User </Text>

          <View style={styles.avatar}>
            <Avatar
              rounded
              size={120}
              source={{
                uri: 'https://sohanews.sohacdn.com/thumb_w/660/2019/photo1567908505470-1567908505764-crop-15679085150091937764892.jpg',
              }}
            />
          </View>

          <View style={styles.info}>
            <Text style={styles.label}>Tên: </Text>
            <Text style={styles.name}>{user.name}</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.label}>Số điện thoại: </Text>
            <Text style={styles.name}>{user.mobile}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.label}>Mô tả: </Text>
            <Text style={styles.name}>{user.description}</Text>
          </View>

          <TouchableOpacity onPress={this._doEditUser(user)}>
            <Text style={styles.btnEditUser}>Sửa User </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default DetailUser;
