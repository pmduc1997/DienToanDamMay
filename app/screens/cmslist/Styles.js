import {StyleSheet} from 'react-native';
import {CommonStyles} from 'app/assets/styles/CommonStyles';

const styles = StyleSheet.create({
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    marginLeft: 16,
  },
  item: {
    backgroundColor: '#59b1de',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  titlemenu: {
    color: 'white',
    fontSize: 28,
  },
  title: {
    fontSize: 32,
  },
  menuheader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#006AFE',
  },
  contentcmsuser: {
    flexDirection: 'column',
  },
  listuser: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  desuser: {
    textAlign: 'center',
  },
});

export default styles;
