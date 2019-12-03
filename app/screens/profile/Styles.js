import { StyleSheet } from "react-native";
import { CommonStyles } from "app/assets/styles/CommonStyles";
import { mainColor } from "../../utils/styleUtils";

const styles = StyleSheet.create({
  ...CommonStyles,
  user: {
    marginVertical: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  boxAvatar: {
    flex: 2,
    flexDirection: 'row',
    marginLeft: 30,
    // justifyContent: 'center',
    alignItems: 'center'
  },
  infoUser: {
    paddingLeft: 15,
    justifyContent: 'flex-start',
  },
  username: {
    marginTop: 10
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 120,
    borderWidth: 1,
    // borderColor: mainColor.baseColor
  },
  setting: {
    flex: 6
  },
  itemMenu: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  left: {
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  nextIcon: {
    width: 20,
    height: 20,
    marginLeft: 10
  },
  btnUpdate: {
    marginTop: 5,
    borderRadius: 5,
    paddingHorizontal: 7,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#eee'
  }
});

export default styles;
