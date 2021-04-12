import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import jwtDecode from 'jwt-decode';

import Login from './screens/Login';
import Register from './screens/Register';
import ForgotPassword from './screens/ForgotPassword';

import AdminHome from './screens/Admin/Home';
import AdminAddItem from './screens/Admin/AddNewItem';
import {logout} from './redux/actions/login';

const Stack = createStackNavigator();

const MainNavigator = () => {
  const dispatch = useDispatch();
  const loginState = useSelector(state => state.login);

  if (loginState?.token) {
    const decoded = jwtDecode(loginState.token);
    const isExpired = decoded.exp < Date.now() / 1000;

    if (isExpired == true) {
      dispatch(logout());
    }
  }

  return (
    <NavigationContainer>
      {loginState.token && loginState.isLogin == true ? (
        <Stack.Navigator>
          <Stack.Screen
            name="AdminHome"
            component={AdminHome}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AdminAddItem"
            component={AdminAddItem}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Forgot Password"
            component={ForgotPassword}
            options={{headerTitle: 'Back'}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default MainNavigator;
