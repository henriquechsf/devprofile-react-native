import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { UserDetails } from '../screens/UserDetails';

const App = createStackNavigator();

export const AppRoutes: FC = () => {
  return (
    <App.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <App.Screen name="Home" component={Home} />
      <App.Screen name="UserDetails" component={UserDetails} />
    </App.Navigator>
  );
};
