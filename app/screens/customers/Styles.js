import { StyleSheet } from "react-native";
import { CommonStyles } from "app/assets/styles/CommonStyles";

const styles = StyleSheet.create({
  ...CommonStyles,
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
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  messenger: {
    width: 20,
    height: 20,
  },
  edit: {
    width: 25,
    height: 25,

  }
});

export default styles;
