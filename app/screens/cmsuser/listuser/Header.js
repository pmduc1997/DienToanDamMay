import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import BaseScreen from '../../BaseScreen'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './Styles'
export default class Header extends BaseScreen {
    constructor(props)
    {
        super(props)
    }
    render() {
        const {goBack} = this.props
        return (
            <View style={[this.props.style]}>
                <TouchableOpacity style={styles.headerBack} onPress={()=>goBack()}>
                    <Icon name="ios-arrow-back" size={20} color="blue"/>
                    <Text style={styles.headerBackText}> Back </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
