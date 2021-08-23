import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import * as Screen from 'src/screens';
import BottomTab from './BottomTab'
import Drawer from './Drawer'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        presentation="card"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Splash" component={Screen.Splash} />
        <Stack.Screen name="OnBoarding" component={Screen.OnBoarding} />
        <Stack.Screen name="Dashboard" >
          {props => <Drawer {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
