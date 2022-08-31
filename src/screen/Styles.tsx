import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  main: {
    backgroundColor: '#1A1A1A',
    flex: 1,
  },
  addTaskContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: -27,
  },
  img: {width: 16, height: 16},
  containerInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  wrapperInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 327,
    marginTop: 32,
  },
  containerEmpty: {
    alignItems: 'center',
    marginTop: 20,
  },
  containerTask: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
