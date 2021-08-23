import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    StyleSheet,
    Animated,
    TouchableOpacity
} from 'react-native';
import { Mixins, Spacing } from 'src/styles'
import { Container,KeyboardHandledView } from 'src/components'
import { useTheme } from 'src/hooks'

const BottomPopUp = ({ style = {},visible = false,height = 0,...props }) => {
    const [Colors, styles] = useTheme(custom_style)

    useEffect(() => {
        if(visible)
            show()
        else hide()
    },[visible]);
    const initialValue = 0;
    const finalValue = Mixins.DEVICE_HEIGHT
    const translateY = useRef(new Animated.Value(finalValue)).current
    const opacity = translateY.interpolate({
        inputRange: [initialValue,(initialValue+finalValue)/2,finalValue],
        outputRange: [1,0.5,0]
    })
    const show = () => {
        Animated.parallel([
            Animated.timing(translateY, {
                toValue: initialValue,
                duration: 250,
                useNativeDriver: true,
            })
        ]).start(() => {
        });
    };
    const hide = () => {
        Animated.parallel([
            Animated.timing(translateY, {
                toValue: finalValue,
                duration: 250,
                useNativeDriver: true,
            })
        ]).start(() => {
        });
    };

    return (
        <Animated.View 
            style={[{transform: [{ translateY }],opacity: opacity,height: height},styles.overlay,style]}>
            <KeyboardHandledView offset={20}>
                {props.children}
            </KeyboardHandledView>
        </Animated.View>
    );
}


const custom_style =({Colors})=> StyleSheet.create({
    overlay: {
        position: 'absolute',
        bottom: 0,
        width: Mixins.DEVICE_WIDTH,
        backgroundColor: Colors.background,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        elevation: 20,
    },
});

export default BottomPopUp



