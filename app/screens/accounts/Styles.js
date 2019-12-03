import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { CommonStyles } from "app/assets/styles/CommonStyles";
import { sizeStandard } from 'app/utils/styleUtils.js'
import { mainColor } from '../../utils/styleUtils';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  ...CommonStyles,
  // connect page
  inputSearch: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    height: 45,
    borderWidth: 2,
    borderColor: "#E1EDFC",
    marginVertical: 20,
    marginStart: 15,
    marginEnd: 15
  },
  searchIc: {
    marginHorizontal: 10
  },
  searchTxt: {
    flex: 1
  },
  contact: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    paddingRight: 10,
  },
  contactAvatar: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactInfo: {
    flex: 5,
  },
  contactName: {

    fontWeight: 'bold'
  },
  lastMessage: {

  },
  contactMore: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  messenger: {
    width: 20,
    height: 20,
  },
  nextIcon: {
    width: 20,
    height: 20,
    marginLeft: 10
  },
  // login
  containerLogin: {
    flex: 1,
    paddingHorizontal: sizeStandard.padding,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentLogo: {
    flex: 3,
    justifyContent: 'flex-end'
  },
  logo: {
    width: 200,
    height: 200
  },
  contentBtn: { flex: 4, alignItems: 'center', justifyContent: 'center' },
  btnLogin: {
    width: width - 40,
    height: height / 13,
    borderRadius: 20,
    backgroundColor: '#006AFE',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnConnect: {
    paddingHorizontal: 6,
    paddingTop: 6,
    paddingBottom: 6,
    borderWidth: .5,
    borderColor: mainColor.baseColor,
    borderRadius: 5,
    backgroundColor: mainColor.baseColor
  },
  noPage: {
    width: '100%',
    height: 200,
    paddingTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  btnRefresh: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: mainColor.btnColor,
    borderRadius: 5,
    paddingHorizontal: 12,
    height: 35,
    justifyContent: 'center',
    marginTop: 10
  },
  refreshIcon: {
    width: 22,
    height: 22
  }
});

export default styles;
