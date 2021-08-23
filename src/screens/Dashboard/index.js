import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';
import style from './style'
import Config from 'src/config'
import { logo_white, hamburger } from 'src/assets'
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
    const [searchQuery,setSearchQuery] = useState()

    useEffect(() => {

    }, [])

    return (
        <Container isTransparentStatusBar={false}>
            <LinearGradient colors={[Colors.primary, Colors.secondary]} style={styles.headerBar}>
                <Image source={logo_white} style={styles.logo} />
                <View style={[styles.flexRow,styles.centerAll]}>
                    <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
                        <Icon2 name={'menu'} size={60} color={Colors.white} />
                    </TouchableOpacity>
                    <View style={styles.searchHolder}>
                        <TextInput
                            style={styles.searchInput}
                            onChangeText={(text)=>setSearchQuery(text)}
                            value={searchQuery}
                            placeholder="What do you wnat to learn today ?"
                        />
                        <TouchableOpacity>
                            <Icon name={'search'} size={20} color={Colors.primary} />
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </Container>
    )
}



