import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import CustomText from "app/components/customText";
import CustomDivider from "app/components/customDivider";
import { mainColor } from '../../utils/styleUtils';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../login/Styles';

export default class Login extends Component {
    render() {
        return (
            <View>
                <View style={styles.title}>
                    <CustomText style={{ fontSize: 30 }}>
                        Đăng nhập CMS
                    </CustomText>
                    <Icon style={{ marginVertical: 10 }} name="users" size={70} color={mainColor.baseColor} />
                </View>
                <View style={styles.inputFrame}>
                    <View style={styles.inputContent}>
                        <Icon style={{ marginHorizontal: 10 }} name="phone" size={20} color={mainColor.baseColor} />
                        <TextInput style={{ width: '90%', borderLeftWidth: 1 / 2, padding: 10 }} placeholder='Nhập số điện thoại ...'></TextInput>
                    </View>
                    <View style={styles.inputContent}>
                        <Icon style={{ marginHorizontal: 10 }} name="lock" size={20} color={mainColor.baseColor} />
                        <TextInput style={{ width: '90%', borderLeftWidth: 1 / 2, padding: 10 }} placeholder='Nhập mật khẩu ...'></TextInput>
                    </View>
                </View>
                <TouchableOpacity style={styles.loginBtn}>
                    <CustomText style={{ margin: 10, color: 'white' }}>Đăng nhập</CustomText>
                </TouchableOpacity>
            </View>
        )
    }
}
