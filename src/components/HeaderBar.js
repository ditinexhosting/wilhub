import React, { useState, useEffect, useRef, Children } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { Mixins, Spacing, Typography } from 'src/styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'src/hooks'

const HeaderBar = ({ navigation, ...props }) => {
    const [Colors, styles] = useTheme(style)
    return (
        <View style={[styles.header,props.style]}>
            <TouchableOpacity onPress={() => navigation.pop()} style={[styles.navigationBack]}>
                <Icon name='angle-left' size={25} color={Colors.primary} />
            </TouchableOpacity>
            <View style={[styles.flex1, styles.headerTitle]}>
                {props.children}
            </View>
        </View>
    )
}

export default HeaderBar


const style =({Colors})=> StyleSheet.create({
    header: {
        height: 56,
        width: '100%',
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerTitle: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    navigationBack:{
        marginLeft: Spacing.SCALE_10,
        marginRight: Spacing.SCALE_10,
        backgroundColor: Colors.ascent,
        width: Spacing.SCALE_30,
        height: Spacing.SCALE_30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    }
});