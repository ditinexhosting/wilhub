import React, {useState, useEffect, useRef} from 'react';
import {
  Keyboard,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
  Platform,
} from 'react-native';
import {Mixins, Spacing, Typography} from 'src/styles';
import * as Screen from 'src/screens';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {useDispatch, useSelector} from 'react-redux';
import * as ACTION from 'src/reduxData/action';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useTheme, useLanguage} from 'src/hooks';
import BottomTab from './BottomTab';
import {logo_white} from 'src/assets';
import {ScrollView} from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export default () => {
  const translate = useLanguage().t;

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: 'transparent',
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName="Dashboard_Home">
      <Drawer.Screen name="Dashboard_Home">
        {props => <BottomTab {...props} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = props => {
  const {navigation} = props;
  const userSession = useSelector(state => state.sessionReducer.userSession);

  const [Colors, styles] = useTheme(style);

  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(ACTION.loggedin(null));
    await AsyncStorage.removeItem('@userSession');
  };

  return (
    <DrawerContentScrollView
      scrollEnabled={false}
      contentContainerStyle={{
        paddingTop: 0,
      }}
      {...props}>
      <LinearGradient
        colors={[Colors.secondary, Colors.primary]}
        style={styles.drawer}>
        <View style={styles.header}>
          <Image source={logo_white} style={styles.logo} />
        </View>
        <ScrollView>
          <DrawerItem
            label={({focused, color}) => (
              <View style={[styles.flexRow, styles.spaceBetween]}>
                <Text style={styles.drawerItem}>Career</Text>
                <Icon color={Colors.white} size={30} name="angle-right" />
              </View>
            )}
            onPress={() => navigation.navigate('Career')}
            style={styles.drawerItemWrapper}
          />
          <DrawerItem
            label={({focused, color}) => (
              <View style={[styles.flexRow, styles.spaceBetween]}>
                <Text style={styles.drawerItem}>Gallery</Text>
                <Icon color={Colors.white} size={30} name="angle-right" />
              </View>
            )}
            onPress={() => navigation.navigate('GalleryScreen')}
            style={styles.drawerItemWrapper}
          />
          <DrawerItem
            label={({focused, color}) => (
              <View style={[styles.flexRow, styles.spaceBetween]}>
                <Text style={styles.drawerItem}>Courses</Text>
                <Icon color={Colors.white} size={30} name="angle-right" />
              </View>
            )}
            onPress={() => navigation.navigate('Courses')}
            style={styles.drawerItemWrapper}
          />
          <DrawerItem
            label={({focused, color}) => (
              <View style={[styles.flexRow, styles.spaceBetween]}>
                <Text style={styles.drawerItem}>Quiz</Text>
                <Icon color={Colors.white} size={30} name="angle-right" />
              </View>
            )}
            onPress={() => navigation.navigate('Quiz')}
            style={styles.drawerItemWrapper}
          />
          <DrawerItem
            label={({focused, color}) => (
              <View style={[styles.flexRow, styles.spaceBetween]}>
                <Text style={styles.drawerItem}>Blog</Text>
                <Icon color={Colors.white} size={30} name="angle-right" />
              </View>
            )}
            onPress={() => navigation.navigate('ArticleScreen')}
            style={styles.drawerItemWrapper}
          />
          <DrawerItem
            label={({focused, color}) => (
              <View style={[styles.flexRow, styles.spaceBetween]}>
                <Text style={styles.drawerItem}>Feedback</Text>
                <Icon color={Colors.white} size={30} name="angle-right" />
              </View>
            )}
            onPress={() => navigation.navigate('FeedbackScreen')}
            style={styles.drawerItemWrapper}
          />
          <View style={styles.logutView}>
            <TouchableOpacity style={styles.logutBtn} onPress={handleLogout}>
              <Text style={styles.drawerItem}>LogOut</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </DrawerContentScrollView>
  );
};

const style = ({Colors}) =>
  StyleSheet.create({
    drawer: {
      flex: 1,
      height: Mixins.DEVICE_HEIGHT + Mixins.STATUSBAR_HEIGHT,
      paddingTop: Mixins.STATUSBAR_HEIGHT + Spacing.SCALE_20,
    },
    header: {
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomColor: Colors.background,
      borderBottomWidth: 4,
      marginBottom: Spacing.SCALE_30,
    },
    logo: {
      width: Mixins.scaleSize(200),
      height: Mixins.scaleSize(50),
      resizeMode: 'contain',
      marginBottom: Spacing.SCALE_20,
    },
    drawerItem: {
      textTransform: 'uppercase',
      fontSize: Typography.FONT_SIZE_25,
      color: Colors.white,
    },
    drawerItemWrapper: {
      borderBottomColor: Colors.white,
      borderBottomWidth: 2,
      marginHorizontal: 0,
    },
    lastDrawerItemWrapper: {
      marginHorizontal: 0,
    },
    logutView: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    logutBtn: {
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderRadius: 10,
      borderColor: Colors.white,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
  });
