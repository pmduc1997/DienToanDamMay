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
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <View style={[styles.container, { padding: 15 }]}>
                <View style={styles.top}>
                    <CustomText style={styles.title}> Thêm mới user </CustomText>
                </View>
                <View style={styles.center}>
                    <Input placeholder='Tên người dùng' containerStyle={{ marginBottom: 15 }} />
                    <Input placeholder='Số điện thoại' containerStyle={{ marginBottom: 15 }} />
                    <Input placeholder='Mô tả' containerStyle={{ marginBottom: 15 }} />
                </View>
                <View style={styles.bottom}>
                    <Button title="Thêm mới" />
                </View>
            </View>
        )
    }
}
