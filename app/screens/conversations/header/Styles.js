import { StyleSheet } from "react-native";
import { CommonStyles } from "app/assets/styles/CommonStyles";

const styles = StyleSheet.create({
  ...CommonStyles,
  conainter: {
    paddingHorizontal: 15
  },
  left: { flex: 6, paddingLeft: 10, flexDirection: 'row', alignItems: 'center' }
});

export default styles;
