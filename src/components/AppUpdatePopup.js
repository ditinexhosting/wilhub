import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Animated,
    StyleSheet,
    Easing,
    Dimensions,
    Text,
    TouchableOpacity,
    Linking,
    Image
} from 'react-native';
import Modal from 'react-native-modal';
import { Mixins, Typography, Spacing } from 'src/styles'
import { APP_URL } from 'src/config'
import { useTheme } from 'src/hooks'

const AppUpdatePopup = ({ isVisible }) => {
    const [Colors, styles] = useTheme(style)

    return (
        <Modal
            style={styles.modal}
            isVisible={isVisible}
            animationInTiming={1000}
            animationOutTiming={1000}
            backdropTransitionInTiming={800}
            backdropTransitionOutTiming={800}>
            <View style={styles.popup}>
                <Image source={require('src/assets/update.gif')} style={styles.image} />
                <Text style={styles.titleGreen}>New update available !</Text>
                <TouchableOpacity onPress={() => Linking.openURL(APP_URL)} style={styles.button}>
                    <Text style={styles.buttonText}>Update Now</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}


const style =({Colors})=> StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 0
    },
    popup: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.white,
        width: Mixins.DEVICE_WIDTH,
        height: Mixins.scaleSize(250),
        borderRadius: 10,
        padding: Spacing.SCALE_10
    },
    image: {
        resizeMode: 'contain',
        width: Mixins.scaleSize(100),
        height: Mixins.scaleSize(100),
    },
    title: {
        fontWeight: 'bold',
        fontSize: Typography.FONT_SIZE_20,
        color: Colors.red_dark,
    },
    titleGreen: {
        fontWeight: 'bold',
        fontSize: Typography.FONT_SIZE_20,
        color: Colors.primary,
    },
    subtitle: {
        color: Colors.red_dark,
        fontSize: Typography.FONT_SIZE_14,
    },
    caption: {
        color: Colors.gray_medium,
        fontSize: Typography.FONT_SIZE_14,
        marginTop: Spacing.SCALE_10,
    },
    button: {
        backgroundColor: Colors.primary,
        height: Mixins.scaleSize(40),
        width: Mixins.scaleSize(130),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: Spacing.SCALE_10
    },
    buttonText: {
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: Typography.FONT_SIZE_14,
        letterSpacing: 2,
        textTransform: 'uppercase'
    }
});

export default AppUpdatePopup



