import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  addTaskContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: -27,
  },
  button: {
    backgroundColor: '#1E6F9F',
    padding: 18,
    borderRadius: 6,
    width: 54,
    height: 54,
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addTaskButtonContainerIcon: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 16,
    backgroundColor: '#262626',
    border: '1px solid #0D0D0D',
    color: '#F2F2F2',
    lineHeight: 22.4,
    fontWeight: '400',
    fontSize: 16,
    borderRadius: 6,
    width: 271,
    height: 54,
    fontFamily: 'Inter',
  },
  addTaskButtonIcon: {position: 'absolute', zIndex: 99, border: 'none'},
});

export default Styles;
