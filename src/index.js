import React, { useState, useEffect, useRef, useReducer } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Modal,
    Alert,
    Dimensions,
    Platform,
    BackHandler,
    StatusBar,
    SafeAreaView
} from 'react-native';
import Navigation from 'src/navigation'
import { ThemeProvider, LanguageProvider } from 'src/lib'
import { GlobalLayouts } from 'src/components'
import { useTheme, useLanguage } from 'src/hooks'
import { Provider } from 'react-redux'
import store from 'src/reduxData/store'


const AppContainer = () => {

    const [Colors, styles] = useTheme()

    return (
        <ThemeProvider>
        <LanguageProvider>
        <Provider store={store}>
            <StatusBar barStyle={'light-content'} translucent={true} backgroundColor='transparent' />
            <GlobalLayouts>
                <Navigation />
            </GlobalLayouts>
        </Provider>
        </LanguageProvider>
        </ThemeProvider>
    )
}


export default AppContainer