import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import styles from './Styles'
import CustomText from '../../../components/customText/index'
import { Input, Button } from 'react-native-elements';
import BaseScreen from '../../BaseScreen'
import axios from 'axios'
import Header from './Header'
export default class EditUser extends BaseScreen {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                name: 'test',
                mobile: '1235',
                password: '1',
                description: 'chinh xac'
            },
        }
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
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
        const { goBack } = this.props.navigation
        return (
            <View style={[styles.container, { padding: 15 }]}>
            <Header style={{ flex: 1 }} goBack={goBack}></Header>
                <View style={styles.top}>
                    <CustomText style={styles.title}> Sửa user </CustomText>
                </View>
                <View style={styles.center}>
                    <Input label='Tên người dùng' containerStyle={styles.input} value={user.name} onChangeText={text => this._onChangeText(text, 'name')} />
                    <Input label='Số điện thoại' containerStyle={styles.input} value={user.mobile} onChangeText={text => this._onChangeText(text, 'mobile')} />
                    <Input label='Mật khẩu' containerStyle={styles.input} value={user.password} onChangeText={text => this._onChangeText(text, 'password')} />
                    <Input label='Mô tả' containerStyle={styles.input} value={user.description} onChangeText={text => this._onChangeText(text, 'description')} />
                </View>
                <View style={styles.bottom}>
                    <Button title="Cập nhật" onPress={this._onSubmitAdd} />
                </View>
            </View>
        )
    }
}
