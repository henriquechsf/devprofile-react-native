import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from '../screens/Signin';
import { SignUp } from '../screens/SignUp';
import { ForgotPassword } from '../screens/ForgotPassword';

const Auth = createStackNavigator();

export const AuthRoutes: FC = () => {
  return (
    <Auth.Navigator
      initialRouteName="SignIn"
      screenOptions={{ headerShown: false }}
    >
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
      <Auth.Screen name="ForgotPassword" component={ForgotPassword} />
    </Auth.Navigator>
  );
};
