import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export default function index() {
  return (
    <Tab.Navigator>
    <Tab.Screen name="" component={HomeScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
