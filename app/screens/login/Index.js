import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import CustomText from "app/components/customText";
import CustomDivider from "app/components/customDivider";
import { mainColor } from '../../utils/styleUtils';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../login/Styles';
import { KeyboardAvoidingViewKeyboardDismiss } from "app/helpers/KeyboardAvoidingViewKeyboardDismiss";
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
            password: '',
            isShow: true
        }
    }

    onChangeMobileText = (text) => {
        this.setState({
            mobile: text
        })
    }

    onChangePassText = (text) => {
        this.setState({
            password: text
        })
    }

    _login = () => {
        const { mobile, password } = this.state
        let user = {
            password: "123456",
            mobile: "0966713074"
        }
        axios
            .post(`http://108.160.133.232:3040/v1/auth/login`, user)
            .then(res => {
                console.log(res)
            });
    }

    _showPass = () => {
        this.setState({
            isShow: false
        })
    }

    _hidePass = () => {
        this.setState({
            isShow: true
        })
    }

    render() {
        const { isShow } = this.state
        return (
            <KeyboardAvoidingViewKeyboardDismiss>
                <View style={styles.title}>
                    <CustomText style={{ fontSize: 30 }}>
                        Đăng nhập CMS
                    </CustomText>
                    <Icon style={{ marginVertical: 10 }} name="users" size={70} color={mainColor.baseColor} />
                </View>
                <View style={styles.inputFrame}>
                    <View style={styles.inputContent}>
                        <Icon style={{ marginHorizontal: 10 }} name="phone" size={20} color={mainColor.baseColor} />
                        <TextInput keyboardType={'numeric'}
                            style={{ width: '90%', borderLeftWidth: 1 / 2, padding: 10 }}
                            placeholder='Nhập số điện thoại ...'
                            onChangeText={(text) => this.onChangeMobileText(text)}
                        >
                        </TextInput>
                    </View>
                    <View style={styles.inputContent}>
                        <Icon style={{ marginHorizontal: 10 }} name="lock" size={20} color={mainColor.baseColor} />
                        <TextInput
                            onChangeText={(text) => this.onChangePassText(text)}
                            style={{ width: '90%', borderLeftWidth: 1 / 2, padding: 10 }}
                            placeholder='Nhập mật khẩu ...'
                            secureTextEntry={this.state.isShow}>
                        </TextInput>
                    </View>
                    <View style={{ marginTop: 10, flexDirection: 'row', marginLeft: 250 }}>
                        {
                            isShow ?
                                <TouchableOpacity onPress={this._showPass}>
                                    <CustomText style={{ color: mainColor.baseColor }}>Hiện mật khẩu</CustomText>
                                </TouchableOpacity> :
                                <TouchableOpacity onPress={this._hidePass}>
                                    <CustomText style={{ color: mainColor.baseColor }}>Ẩn mật khẩu</CustomText>
                                </TouchableOpacity>
                        }
                    </View>
                </View>
                <TouchableOpacity onPress={this._login} style={styles.loginBtn}>
                    <CustomText style={{ margin: 10, color: 'white', fontSize: 15 }}>Đăng nhập</CustomText>
                </TouchableOpacity>
            </KeyboardAvoidingViewKeyboardDismiss>
        )
    }
}
