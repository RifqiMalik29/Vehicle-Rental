import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

import {register} from '../../redux/actions/register';
import RegisterBackground from '../../images/register-background.png';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const {isFailed, isSuccess, message} = useSelector(state => state.register);
  const form = {email: email, fullname: fullname, password: password};

  const navigateLogin = () => navigation.navigate('Login');

  const submitRegister = async e => {
    e.preventDefault();
    dispatch(register(form));
    setEmail('');

    if (isFailed) {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else if (isSuccess) {
      ToastAndroid.show(message, ToastAndroid.SHORT);
      navigateLogin();
    }
  };
  return (
    <ImageBackground style={styles.containerBg} source={RegisterBackground}>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginTop: '40%'}}>
            <Text style={styles.loginTitle}>LET'S HAVE</Text>
            <Text style={styles.loginTitle}>SOME RIDE</Text>
          </View>
          {/* Register Form */}
          <View style={{marginTop: '50%'}}>
            <View style={styles.loginBg}>
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                returnKeyType="next"
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.loginText}
                placeholderTextColor="#FFF"
              />
            </View>
            <View style={styles.loginBg}>
              <TextInput
                placeholder="Fullname"
                value={fullname}
                onChangeText={text => setFullname(text)}
                returnKeyType="next"
                autoCapitalize="none"
                style={styles.loginText}
                placeholderTextColor="#FFF"
              />
            </View>
            <View style={styles.loginBg}>
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                returnKeyType="done"
                autoCapitalize="none"
                secureTextEntry={true}
                style={styles.loginText}
                placeholderTextColor="#FFF"
              />
            </View>
          </View>
          {/* Register Button */}
          <TouchableOpacity
            onPress={submitRegister}
            style={styles.loginButtonBg}>
            <Text style={styles.loginButtonText}>Sign Up</Text>
          </TouchableOpacity>
          {/* Login */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.signUpContainer}>
            <Text style={styles.signUp}>Already have an account?</Text>
            <Text style={styles.signupBold}>Login now</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  containerBg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  loginTitle: {
    fontWeight: 'bold',
    fontSize: 36,
    color: '#FFFFFF',
    fontFamily: 'Roboto-Regular',
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
  forgotPassword: {
    fontSize: 14,
    textDecorationLine: 'underline',
    textDecorationColor: '#FFF',
    color: '#FFF',
    marginTop: 15,
    fontFamily: 'Nunito-Regular',
  },
  loginButtonBg: {
    backgroundColor: '#FFCD61',
    borderRadius: 10,
    width: '100%',
    marginTop: 30,
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
  signUpContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '20%',
    marginBottom: '15%',
  },
  signUp: {
    fontSize: 14,
    color: '#FFF',
    fontFamily: 'Nunito-Regular',
  },
  signupBold: {
    fontSize: 14,
    color: '#FFF',
    textDecorationLine: 'underline',
    textDecorationColor: '#FFF',
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
