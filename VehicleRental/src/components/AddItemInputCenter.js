import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const AddItemInputCenter = ({placeholder, value, changeText}) => {
  return (
    <View style={styles.border}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={changeText}
        placeholderTextColor="#9F9F9F"
        style={styles.text}
      />
    </View>
  );
};

export default AddItemInputCenter;

const styles = StyleSheet.create({
  border: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    width: '70%',
    marginBottom: 10,
  },
  text: {
    fontFamily: 'Nunito-Regular',
    fontSize: 13,
    textAlign: 'center',
    color: '#000',
  },
});
