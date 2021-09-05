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
            if (username && password) {
                dispatch(ACTION.loadingStarted())
                setOpacity(0)
                const redirectTo = `
                    window.location = "https://wilhub.com/user/quizzes";
                true;`
                webView.current.injectJavaScript(redirectTo)
            }
            else {
                dispatch(ACTION.loadingCompleted())
                Toast.show({ type: 'info', message: 'Please login first.' })
                navigation.navigate('Account')
            }
        }, [username,password])
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
            const redirectTo = 'window.location = "' + newURL + '"; true;';
            webView.current.injectJavaScript(redirectTo);

        }

        if (url.includes('user/quizzes') && url.includes('start')) {
            setOpacity(0)
            dispatch(ACTION.loadingStarted())
            setTimeout(() => {
                setOpacity(1)
                dispatch(ACTION.loadingCompleted())
            }, 3000)
        }


        if (url == 'https://wilhub.com/user/quizzes') {
            setTimeout(() => {
                setOpacity(1)
                dispatch(ACTION.loadingCompleted())
            }, 5000)

            const openQuizScript = `
            setTimeout(() => {
            $(document).ready(function(){
                $(".text-center a").click(function(e){
                    e.preventDefault();
                    const url = "https://wilhub.com"+$(this).attr("href")
                    window.location = url
                })
            });
            },100);
            true;
            `
            webView.current.injectJavaScript(openQuizScript);
        }
        if (url == 'https://wilhub.com/login') {
            const loginScript = `
            setTimeout(() => {
                $(document).ready(function(){
                    $("input[name*='username']").val("`+ username + `")
                    $("input[name*='password']").val("`+ password + `")
                    $(".btn-register-user-r").click()
                });
            },100);
            true;
            `
            if (username && password) {
                webView.current.injectJavaScript(loginScript);
            }
        }
    }


    const runGlobalInject = `
    document.querySelector("footer").style.display = 'none'
    document.querySelector("#show_button").style.display = 'none'
    document.querySelector(".ucp-menu-item").style.display = 'none'
    document.querySelector(".sticky-header").style.display = 'none'
    document.querySelector(".middle-header").style.display = 'none'
    true;
    `



    return (
        <Container isTransparentStatusBar={false}>
            <ImageBackground source={about_us_background} style={styles.background} >
                <WebView
                    ref={webView}
                    onMessage={()=>null}
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