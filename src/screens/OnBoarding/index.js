import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import style from './style'
import Config from 'src/config'
import { slide_indicator, slide_indicator_selected, intro1, intro2, intro3 } from 'src/assets'
import API from 'src/services/api'
import * as ACTION from 'src/reduxData/action'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme, useLanguage } from 'src/hooks'
import { Container } from 'src/components'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Onboarding from 'react-native-onboarding-swiper'


export default ({ navigation }) => {
    const [Colors, styles] = useTheme(style)
    const translate = useLanguage().t
    const dispatch = useDispatch()
    const sessionReducer = useSelector(state => state.sessionReducer)

    const SLIDES = [
        {
            backgroundColor: Colors.background,
            image: <Image style={styles.image} source={intro1} />,
            title: <Text style={styles.title}>{translate('intro_title_1')}</Text>,
            subtitle: <Text style={styles.subtitle}>{translate('intro_subtitle_1')}</Text>
        },
        {
            backgroundColor: Colors.background,
            image: <Image style={styles.image} source={intro2} />,
            title: <Text style={styles.title}>{translate('intro_title_2')}</Text>,
            subtitle: <Text style={styles.subtitle}>{translate('intro_subtitle_2')}</Text>
        },
        {
            backgroundColor: Colors.background,
            image: <Image style={styles.image} source={intro3} />,
            title: <Text style={styles.title}>{translate('intro_title_3')}</Text>,
            subtitle: <Text style={styles.subtitle}>{translate('intro_subtitle_3')}</Text>
        },
    ]

    const onSkip = async ()=>{
        try {
            await AsyncStorage.setItem('@isUserOnboarded','true')
            navigation.replace('Dashboard')
          } catch (e) {
            console.log(e)
          }
    }


    const DotComponent = ({ data: { selected } }) => {
        return (
            <Image source={selected ? slide_indicator_selected : slide_indicator} style={styles.dot} />
        )
    }

    return (
        <Container isTransparentStatusBar={false}>
            <View style={styles.skipButton}>
                <TouchableOpacity onPress={onSkip} >
                    <Text style={styles.skipText}>Skip ></Text>
                </TouchableOpacity>
            </View>
            <Onboarding
                pages={SLIDES}
                bottomBarHighlight={false}
                showNext={false}
                showSkip={false}
                showDone={false}
                DotComponent={(data) => <DotComponent data={data} />}
            />
        </Container>
    )
}



