import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { UserDetails } from '../screens/UserDetails';
import { UserProfile } from '../screens/UserProfile';
import { UserProfileEdit } from '../screens/UserProfileEdit';
import { UserProfilePassword } from '../screens/UserProfilePassword';

const App = createStackNavigator();

export const AppRoutes: FC = () => {
  return (
    <App.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <App.Screen name="Home" component={Home} />
      <App.Screen name="UserDetails" component={UserDetails} />
      <App.Screen name="UserProfile" component={UserProfile} />
      <App.Screen name="UserProfileEdit" component={UserProfileEdit} />
      <App.Screen name="UserProfilePassword" component={UserProfilePassword} />
    </App.Navigator>
  );
};
