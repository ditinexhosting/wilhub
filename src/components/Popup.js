import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    Animated,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Platform,
    ScrollView,
    StatusBar
} from 'react-native';
import { Colors, Mixins, Spacing, Typography } from 'src/styles'
import Modal from 'react-native-modal';

const Popup = (props) => {
    const { children, ...prop } = props
    return (
        <Modal
            isVisible={true}
            animationInTiming={1000}
            animationOutTiming={1000}
            backdropTransitionInTiming={800}
            backdropTransitionOutTiming={800}
            {...prop}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalView}>
                    {children}
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0
    },
    modalView: {
        width: '100%',
        backgroundColor: Colors.white,
        borderRadius: 20,
        padding: Spacing.SCALE_15,
        alignItems: 'center',
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
});

export default Popup