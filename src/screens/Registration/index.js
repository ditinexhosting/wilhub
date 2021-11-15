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
import Config, {API_STORAGE} from 'src/config';
import {
  background,
  course_icon_background_white,
  course_icon_background_blue,
  course1,
  course3,
} from 'src/assets';
import API from 'src/services/api';
import * as ACTION from 'src/reduxData/action';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme, useLanguage} from 'src/hooks';
import {Container} from 'src/components';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import {Toast} from 'src/components';

export default ({navigation}) => {
  const [Colors, styles] = useTheme(style);
  const translate = useLanguage().t;
  const dispatch = useDispatch();
  const sessionReducer = useSelector(state => state.sessionReducer);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    //Toast.show({type: 'error', message: 'Error'})
  }, []);

  const register = async () => {
    dispatch(ACTION.loadingStarted());
    const response = await API.signUp({
      username: username,
      email: email,
      password: password,
      re_password: retypePassword,
    });
    dispatch(ACTION.loadingCompleted());
    if (!response.status)
      return Toast.show({type: 'error', message: response.error});

    Toast.show({type: 'success', message: response.data.description});
    navigation.pop();
  };

  return (
    <Container isTransparentStatusBar={false}>
      <ImageBackground source={background} style={styles.background} />
      <LinearGradient
        colors={[Colors.secondary, Colors.primary]}
        style={styles.headerBar}>
        <View style={[styles.flexRow, styles.centerAll]}>
          <View style={styles.backButton}>
            <TouchableOpacity onPress={() => navigation.pop()}>
              <Icon name={'chevron-left'} size={20} color={Colors.white} />
            </TouchableOpacity>
          </View>
          <Text style={styles.headerText}>{translate('Admission form')}</Text>
        </View>
      </LinearGradient>
      <ScrollView keyboardShouldPersistTaps={'handled'}>
        <View style={[styles.marginTop20]}>
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
              placeholder={'Username'}
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
              placeholder={'Password'}
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
              onChangeText={text => setRetypePassword(text)}
              value={retypePassword}
              placeholder={'Retype Password'}
            />
          </View>
          <View style={styles.searchHolder}>
            <Icon
              name={'user-circle-o'}
              size={25}
              color={Colors.gray_light}
              style={styles.marginRight8}
            />
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setName(text)}
              value={name}
              placeholder={'Name'}
            />
          </View>
          <View style={styles.searchHolder}>
            <Icon
              name={'envelope'}
              size={25}
              color={Colors.gray_light}
              style={styles.marginRight8}
            />
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setEmail(text)}
              value={email}
              placeholder={'Email'}
            />
          </View>
          <LinearGradient
            colors={[Colors.secondary, Colors.primary]}
            style={styles.loginButton}>
            <TouchableOpacity
              onPress={() => register()}
              style={[styles.flexRow, styles.centerAll]}>
              <Text style={styles.submitBtnText}>SIGN UP</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
    </Container>
  );
};
