import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import * as Screen from 'src/screens';
import BottomTab from './BottomTab';
import Drawer from './Drawer';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        presentation="card"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Screen.Splash} />
        <Stack.Screen name="OnBoarding" component={Screen.OnBoarding} />
        <Stack.Screen name="Dashboard">
          {props => <Drawer {...props} />}
        </Stack.Screen>
        <Stack.Screen name="About" component={Screen.About} />
        <Stack.Screen name="Career" component={Screen.Career} />
        <Stack.Screen name="Courses" component={Screen.Courses} />
        <Stack.Screen
          name="Dashboard_Courses_Details"
          component={Screen.Dashboard_Courses_Details}
        />
        <Stack.Screen name="Faqs" component={Screen.Faqs} />
        <Stack.Screen name="Research" component={Screen.Research} />
        <Stack.Screen name="Registration" component={Screen.Registration} />
        <Stack.Screen name="Videos" component={Screen.Videos} />
        <Stack.Screen name="GalleryScreen" component={Screen.GalleryScreen} />
        <Stack.Screen name="ApplyScreen" component={Screen.ApplyScreen} />
        <Stack.Screen name="ArticleScreen" component={Screen.ArticleScreen} />
        <Stack.Screen
          name="ArticleDetailsScreen"
          component={Screen.ArticleDetailsScreen}
        />
        <Stack.Screen name="CourseScreen" component={Screen.CourseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
