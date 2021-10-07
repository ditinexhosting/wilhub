import React, { useState, useEffect, useRef } from 'react';
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

export default ({ navigation }) => {

    const [Colors, styles] = useTheme(style)
    const translate = useLanguage().t
    const dispatch = useDispatch()
    const sessionReducer = useSelector(state => state.sessionReducer)

    useEffect(() => {

    }, [])

    return (
        <Container isTransparentStatusBar={false}>
            <ImageBackground source={about_us_background} style={styles.background} >
                <ScrollView>
                    <View
                        style={styles.backButton}
                    >
                        <TouchableOpacity onPress={() => navigation.pop()}>
                            <Icon name={'chevron-left'} size={20} color={Colors.white} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.header]}>
                        <Text style={styles.headerText}>Career</Text>
                    </View>
                    <Image source={{ uri: 'https://wilhub.com/assets/career 2.jpg' }} style={styles.logo} />
                    <Text style={styles.titleText}>Welcome to WIL HUB'S Career!</Text>
                    <Text style={styles.descriptionText}>
                        Thank you for showing an interest in working at Wil Hub. The majority of the job openings are for online positions. Eligible candidates should send their most recent CVs to career@wilhub.com.
                    </Text>
                    <Text style={styles.descriptionText}>
                        We are an exquisite team of scholars, academicians, teachers, psychologists, creative designers, visualizers, and other professionals. Wil Hub has a wide selection of job openings for both new and experienced applicants both online and offline.
                    </Text>
                    <Image source={{ uri: 'https://wilhub.com/assets/career.jpg' }} style={styles.logo} />
                    <Text style={styles.titleText}>Online Learning Assistant</Text>
                    <Text style={styles.descriptionText}>
                        Qualified individuals with a desire to educate and the skill to coach and mentor online.
                    </Text>
                    <Text style={styles.titleText}>Customer Care Specialist</Text>
                    <Text style={styles.descriptionText}>
                    This position is open to candidates with good inter-personal communication skills in English and Malayalam, as well as the capacity to interact with clients and provide information from the institution to students.
                    </Text>
                </ScrollView>
            </ImageBackground>
        </Container>
    )
}