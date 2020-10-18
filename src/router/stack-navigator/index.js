import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash, FirstPage, FoodDetail, Login} from '../../pages';
import { StackActions } from '@react-navigation/native';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
      <Stack.Screen name="Foody Wellness" component={FirstPage} />
      <Stack.Screen name="Food Detail" component={FoodDetail} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export {StackNavigator};
