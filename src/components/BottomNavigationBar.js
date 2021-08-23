import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import { Styles, Mixins, Colors, Spacings } from 'src/styles'
import { useTheme } from 'src/hooks'

const BottomNavigationBar = ({ ...props }) => {
    const [Colors] = useTheme()


    return <View { ...props }></View>;
}

export default BottomNavigationBar



