import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  topNavigationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  screenTitle: {
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold',
    fontSize: 28,
    color: '#393939',
    marginLeft: '10%',
  },
  searchBarContainer: {
    backgroundColor: '#EFEEEE',
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: '40%',
    width: '82%',
    alignSelf: 'center',
    marginTop: 25,
  },
  searchBarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
  },
  searchText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#000',
  },
  conversation: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#9A9A9D',
    textAlign: 'center',
    marginTop: '30%',
    marginBottom: 20,
  },
});
