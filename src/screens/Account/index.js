import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  ImageBackground,
  StatusBar,
} from 'react-native';
import style from './style';
import Config, {API_STORAGE} from 'src/config';
import {background} from 'src/assets';
import API from 'src/services/api';
import * as ACTION from 'src/reduxData/action';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme, useLanguage} from 'src/hooks';
import {Container} from 'src/components';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {Toast} from 'src/components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {profile} from 'src/assets';

export default ({navigation}) => {
  const [Colors, styles] = useTheme(style);
  const translate = useLanguage().t;
  const dispatch = useDispatch();
  const userSession = useSelector(state => state.sessionReducer.userSession);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phonenumber, setPhonenumber] = useState('');

  useEffect(() => {}, []);

  const login = async () => {
    dispatch(ACTION.loadingStarted());
    const response = await API.login({username: username, password: password});
    dispatch(ACTION.loadingCompleted());
    if (!response.status || response.data == undefined)
      return Toast.show({
        type: 'error',
        message: 'Invalid username or password.',
      });
    dispatch(ACTION.loggedin({...response.data.user, password}));
    await AsyncStorage.setItem(
      '@userSession',
      JSON.stringify({...response.data.user, password}),
    );
  };

  // const logout = async () => {
  //   dispatch(ACTION.loggedin(null));
  //   await AsyncStorage.removeItem('@userSession');
  // };

  const login_render = () => {
    return (
      <>
        <LinearGradient
          colors={[Colors.secondary, Colors.primary]}
          style={styles.headerBar}>
          <View style={[styles.flexRow, styles.centerAll]}>
            <Text style={styles.headerText}>Login / Signup</Text>
          </View>
        </LinearGradient>
        <ScrollView keyboardShouldPersistTaps={'handled'}>
          <View style={[styles.marginTop60]}>
            <View style={styles.searchHolder}>
              <Icon
                name={'user'}
                size={20}
                color={Colors.gray_medium}
                style={[styles.marginRight8, styles.marginLeft]}
              />
              <TextInput
                style={styles.searchInput}
                onChangeText={text => setUsername(text)}
                value={username}
                placeholderTextColor={Colors.gray_light}
                placeholder={'User name'}
              />
            </View>
            <View style={styles.searchHolder}>
              <Icon
                name={'lock'}
                size={20}
                color={Colors.gray_medium}
                style={[styles.marginRight8, styles.marginLeft]}
              />
              <TextInput
                secureTextEntry={true}
                style={styles.searchInput}
                onChangeText={text => setPassword(text)}
                value={password}
                placeholderTextColor={Colors.gray_light}
                placeholder={'Password'}
              />
            </View>
            <View style={styles.searchHolder}>
              <Icon
                name={'phone'}
                size={20}
                color={Colors.gray_medium}
                style={[styles.marginRight8, styles.marginLeft]}
              />
              <TextInput
                style={styles.searchInput}
                onChangeText={text => setPhonenumber(text)}
                value={phonenumber}
                placeholderTextColor={Colors.gray_light}
                placeholder={'Phone Number'}
                keyboardType="numeric"
              />
            </View>
            <LinearGradient
              colors={[Colors.secondary, Colors.primary]}
              style={styles.loginButton}>
              <TouchableOpacity
                onPress={() => login()}
                style={[styles.flexRow, styles.centerAll]}>
                <Text style={styles.submitBtnText}>LOG IN</Text>
              </TouchableOpacity>
            </LinearGradient>
            <TouchableOpacity
              onPress={() => navigation.navigate('Registration')}
              style={styles.signupHolder}>
              <Text style={styles.create}>Forgetpassword?</Text>
              <Text style={styles.create}>
                Create Account <Text style={styles.signup}>Sign Up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </>
    );
  };

  const profile_render = () => {
    return (
      <>
        <LinearGradient
          colors={[Colors.secondary, Colors.primary]}
          style={styles.profileHeaderBar}>
          <View style={[styles.flexRow, styles.centerAll]}>
            <Text style={styles.headerText}>
              <Text style={styles.headerText}>Profile</Text>
            </Text>
          </View>
          <View style={[styles.centerAll]}>
            <Image source={profile} style={styles.profile} />
            <Text style={styles.username}>User name</Text>
          </View>
        </LinearGradient>
        <View style={styles.headerView}>
          <Text style={styles.containerHeaderText}>
            {translate('Your course details')}
          </Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.courseCard}
            onPress={() => alert('ok')}>
            <Text style={styles.courseCardText}>Mawadha</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.courseCard}
            onPress={() => alert('ok')}>
            <Text style={styles.courseCardText}>
              Diploma in islamic studies
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  return (
    <Container isTransparentStatusBar={false}>
      <ImageBackground source={background} style={styles.background} />
      <StatusBar backgroundColor={Colors.secondary} barStyle="light-content" />
      {false ? login_render() : profile_render()}
    </Container>
  );
};
