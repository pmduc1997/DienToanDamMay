import {
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from "react-native";
import React from "react";
import { CommonStyles } from "app/assets/styles/CommonStyles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export const KeyboardAvoidingViewKeyboardDismiss = ({ children }) => (
  <TouchableWithoutFeedback >
    <KeyboardAwareScrollView style={{flex: 1}}>
      <View>{children}</View>
    </KeyboardAwareScrollView>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  ...CommonStyles
});