import {StyleSheet} from 'react-native';
import {CommonStyles} from 'app/assets/styles/CommonStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  btnAddUser: {
    backgroundColor: 'blue',
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    padding: 10,
    width: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  textName: {
    padding: 8,
  },
  title: {
    fontSize: 32,
  },
  iconListUser: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16
  },
  listuser: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0D0D0D',
  },
  desuser: {
    color: '#606060',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    margin: 16,
    height: 36,
  },
  more: {
    flex: 8,
  },
  more2: {
    alignItems: 'center',
  },
  icon: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputSearchUser: {
    flex: 8,
  },
  //
  top:{
    marginTop:15,
    marginBottom:15
  },
  center:{
  },
  bottom:{
    marginTop:50
  },
  input:{
    marginBottom: 10
  },
  headerBack:{
    flexDirection:'row',
    alignItems:'center',
  },
  headerBackText:{
    color:'blue',
    fontSize:20,
    marginLeft:5
  }
});

export default styles;
