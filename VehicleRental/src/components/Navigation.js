import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';

const Navigation = ({active}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageContainer}>
        {active == 1 ? (
          <Image source={require('../images/home-active.png')} />
        ) : (
          <Image source={require('../images/home.png')} />
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.imageContainer}>
        {active == 2 ? (
          <Image source={require('../images/history-active.png')} />
        ) : (
          <Image source={require('../images/history.png')} />
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.imageContainer}>
        {active == 3 ? (
          <Image source={require('../images/chat-active.png')} />
        ) : (
          <Image source={require('../images/chat.png')} />
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.imageContainer}>
        {active == 4 ? (
          <Image source={require('../images/user-active.png')} />
        ) : (
          <Image source={require('../images/user.png')} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderTopColor: '#f5f5f6',
    borderTopWidth: 1,
    borderStyle: 'solid',
    paddingVertical: 6,
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
