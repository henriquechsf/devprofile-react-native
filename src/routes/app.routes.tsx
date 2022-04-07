import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';

const App = createStackNavigator();

export const AppRoutes: FC = () => {
  return (
    <App.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <App.Screen name="Home" component={Home} />
    </App.Navigator>
  );
};
