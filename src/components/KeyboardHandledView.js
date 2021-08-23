import React, { useState, useEffect, useRef } from 'react';
import { useCallback } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Animated,
    Easing,
    TextInput,
    Keyboard,
    UIManager,
    findNodeHandle
} from 'react-native';

import { ExceptionHandler } from 'src/components'

var textInputMeasurement = null

const KeyboardHandledView = ({ onKeyboardEvent = null, offset = 0, style = { flex: 1 }, contentStyle = { flex: 1}, ...props }) => {

    style = { ...style, overflow: 'hidden' }
    const TextInputState = TextInput.State

    const parentContainerRef = useRef(null)
    const adjustedMargin = useRef(new Animated.Value(0)).current


    useEffect(() => {
        const keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', handleKeyboardDidShow);
        const keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide);
        return (() => {
            keyboardDidShowSub.remove();
            keyboardDidHideSub.remove();
        })
    }, [])

    const getInputBoxPosition = (currentlyFocusedField) => {
        return new Promise((resolve, reject) => {
            if (!textInputMeasurement) {
                currentlyFocusedField.measure((originX, originY, width, height, pageX, pageY) => {
                    textInputMeasurement = { originX, originY, width, height, pageX, pageY }
                    resolve(textInputMeasurement)
                })
            }
            else{
                resolve(textInputMeasurement)
            }

            //reject(false)
        })
    }


    const handleKeyboardDidShow = (event) => {
        try {

            const { height: windowHeight } = Dimensions.get('window');
            const keyboardHeight = event.endCoordinates.height;
            const currentlyFocusedField = TextInputState.currentlyFocusedInput();

            /*
            * If currently focus text field belongs to this app / screen not any top notification textbox of messenger or whatsapp
            * If currently focused text field is child of this component not any other modal
            */

            if (currentlyFocusedField) {
                UIManager.viewIsDescendantOf(findNodeHandle(currentlyFocusedField), findNodeHandle(parentContainerRef.current), async (isDescendantOf) => {
                    if (!isDescendantOf)
                        return

                    const inputBoxPosition = await getInputBoxPosition(currentlyFocusedField)
                    const depthUnderKeyboard = (windowHeight - keyboardHeight) - (inputBoxPosition.pageY + inputBoxPosition.height + offset);
                    if (depthUnderKeyboard >= 0) {
                        return;
                    }
                    Animated.timing(
                        adjustedMargin,
                        {
                            toValue: depthUnderKeyboard,
                            duration: 200,
                            easing: Easing.linear,
                            useNativeDriver: false,
                        }
                    ).start()
                    if (onKeyboardEvent)
                        onKeyboardEvent({ ...event, keyboardOpen: true, depthUnderKeyboard: depthUnderKeyboard })
                });
            }
        }
        catch (e) {
            ExceptionHandler(e, 'Component > KeyboardHandler.js > handleKeyboardDidShow')
        }

    }

    const handleKeyboardDidHide = (event) => {
        textInputMeasurement = null

        if (onKeyboardEvent)
            onKeyboardEvent({ ...event, keyboardOpen: false, depthUnderKeyboard: null })

        Animated.timing(
            adjustedMargin,
            {
                toValue: 0,
                duration: 100,
                easing: Easing.linear,
                useNativeDriver: false,
            }
        ).start()
    }

    return (
        <View ref={parentContainerRef} style={StyleSheet.flatten(style)} >
            <Animated.View style={[contentStyle, { top: adjustedMargin }]}>
                {props.children}
            </Animated.View>
        </View>
    );
}


const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        width: '100%'
    }
});

export default KeyboardHandledView



