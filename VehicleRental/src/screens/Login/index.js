import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../../redux/actions/login';

import LoginBackground from '../../images/login-background.png';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const form = {email: username, password: password};
  const {token, isLogin, error, loading} = useSelector(state => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token && isLogin) {
      ToastAndroid.show('Login Success', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(error, ToastAndroid.SHORT);
    }
  }, [token]);

  const onSubmit = async () => {
    dispatch(login(form));
  };
  return (
    <ImageBackground source={LoginBackground} style={styles.containerBg}>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginTop: '40%'}}>
            <Text style={styles.loginTitle}>LET’S EXPLORE</Text>
            <Text style={styles.loginTitle}>THE WORLD</Text>
          </View>
          {/* Login Form */}
          <View style={{marginTop: '50%'}}>
            <View style={styles.loginBg}>
              <TextInput
                placeholder="Username"
                value={username}
                onChangeText={text => setUsername(text)}
                returnKeyType="next"
                autoCapitalize="none"
                style={styles.loginText}
                placeholderTextColor="#FFFFFF"
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
                placeholderTextColor="#FFFFFF"
              />
            </View>
          </View>
          {/* Forgot Password Text */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Forgot Password')}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
          {/* Login Button */}
          <TouchableOpacity onPress={onSubmit} style={styles.loginButtonBg}>
            {loading == true ? (
              <Text style={styles.loginButtonText}>Loading ...</Text>
            ) : (
              <Text style={styles.loginButtonText}>Login</Text>
            )}
          </TouchableOpacity>
          {/* Sign Up */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={styles.signUpContainer}>
            <Text style={styles.signUp}>Don't have account?</Text>
            <Text style={styles.signupBold}>Sign up now</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Login;

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
