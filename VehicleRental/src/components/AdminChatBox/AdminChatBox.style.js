import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  chatBoxContainer: {
    borderBottomColor: '#DADADA',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingVertical: '10%',
  },
  chatDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  username: {
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    color: '#000',
    fontSize: 12,
  },
  lastChat: {
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    color: '#000',
    fontSize: 10,
  },
  timestamp: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#9A9A9D',
  },
  chatLength: {
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    fontSize: 10,
    color: '#000',
  },
  chatLengthContainer: {
    backgroundColor: '#FFCD61',
    borderRadius: 20,
    width: 15,
    height: 15,
    alignItems: 'center',
  },
});
