import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import ForgotBackground from '../../images/forgotPassword-background.png';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <ImageBackground style={styles.containerBg} source={ForgotBackground}>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginTop: '40%'}}>
            <Text style={styles.forgotTitle}>THAT'S OKAY, WE</Text>
            <Text style={styles.forgotTitle}>GOT YOUR BACK</Text>
          </View>

          <View style={{marginTop: '50%'}}>
            <Text style={styles.forgotText}>
              Enter your email to get reset password code
            </Text>
            <View style={styles.loginBg}>
              <TextInput
                placeholder="Enter your email adress"
                value={email}
                onChangeText={text => setEmail(text)}
                returnKeyType="done"
                autoCapitalize="none"
                keyboardType="email-address"
                style={styles.loginText}
                placeholderTextColor="#FFF"
              />
            </View>
            <TouchableOpacity style={styles.sendCodeBg}>
              <Text style={styles.loginButtonText}>Send Code</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.resendCodeBg}>
              <Text style={styles.loginButtonText}>Resend Code</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  containerBg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    paddingHorizontal: 20,
  },
  forgotTitle: {
    fontWeight: 'bold',
    fontSize: 36,
    color: '#FFFFFF',
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
  },
  forgotText: {
    fontSize: 14,
    color: '#FFF',
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginBg: {
    backgroundColor: '#DFDEDE',
    opacity: 0.5,
    borderRadius: 10,
    marginTop: '7%',
  },
  loginText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#FFFFFF',
    padding: 15,
    fontFamily: 'Nunito-Regular',
  },
  sendCodeBg: {
    backgroundColor: '#FFCD61',
    borderRadius: 10,
    width: '100%',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resendCodeBg: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    width: '100%',
    marginTop: 10,
    marginBottom: '20%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginButtonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#393939',
    padding: 17,
    fontFamily: 'Nunito-Regular',
  },
});
