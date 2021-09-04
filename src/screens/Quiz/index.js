import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    TextInput,
    FlatList,
    ScrollView,
    ImageBackground
} from 'react-native';
import style from './style'
import Config from 'src/config'
import { about_us_background } from 'src/assets'
import API from 'src/services/api'
import * as ACTION from 'src/reduxData/action'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme, useLanguage } from 'src/hooks'
import { Container } from 'src/components'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Entypo'
import LinearGradient from 'react-native-linear-gradient'
import { Toast } from 'src/components'
import { WebView } from 'react-native-webview';
import { useFocusEffect } from '@react-navigation/native';

export default ({ navigation }) => {

    const [Colors, styles] = useTheme(style)
    const translate = useLanguage().t
    const dispatch = useDispatch()
    const sessionReducer = useSelector(state => state.sessionReducer)
    const webView = useRef()
    const [opacity, setOpacity] = useState(0)
    const password = sessionReducer.userSession ? sessionReducer.userSession.password : null
    const username = sessionReducer.userSession ? sessionReducer.userSession.username : null

    useFocusEffect(
        useCallback(() => {
            dispatch(ACTION.loadingStarted())
            setOpacity(0)
            const redirectTo = 'window.location = "https://wilhub.com/user/quizzes"'
            webView.current.injectJavaScript(redirectTo)
        }, [])
    )

    useEffect(() => {
        //dispatch(ACTION.loadingStarted())
        //Toast.show({ type: 'info', message: 'Please login again to start quiz.' })
    }, [])

    const handleWebViewNavigationStateChange = (newNavState) => {
        // newNavState looks something like this:
        // {
        //   url?: string;
        //   title?: string;
        //   loading?: boolean;
        //   canGoBack?: boolean;
        //   canGoForward?: boolean;
        // }
        const { url } = newNavState;
        if (!url) return;

        if (url.includes('user/video/buy') || url == 'https://wilhub.com/') {
            const newURL = 'https://wilhub.com/user/quizzes';
            const redirectTo = 'window.location = "' + newURL + '"';
            webView.current.injectJavaScript(redirectTo);

        }

        if (url.includes('user/quizzes') && url.includes('start')) {
            console.log("Calling quiz start")
            setOpacity(0)
            dispatch(ACTION.loadingStarted())
            setTimeout(() => {
                setOpacity(1)
                dispatch(ACTION.loadingCompleted())
            }, 3000)
        }


        if (url == 'https://wilhub.com/user/quizzes') {
            console.log("Calling only quiz")
            setTimeout(() => {
                setOpacity(1)
                dispatch(ACTION.loadingCompleted())
            }, 5000)

            const openQuizScript = `
            $(document).ready(function(){
                $(".text-center a").click(function(e){
                    e.preventDefault();
                    const url = "https://wilhub.com"+$(this).attr("href")
                    window.location = url
                })
            });
            true;
            `
            webView.current.injectJavaScript(openQuizScript);
        }
        if (url == 'https://wilhub.com/login') {
            const loginScript = `
                $(document).ready(function(){
                    $("input[name*='username']").val("`+ username + `")
                    $("input[name*='password']").val("`+ password + `")
                    $(".btn-register-user-r").click()
                });
            true;
            `
            if(username && password){
                webView.current.injectJavaScript(loginScript);
            }
            else{
                dispatch(ACTION.loadingCompleted())
                Toast.show({ type: 'info', message: 'Please login first.' })
                navigation.navigate('Account')
            }
        }
    }




    const onLoad = (syntheticEvent) => {
        const { nativeEvent } = syntheticEvent;
        const url = nativeEvent.url;
        //console.log('url >>>',url)
    }
    
    const runGlobalInject = `
    $(document).ready(function(){
        $("footer").hide()
        $("#show_button").hide()
        $(".ucp-menu-item").hide()
        $(".sticky-header").hide()
        $(".middle-header").hide()
    });
    true;
    `



    return (
        <Container isTransparentStatusBar={false}>
            <ImageBackground source={about_us_background} style={styles.background} >
                <WebView
                    ref={webView}
                    style={{ flex: 1, opacity: opacity }}
                    containerStyle={{ borderRadius: 20, marginBottom: 70, marginTop: 5 }}
                    originWhitelist={['*']}
                    source={{ uri: 'https://wilhub.com/user/quizzes' }}
                    javaScriptEnabled={true}
                    onNavigationStateChange={handleWebViewNavigationStateChange}
                    injectedJavaScript={runGlobalInject}
                //onLoad={onLoad}
                />
            </ImageBackground>
        </Container>
    )
}