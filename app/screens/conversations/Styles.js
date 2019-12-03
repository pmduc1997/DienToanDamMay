import { StyleSheet } from 'react-native';
import { CommonStyles } from 'app/assets/styles/CommonStyles';
import { mainColor } from 'app/utils/styleUtils'
const styles = StyleSheet.create({
  ...CommonStyles,
  inputSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    height: 45,
    borderWidth: 2,
    borderColor: '#E1EDFC',
    marginVertical: 20,
    marginStart: 15,
    marginEnd: 15,
  },
  searchIc: {
    marginHorizontal: 10,
  },
  searchTxt: {
    flex: 1,
  },
  headerAction: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  // new
  logoShop: {
    width: 30,
    height: 30,
    marginEnd: 10,
  },
  contact: {
    flex: 1,
    height: 110,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  avatar: {
    flex: 2.1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  contactInfo: {
    flex: 6,
    flexDirection: 'row',
    alignItems: 'center'
  },
  contactInfoList: {
    flex: 6
  },
  contactName: {
    marginBottom: 2,
    fontWeight: 'bold',
  },
  lastMessage: {
    marginBottom: 4
   
  },
  group: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  groupName: {
    fontSize: 12,
    marginLeft: 5,
  },
  contactMore: {
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'column'
  },
  messenger: {
    width: 20,
    height: 20,
    marginBottom: 10,
  },
  updatedAt: {
    fontSize: 10,
    marginBottom: 10,

  },
  headerTab: {
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#f5f5f5'

  },
  headerQuickAnswer: {
    paddingHorizontal: 15,
    height: 55,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#f5f5f5'
  },
  contactIcons: {
    flex: 4.5,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  icon: {
    width: 18,
    height: 18,
    marginRight: 15
  },
  headerText: {
    flex: 1.5,
    color: '#006AFE',
    marginRight: 15,
    fontWeight: 'bold'
  },
  searchBox: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 50,
    borderWidth: 1,
    alignItems: 'center',
    height: 35,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 14,
    marginLeft: 10
  },
  contentModal: {
    backgroundColor: 'white',
    height: 450,
    borderRadius: 10,
    overflow: 'hidden'
  },
  quickAnswersView: {
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 10
  },
  quickAnswersText: {
    color: '#006AFE',
    paddingVertical: 10,
    marginRight: 8
  },
  closeIcon: {
    width: 14,
    height: 14
  },
  // begin css navbar

  navConversation: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 8,
    marginTop: 20,
  },
  btnnav1: {
    height: 25,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    borderRadius: 5,
    backgroundColor: '#006AFE',
  },
  btnnav: {
    height: 25,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(150, 142, 142, 1)',
  },
  imgnav: {
    height: 16,
    width: 16,
  },
  nextIcon: {
    height: 14,
    width: 14,
  },
  btnnavleft: {
    flexDirection: 'row',
  },
  btnnavright: {
    flexDirection: 'row',
    marginRight: 16,
  },
  imgnavright: {
    marginLeft: 8,
    height: 18,
    width: 18,
  },
  eyehide: {
    position: 'relative',
  },
  numberseyeview: {
    position: 'absolute',
    zIndex: 5,
    backgroundColor: 'red',
    width: 36,
    height: 15,
    borderRadius: 20,
    right: -8,
    top: -8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberseye: {
    color: 'white',
  },
  label: {
    backgroundColor: '#ad3b56',
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginRight: 5
  },
  txtfeature: {
    paddingTop: 3,
    paddingBottom: 3,
    color: 'white'

  },
  imgconver: {
    width: 20,
    height: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  infoShop: {

  },
  // end css navbar
  boxSale: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  viewAvatarSale: {
    width: 20,
    height: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  saleAvatar: {
    width: 20,
    height: 20,
  }
});
export default styles;
