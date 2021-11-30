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
} from 'react-native';
import style from './style';
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
  const sessionReducer = useSelector(state => state.sessionReducer);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [allCourse, setAllCourse] = useState([]);

  useEffect(() => {
    // logout();
    // getData();
    // removeCourse()
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubscribe;
  }, [navigation]);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@courses_key');
      const data = jsonValue != null ? JSON.parse(jsonValue) : null;
      // console.log(data?.course1);
      setAllCourse(data?.course1);
    } catch (e) {
      console.log(e);
    }
  };

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
    if (sessionReducer?.isApplyToLogin) {
      navigation.replace('AdmissionScreen');
      dispatch(ACTION.afterIsApplyToLogin());
    }
  };

  const logout = async () => {
    dispatch(ACTION.loggedin(null));
    await AsyncStorage.removeItem('@userSession');
  };
  const removeCourse = async () => {
    await AsyncStorage.removeItem('@courses_key');
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.courseCard}
        onPress={() =>
          navigation.navigate('CourseScreen', {
            title: item?.course,
          })
        }>
        <Text style={styles.courseCardText}>{item?.course}</Text>
      </TouchableOpacity>
    );
  };
  const login_render = () => {
    return (
      <>
        <LinearGradient
          colors={[Colors.secondary, Colors.primary]}
          style={styles.headerBar}>
          <View style={[styles.flexRow, styles.centerAll]}>
            <Text style={styles.headerText}>{translate('login_title')}</Text>
          </View>
        </LinearGradient>
        <View style={[styles.marginTop60]}>
          <View style={styles.searchHolder}>
            <Icon
              name={'user'}
              size={25}
              color={Colors.gray_light}
              style={styles.marginRight8}
            />
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setUsername(text)}
              value={username}
              placeholderTextColor={Colors.gray_light}
              placeholder={'Username or Email'}
            />
          </View>
          <View style={styles.searchHolder}>
            <Icon
              name={'lock'}
              size={25}
              color={Colors.gray_light}
              style={styles.marginRight8}
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
            <Text style={styles.create}>
              Create Account <Text style={styles.signup}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
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
          {/* <TouchableOpacity
            style={styles.courseCard}
            onPress={() =>
              navigation.navigate('CourseScreen', {
                title: 'Mawadha',
              })
            }>
            <Text style={styles.courseCardText}>Mawadha</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.courseCard}
            onPress={() =>
              navigation.navigate('CourseScreen', {
                title: 'Diploma in islamic studies',
              })
            }>
            <Text style={styles.courseCardText}>
              Diploma in islamic studies
            </Text>
          </TouchableOpacity> */}
          <FlatList
            data={allCourse}
            renderItem={renderItem}
            keyExtractor={index => index}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </>
    );
  };

  return (
    <Container isTransparentStatusBar={false}>
      <ImageBackground source={background} style={styles.background} />

      <ScrollView keyboardShouldPersistTaps={'handled'}>
        {userSession == null
          ? login_render()
          : sessionReducer?.isApplyToLogin
          ? login_render()
          : profile_render()}
      </ScrollView>
    </Container>
  );
};
