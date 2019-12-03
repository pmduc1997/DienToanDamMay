import {StyleSheet} from 'react-native';
import {CommonStyles} from 'app/assets/styles/CommonStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
    marginTop: 15,
    flexDirection:"column",
    alignItems:"center"
  },
  icon: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputSearchUser: {
    flex: 8,
  },
  textInfo: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
    marginBottom: 16,
  },
  label: {
    flex: 2,
  },
  name: {
    flex: 6,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  avatar: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  btnEditUser: {
    backgroundColor: 'blue',
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    padding: 10,
    width: 200,
    borderRadius:10
  },
});

export default styles;
