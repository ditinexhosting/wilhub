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
import { about_us_background, about_us_logo, advisory_board, about_person, our_team, guest_lecturer, services, online_course, online_news, video_lecture } from 'src/assets'
import API from 'src/services/api'
import * as ACTION from 'src/reduxData/action'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme, useLanguage } from 'src/hooks'
import { Container } from 'src/components'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Entypo'
import LinearGradient from 'react-native-linear-gradient'
import jsonData from './data.json'

export default ({ navigation }) => {

    const [Colors, styles] = useTheme(style)
    const translate = useLanguage().t
    const dispatch = useDispatch()
    const sessionReducer = useSelector(state => state.sessionReducer)

    useEffect(() => {

    }, [])

    const renderItem = ({ item }) => {
        return (
            <View style={styles.imageContainer}>
                <Image source={{uri: item.image}} style={styles.personImage} />
                <Text numberOfLines={2} style={styles.personTitle}>{item.name}</Text>
                {item.designation && <Text numberOfLines={2} style={styles.personDesignation}>{item.designation}</Text>}
            </View>
        )
    }

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
                        <Text style={styles.headerText}>{translate('about_us_title')}</Text>
                    </View>
                    <Image source={about_us_logo} style={styles.logo} />
                    <Text style={styles.descriptionText}>
                        {translate('about_us_description')}
                    </Text>
                    {/*Advisory Board */}
                    <View style={[styles.flexRow, styles.alignCenter, styles.contentHeader]}>
                        <Image source={advisory_board} style={styles.iconImage} />
                        <Text style={styles.iconText}>{translate('advisory_board')}</Text>
                    </View>
                    <FlatList
                        data={jsonData.advisory_board}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index}
                        horizontal={true}
                    />
                    
                    {/*Our Team*/}
                    <View style={[styles.flexRow, styles.alignCenter, styles.contentHeader]}>
                        <Image source={our_team} style={styles.iconImage} />
                        <Text style={styles.iconText}>{translate('our_team')}</Text>
                    </View>
                    <FlatList
                        data={jsonData.our_team}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index}
                        horizontal={true}
                    />
                    {/*Guest lecturer */}
                    <View style={[styles.flexRow, styles.alignCenter, styles.contentHeader]}>
                        <Image source={guest_lecturer} style={styles.iconImage} />
                        <Text style={styles.iconText}>{translate('guest_lecturers')}</Text>
                    </View>
                    <FlatList
                        data={jsonData.guest_lecturer}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index}
                        horizontal={true}
                    />
                    <View style={styles.marginBottom60}></View>
                    {/*Services */}
                    {/*<View style={[styles.flexRow, styles.alignCenter, styles.contentHeader]}>
                        <Image source={services} style={styles.iconImage} />
                        <Text style={styles.iconText}>{translate('services')}</Text>
                    </View>
                    <View style={[styles.flexRow, styles.spaceBetween, styles.marginBottom20]}>
                        <View>
                            <Image source={online_course} style={styles.serviceImage} />
                            <Text style={styles.serviceText}>Online Course</Text>
                        </View>
                        <View>
                            <Image source={online_course} style={styles.serviceImage} />
                            <Text style={styles.serviceText}>Online News</Text>
                        </View>
                        <View>
                            <Image source={online_course} style={styles.serviceImage} />
                            <Text style={styles.serviceText}>Video Lecture</Text>
                        </View>
                    </View>*/}
                </ScrollView>
            </ImageBackground>
        </Container>
    )
}