import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView
} from 'react-native';
import Config from 'src/config'
import { Mixins, Spacing } from 'src/styles'
import { useTheme } from 'src/hooks'

const Container = ({ isTransparentStatusBar = false, ...props }) => {
    const [Colors, styles] = useTheme(style)
    return (
        <>
        {isTransparentStatusBar==false && <MyStatusBar />}
        <View style={[styles.container, props.style, Config.isIos ? styles.paddingBottom10 : null,{height: isTransparentStatusBar==false ? Mixins.DEVICE_HEIGHT : Mixins.DEVICE_HEIGHT + Mixins.STATUSBAR_HEIGHT}]}>
            {props.children}
        </View>
        </>
    );
}

const MyStatusBar = ()=>{
    const [Colors, styles] = useTheme(style)
    return(
        <View style={[styles.statusBar,{height: Mixins.STATUSBAR_HEIGHT}]}>
        </View>
    )
}


const style =({Colors})=> StyleSheet.create({
    container:{
        backgroundColor: Colors.background
    },
    statusBar:{
        backgroundColor: Colors.primary
    }
});

export default Container



