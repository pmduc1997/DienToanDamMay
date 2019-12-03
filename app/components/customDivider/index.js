import React from 'react';
import { Divider } from "react-native-elements";

export default function CustomDivider(props) {
    return <Divider style={{ backgroundColor: props.color ? props.color : '#006AFE', height: props.size ? props.size : .5 }} />
}