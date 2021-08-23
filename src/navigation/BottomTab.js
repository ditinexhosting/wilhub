import React, { useState, useEffect, useRef } from 'react';
import {
  Keyboard,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import * as Screen from 'src/screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme, useLanguage } from 'src/hooks'
import Icon from 'react-native-vector-icons/FontAwesome'

const IconList = {
  'Home': 'home',
  'Favorite': 'heart',
  'Search': 'search',
  'Settings': 'user'
}


const Tab = createBottomTabNavigator();

export default () => {

  const translate = useLanguage().t
  const [keyboardStatus, setKeyboardStatus] = useState(undefined)


  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);


  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true
      }}
      tabBar={props => keyboardStatus!=true ? <CustomTabBar {...props} /> : null}
    >
      <Tab.Screen name="Home" options={{ tabBarLabel: translate('home') }} component={Screen.Dashboard} />
      <Tab.Screen name="Favorite" options={{ tabBarLabel: translate('favorite') }} component={Screen.Dashboard} />
      <Tab.Screen name="Search" options={{ tabBarLabel: translate('search') }} component={Screen.Dashboard} />
      <Tab.Screen name="Settings" options={{ tabBarLabel: translate('settings') }} component={Screen.Dashboard} />
    </Tab.Navigator>
  );
}


const CustomTabBar = ({ state, descriptors, navigation }) => {
  const [Colors, Styles] = useTheme(styles)
  return (
    <View style={[Styles.bottomNavBar]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={Styles.tabItems}
          >
            <Icon name={IconList[route.name]} size={30} color={isFocused ? Colors.primary : Colors.gray_dark} />
            {isFocused && <Text style={[Styles.label]}>
              {label}
            </Text>}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}


const styles = ({ Colors }) => StyleSheet.create({
  bottomNavBar: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  tabItems: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    marginLeft: 10,
    color: Colors.primary,
    fontSize: 16
  }
});