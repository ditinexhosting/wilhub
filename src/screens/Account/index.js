import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';
import style from './style';
import Config, { API_STORAGE } from 'src/config';
import {
  background
} from 'src/assets';
import API from 'src/services/api';
import * as ACTION from 'src/reduxData/action';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme, useLanguage } from 'src/hooks';
import { Container } from 'src/components';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import { Toast } from 'src/components'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { profile } from 'src/assets'

export default ({ navigation }) => {
  const [Colors, styles] = useTheme(style);
  const translate = useLanguage().t;
  const dispatch = useDispatch();
  const userSession = useSelector(state => state.sessionReducer.userSession);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {

  }, [])

  const login = async()=>{
    dispatch(ACTION.loadingStarted())
    const response = await API.login({username: username, password: password})
    dispatch(ACTION.loadingCompleted())
    if(!response.status || response.data == undefined)
      return Toast.show({type: 'error', message: response.error})
    dispatch(ACTION.loggedin(response.data.user))
    await AsyncStorage.setItem('@userSession',JSON.stringify(response.data.user))
  }

  const logout = async()=>{
    dispatch(ACTION.loggedin(null))
    await AsyncStorage.removeItem('@userSession')
  }



  const login_render = ()=>{
    return(
      <View style={[styles.marginTop60]}>
          <View style={styles.searchHolder}>
            <Icon name={'user'} size={25} color={Colors.gray_light} style={styles.marginRight8} />
            <TextInput
              style={styles.searchInput}
              onChangeText={(text) => setUsername(text)}
              value={username}
              placeholder={'Username or Email'}
            />
          </View>
          <View style={styles.searchHolder}>
            <Icon name={'lock'} size={25} color={Colors.gray_light} style={styles.marginRight8} />
            <TextInput
              secureTextEntry={true}
              style={styles.searchInput}
              onChangeText={(text) => setPassword(text)}
              value={password}
              placeholder={'Password'}
            />
          </View>
          <LinearGradient
            colors={[Colors.primary, Colors.secondary]}
            style={styles.loginButton}>
            <TouchableOpacity onPress={()=>login()} style={[styles.flexRow, styles.centerAll]}>
              <Text style={styles.headerText}>LOG IN</Text>
            </TouchableOpacity>
          </LinearGradient>
          <TouchableOpacity onPress={()=>navigation.navigate('Registration')} style={styles.signupHolder}>
            <Text style={styles.create}>Create Account <Text style={styles.signup}>Sign Up</Text></Text>
          </TouchableOpacity>
        </View>
    )
  }


  const profile_render = ()=>{
    return(
      <View style={[styles.marginTop20]}>
          <View style={[styles.centerAll, styles.marginBottom60]}>
            <Image source={profile} style={styles.profile} />
            <Text style={styles.username}>{userSession.username}</Text>
          </View>
          <Text style={[styles.courseDetails,styles.marginBottom60]}>No Courses are registered yet.</Text>
          <LinearGradient
            colors={[Colors.primary, Colors.secondary]}
            style={styles.loginButton}>
            <TouchableOpacity onPress={()=>logout()} style={[styles.flexRow, styles.centerAll]}>
              <Text style={styles.headerText}>LOGOUT</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
    )
  }


  return (
    <Container isTransparentStatusBar={false}>
      <ImageBackground source={background} style={styles.background} />
      <LinearGradient
        colors={[Colors.primary, Colors.secondary]}
        style={styles.headerBar}>
        <View style={[styles.flexRow, styles.centerAll]}>
          <Text style={styles.headerText}>{userSession==null ? translate('login_title'): 'My Profile'}</Text>
        </View>
      </LinearGradient>
      <ScrollView keyboardShouldPersistTaps={'handled'}>
        {userSession==null ? login_render() : profile_render()}
      </ScrollView>
    </Container>
  );
};
