import { StyleSheet } from "react-native";
import { CommonStyles } from "app/assets/styles/CommonStyles";
import { mainColor } from "../../utils/styleUtils";

const styles = StyleSheet.create({
  ...CommonStyles,
  itemNew: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 70,
    borderRadius: 5,
    backgroundColor: "#E1EDFC",
    marginBottom: 20,
    padding: 5
  },
  itemText: {
    flexDirection: "column",
    width: '80%'
  },
  notiItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  notiIcon: {
    backgroundColor: mainColor.baseColor,
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  notiContent: {
    margin: 10,
    height: 60,
    justifyContent: 'center',
    width: '85%'
  },
  textTime: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0064FF",
    marginVertical: 5
  },
  textDetail: {
    fontSize: 13,
  },
  delete: {
    width: 40,
    height: 40
  }
});

export default styles;
