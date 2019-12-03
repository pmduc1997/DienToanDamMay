import React, { Component } from 'react';
import { Text } from 'react-native';
import styles from './styles';

export default class CustomText extends Component {

    render() {
        const { style, children, size } = this.props;
        return (
            <Text style={[styles.container, style, size ? { fontSize: size } : {}]}>{children}</Text>
        )
    }
}