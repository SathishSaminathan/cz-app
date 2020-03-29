import React from 'react';
import {
  createStackNavigator,
  TransitionSpecs,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import GetStarted from '../screens/GetStarted';
import Signup from '../screens/auth/Signup';
import Login from '../screens/auth/Login';
import {Button, Text} from 'react-native';

const Stack = createStackNavigator();

const MyStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="GetStarted"
      screenOptions={{
        headerTransparent: true,
        headerTitle: null,
        headerLeft: () => (
          <Button title="Menu" onPress={() => navigation.openDrawer()} />
        ),
      }}>
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        // options={{
        //   title: 'Profile',
        //   cardStyleInterpolator:
        //     CardStyleInterpolators.forRevealFromBottomAndroid,
        // }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          // title: 'Notifications',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export {MyStack};
