import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const AddItemInput = ({title, placeholder, value, changeText, type}) => {
  return (
    <View style={{width: '90%', marginTop: 10}}>
      <View style={{marginBottom: 20}}>
        {type == 'text' && (
          <View style={styles.border}>
            <Text style={styles.textTitle}>{title}</Text>
            <TextInput
              placeholder={placeholder}
              value={value}
              onChangeText={changeText}
              placeholderTextColor="#9F9F9F"
              style={styles.text}
            />
          </View>
        )}
        {type == 'option' && (
          <View>
            <Text style={styles.optionTitle}>{title}</Text>
            <View style={styles.optionContainer}>
              <Text style={styles.placeholderText}>{placeholder}</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default AddItemInput;

const styles = StyleSheet.create({
  border: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    width: '90%',
    marginTop: 20,
  },
  text: {
    fontFamily: 'Nunito-Regular',
    fontSize: 13,
    color: '#000',
  },
  optionContainer: {
    borderColor: '#DFDEDE',
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#fcfcfc',
    padding: 20,
  },
  textTitle: {
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold',
    fontSize: 17,
    color: '#393939',
  },
  optionTitle: {
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold',
    fontSize: 17,
    color: '#393939',
    marginBottom: 15,
  },
  placeholderText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 13,
    color: '#9F9F9F',
  },
});
