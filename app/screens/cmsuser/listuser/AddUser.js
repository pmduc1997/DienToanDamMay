import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import styles from './Styles'
import CustomText from '../../../components/customText/index'
import { Input, Button } from 'react-native-elements';
import BaseScreen from '../../BaseScreen'
import axios from 'axios'
export default class AddUser extends BaseScreen {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                name: 'test',
                mobile: '1235',
                password:'1',
                description: 'chinh xac'
            }
        }
    }
    _onChangeText = (text, label) => {
        console.log(this.state.user)
        this._setState({
            user: {
                ...this.state.user,
                [label]: text
            },

        })
    }
    _onSubmitAdd = () => {
        const { user } = this.state
        axios.post(`http://108.160.133.232:3040/v1/users`, { user })
            .then(res => {
                console.log(res.data);
            })
    }
    render() {
        const { user } = this.state
        return (
            <View style={[styles.container, { padding: 15 }]}>
                <View style={styles.top}>
                    <CustomText style={styles.title}> Thêm mới user </CustomText>
                </View>
                <View style={styles.center}>
                    <Input placeholder='Tên người dùng' containerStyle={{ marginBottom: 15 }} value={user.name} onChangeText={text => this._onChangeText(text, 'name')} />
                    <Input placeholder='Số điện thoại' containerStyle={{ marginBottom: 15 }} value={user.mobile} onChangeText={text => this._onChangeText(text, 'mobile')} />
                    <Input placeholder='Mật khẩu' containerStyle={styles.input} value={user.password} onChangeText={text => this._onChangeText(text, 'password')} />
                    <Input placeholder='Mô tả' containerStyle={{ marginBottom: 15 }} value={user.description} onChangeText={text => this._onChangeText(text, 'description')} />
                </View>
                <View style={styles.bottom}>
                    <Button title="Thêm mới" onPress={this._onSubmitAdd} />
                </View>
            </View>
        )
    }
}
