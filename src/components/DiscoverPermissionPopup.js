import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Animated,
    StyleSheet,
    Easing,
    Dimensions,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import { Mixins, Typography, Spacing } from 'src/styles'
import { useTheme } from 'src/hooks'
import { discover_me } from 'src/assets'

const DiscoverPermissionPopup = ({ isVisible, updateDiscoverSelection, discoverData, setDiscoverPopup, getUserLocation }) => {
    const [Colors, styles] = useTheme(style)

    const onChangeSelection = (value)=>{
        updateDiscoverSelection(value)
    }

    const onAllow = ()=>{
        setDiscoverPopup(false)
        setTimeout(()=>{
            getUserLocation()
        },900)
    }

    return (
        <Modal
            style={styles.modal}
            isVisible={isVisible}
            animationInTiming={1000}
            animationOutTiming={1000}
            backdropTransitionInTiming={800}
            backdropTransitionOutTiming={800}>
            <View style={styles.popup}>
                <Image source={discover_me} style={styles.image} />
                <Text style={styles.title}>Allow To Discover Me</Text>
                <Text style={styles.subtitle}>Let others in your location discover you.</Text>
                <View style={[styles.flexRow, styles.spaceAround, styles.alignCenter]}>
                    <TouchableOpacity onPress={() => onChangeSelection(1)} style={[styles.inputBoxGender]}>
                        <View style={[styles.inputBoxMark, discoverData==1 ? styles.inputBoxMarkActive : null]}>
                            <Icon name="check" size={15} color={discoverData==1 ? Colors.ascent : Colors.deep_gray} />
                        </View>
                        <Text style={[styles.flex1, styles.inputText]}>Ask Always</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onChangeSelection(2)} style={[styles.inputBoxGender]}>
                        <View style={[styles.inputBoxMark, discoverData==2 ? styles.inputBoxMarkActive : null ]}>
                            <Icon name="check" size={15} color={discoverData==2 ? Colors.ascent : Colors.deep_gray} />
                        </View>
                        <Text style={[styles.flex1, styles.inputText]}>Allow Always</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onChangeSelection(3)} style={[styles.inputBoxGender]}>
                        <View style={[styles.inputBoxMark, discoverData==3 ? styles.inputBoxMarkActive : null]}>
                            <Icon name="check" size={15} color={discoverData==3 ? Colors.ascent : Colors.deep_gray} />
                        </View>
                        <Text style={[styles.flex1, styles.inputText]}>Never Allow</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => onAllow()} style={styles.submit_button}>
                    <Text style={styles.submit_button_text}>Allow</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setDiscoverPopup(false)} style={styles.cancel_button}>
                    <Text style={styles.submit_button_text}>Cancel</Text>
                </TouchableOpacity>
                </View>

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
        height: Mixins.scaleSize(290),
        borderRadius: 10,
        padding: Spacing.SCALE_10
    },
    image:{
        resizeMode: 'contain',
        width: Mixins.scaleSize(150),
        height: Mixins.scaleSize(150),
    },
    title: {
        fontWeight: 'bold',
        fontSize: Typography.FONT_SIZE_20,
        color: Colors.red_dark,
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
    inputText:{
        fontSize: Typography.FONT_SIZE_14,
        color: Colors.text,
        textAlignVertical: 'top',
        textAlign: 'center'
    },
    inputBoxGender:{
        paddingVertical: Spacing.SCALE_10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputBoxMark:{
        backgroundColor: Colors.gray,
        height: Mixins.scaleSize(20),
        width: Mixins.scaleSize(15),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    inputBoxMarkActive:{
        backgroundColor: Colors.primary,
    },
    submit_button:{
        height: Mixins.scaleHeight(30),
        width: Mixins.scaleSize(100),
        backgroundColor: Colors.primary,
        borderRadius: 100,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    cancel_button:{
        height: Mixins.scaleHeight(30),
        width: Mixins.scaleSize(100),
        backgroundColor: Colors.gray,
        borderRadius: 100,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: Spacing.SCALE_20
    },
    buttonContainer:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: Spacing.SCALE_20
    }
});

export default DiscoverPermissionPopup



