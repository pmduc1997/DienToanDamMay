import React, { Component } from 'react'
import { Text, View, TextInput, KeyboardAvoidingView } from 'react-native'
import styles from './Styles'
import CustomText from '../../../components/customText/index'
import { Input, Button } from 'react-native-elements';
import BaseScreen from '../../BaseScreen'
import axios from 'axios'
import Header from './Header'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
export default class AddUser extends BaseScreen {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                name: '',
                mobile: '',
                password: '122222222',
                description: '',
                types:'test'
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
        const AuthStr = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODQ4NTkxNjcsImlhdCI6MTU3NTc3Mjc2Nywic3ViIjoiNWRhNjkxYWVjMGEzNGYwZjI2NTgwNTRlIn0.hmDnXUFLfGjWXRancIePeWfygSyL5XQMA8Ic4gm_7LU';
        axios.post(`http://108.160.133.232:3040/v1/users`, user , { headers: { Authorization: AuthStr } })
            .then(res => {
                console.log(res.data);
            })
    }
    render() {
        const { user } = this.state
        const { goBack } = this.props.navigation
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" >
                <View style={[styles.container, { padding: 15 }]}>
                    <Header goBack={goBack}></Header>
                    <View style={styles.top}>
                        <CustomText style={styles.title}> Thêm mới user </CustomText>
                    </View>
                    <View style={styles.center}>
                        <Input label='Tên người dùng' containerStyle={styles.input} value={user.name} onChangeText={text => this._onChangeText(text, 'name')} />
                        <Input label='Số điện thoại' containerStyle={styles.input} value={user.mobile} onChangeText={text => this._onChangeText(text, 'mobile')} />
                        <Input label='Mô tả' containerStyle={styles.input} value={user.description} onChangeText={text => this._onChangeText(text, 'description')} />
                    </View>
                    <View style={styles.bottom}>
                        <Button title="Thêm mới" onPress={this._onSubmitAdd} />
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}
