import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import constant from '../helper/constant';
import LoginScreen from '../screen/login';
import TabBarScreen from '../navigation/app-tab';

const Stack =
  (constant.isIOS && createNativeStackNavigator()) ||
  createNativeStackNavigator();

export function Screen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Login"
        options={{ stackAnimation: 'none' }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="TabBar"
        options={{ stackAnimation: 'none' }}
        component={TabBarScreen}
      />
    </Stack.Navigator>
  );
}
