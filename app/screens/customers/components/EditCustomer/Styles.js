import { StyleSheet } from "react-native";
import { CommonStyles } from "app/assets/styles/CommonStyles";
import { mainColor } from "../../../../utils/styleUtils";

const styles = StyleSheet.create({
  ...CommonStyles,
  user: {
    marginVertical: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: mainColor.baseColor
  },
  avaAndSubs: {
    justifyContent: 'center',
    marginTop: 10,
    alignItems: "center"
  },
  btnSubs: {
    flexDirection: 'column',
    backgroundColor: '#e0e0e0',
    marginTop: 10,
    width: 120,
    height: 30,
    justifyContent: 'center',
    borderRadius: 20
  },
  btnSubsChecked: {
    flexDirection: 'column',
    backgroundColor: mainColor.baseColor,
    marginTop: 10,
    width: 120,
    height: 30,
    justifyContent: 'center',
    borderRadius: 20
  },
  btnSubsContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 15
  },
  tags: {
    margin: 15
  },
  imageAvatar: {
    width: "100%",
    height: "100%",
    borderRadius: 60,
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
  },
  button: {
    borderRadius: 5,
    height: 36,
    marginTop: 10,
    marginBottom: 15,
    marginHorizontal: 3
  },
  textButton: {
    fontSize: 15
  },
  info: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 5,
  },
  infoText1: {
    fontWeight: "bold",
    marginRight: 5,
  },
  infoText2: {
    flex: 1
  },
  headerChild: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 5
  },
  itemChild: {
    width: 155,
    height: 130,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#88BDFF",
    marginTop: 20,
    marginRight: 10
  },
  avatarChild: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#ffffff",
    shadowColor: "#88BDFF",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    marginBottom: 10
  },
  imgChild: {
    width: "100%",
    height: "100%",
    borderRadius: 35,
  },
  footer: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  listPhotoChild: {
    width: 130,
    height: 130,
    borderRadius: 5,
    marginTop: 20,
    marginRight: 10
  },
  photoChild: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  formInputs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginVertical: 10
  },
  lable: {
    width: "25%",
  },
  input: {
    borderWidth: .5,
    width: '65%',
    borderRadius: 10,
    height: 40,
    padding: 10
  },
  datePicker: {
    width: '65%',
    alignItems: 'center',
    borderWidth: .5,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  gender: {
    flexDirection: 'row',
    width: '65%',
    height: 40,
    alignItems: 'center'
  },
  btnGender: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  onChecked: {
    backgroundColor: mainColor.baseColor,
    width: 12,
    height: 12,
    borderRadius: 12
  },
});

export default styles;
