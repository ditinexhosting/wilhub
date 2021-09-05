import React, { useState, useEffect, useRef } from 'react';
import {
    Keyboard,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Linking
} from 'react-native';
import { Mixins, Spacing, Typography } from 'src/styles'
import * as Screen from 'src/screens';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useDispatch, useSelector } from 'react-redux';
import * as ACTION from 'src/reduxData/action';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useTheme, useLanguage } from 'src/hooks'
import BottomTab from './BottomTab'
import { logo_white } from 'src/assets'


const Drawer = createDrawerNavigator();

export default () => {

    const translate = useLanguage().t

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: { backgroundColor: 'transparent' }
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            initialRouteName="Dashboard_Home">
            <Drawer.Screen name="Dashboard_Home" >
                {props => <BottomTab {...props} />}
            </Drawer.Screen>

        </Drawer.Navigator>
    );
}

const CustomDrawerContent = (props) => {

    const { navigation } = props
    const userSession = useSelector(state => state.sessionReducer.userSession)

    const [Colors, styles] = useTheme(style)

    const dispatch = useDispatch();

    const logout = async () => {
        dispatch(ACTION.loggedin(null))
        await AsyncStorage.removeItem('@userSession')
    }

    return (
        <DrawerContentScrollView
            contentContainerStyle={{
                paddingTop: 0
            }}
            {...props}>
            <LinearGradient colors={[Colors.primary, Colors.secondary]} style={styles.drawer}>
                <View style={styles.header}>
                    <Image source={logo_white} style={styles.logo} />
                </View>
                {/*<DrawerItemList {...props} />*/}
                <View style={[styles.flexRow, styles.centerAll, styles.marginBottom20]}><Text style={[styles.drawerItem, { fontSize: 14, textAlign: 'center' }]}>Version 1.0</Text></View>

                <DrawerItem
                    label={({ focused, color }) => <View style={[styles.flexRow, styles.spaceBetween]}><Text style={styles.drawerItem}>{userSession == null ? 'Login' : 'Logout'}</Text><Icon color={Colors.white} size={30} name='angle-right' /></View>}
                    onPress={() => userSession == null ? navigation.navigate('Account') : logout()}
                    style={styles.drawerItemWrapper}
                />
                {/*
                <DrawerItem
                    label={({ focused, color }) => <View style={[styles.flexRow,styles.spaceBetween]}><Text style={styles.drawerItem}>Article</Text><Icon color={Colors.white} size={30} name='angle-right' /></View>}
                    onPress={() => Linking.openURL('https://wilhub.com/')}
                    style={styles.drawerItemWrapper}
                />

                <DrawerItem
                    label={({ focused, color }) => <View style={[styles.flexRow,styles.spaceBetween]}><Text style={styles.drawerItem}>Blog</Text><Icon color={Colors.white} size={30} name='angle-right' /></View>}
                    onPress={() => Linking.openURL('https://wilhub.com/blog')}
                    style={styles.drawerItemWrapper}
                />

                <DrawerItem
                    label={({ focused, color }) => <View style={[styles.flexRow,styles.spaceBetween]}><Text style={styles.drawerItem}>News</Text><Icon color={Colors.white} size={30} name='angle-right' /></View>}
                    onPress={() => Linking.openURL('https://wilhub.com/')}
                    style={styles.drawerItemWrapper}
                />
                <DrawerItem
                    label={({ focused, color }) => <View style={[styles.flexRow,styles.spaceBetween]}><Text style={styles.drawerItem}>Feedback</Text><Icon color={Colors.white} size={30} name='angle-right' /></View>}
                    onPress={() => Linking.openURL('https://wilhub.com/')}
                    style={styles.drawerItemWrapper}
                />
                <DrawerItem
                    label={({ focused, color }) => <View style={[styles.flexRow,styles.spaceBetween]}><Text style={styles.drawerItem}>Downloads</Text><Icon color={Colors.white} size={30} name='angle-right' /></View>}
                    onPress={() => Linking.openURL('https://wilhub.com/')}
                    style={styles.drawerItemWrapper}
                />
                <DrawerItem
                    label={({ focused, color }) => <View style={[styles.flexRow,styles.spaceBetween]}><Text style={styles.drawerItem}>Event</Text><Icon color={Colors.white} size={30} name='angle-right' /></View>}
                    onPress={() => Linking.openURL('https://wilhub.com/event')}
                    style={styles.drawerItemWrapper}
                />
                <DrawerItem
                    label={({ focused, color }) => <View style={[styles.flexRow,styles.spaceBetween]}><Text style={styles.drawerItem}>FAQ</Text><Icon color={Colors.white} size={30} name='angle-right' /></View>}
                    onPress={() => Linking.openURL('https://wilhub.com/faq')}
                    style={styles.drawerItemWrapper}
                />*/}
            </LinearGradient>
        </DrawerContentScrollView>
    );
}


const style = ({ Colors }) => StyleSheet.create({
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
        marginBottom: Spacing.SCALE_30
    },
    logo: {
        width: Mixins.scaleSize(200),
        height: Mixins.scaleSize(50),
        resizeMode: 'contain',
        marginBottom: Spacing.SCALE_20
    },
    drawerItem: {
        textTransform: 'uppercase',
        fontSize: Typography.FONT_SIZE_25,
        color: Colors.white
    },
    drawerItemWrapper: {
        borderBottomColor: Colors.white,
        borderBottomWidth: 2,
        marginHorizontal: 0
    }
});