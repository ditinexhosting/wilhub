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
    StatusBar,
    Alert
} from 'react-native';
import { Mixins, Typography, Spacing } from 'src/styles'
import { useTheme } from 'src/hooks'

const ExceptionHandler = (e,location) => {

    return (
        Alert.alert(
            "Something went wrong !!",
            "Please report this error to admin team.\nError : "+e.message+"\nLocation: "+location,
            [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel",
                },
                {
                    text: "Report",
                    onPress: () => null,
                },
            ],
            {
                cancelable: true,
                onDismiss: () => null
            }
        )
    );
}

export default ExceptionHandler