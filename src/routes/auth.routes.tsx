import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from '../screens/Signin';
import { SignUp } from '../screens/SignUp';

const Auth = createStackNavigator();

export const AuthRoutes: FC = () => {
  return (
    <Auth.Navigator
      initialRouteName="SignUp"
      screenOptions={{ headerShown: false }}
    >
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  );
};
