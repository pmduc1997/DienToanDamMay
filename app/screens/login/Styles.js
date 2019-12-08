import { StyleSheet } from "react-native";
import { CommonStyles } from "app/assets/styles/CommonStyles";
import { mainColor } from "../../utils/styleUtils";

const styles = StyleSheet.create({
    ...CommonStyles,
    title: { alignItems: 'center', marginTop: 70 },
    inputFrame: { margin: 30, marginTop: 10, alignItems: 'flex-start' },
    inputContent: { borderRadius: 10, flexDirection: 'row', alignItems: 'center', borderWidth: 1 / 2, borderColor: 'black', marginVertical: 5 },
    loginBtn: { marginHorizontal: 20, backgroundColor: mainColor.baseColor, alignItems: 'center', width: '90%', borderRadius: 5 },
});

export default styles;
