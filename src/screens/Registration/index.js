import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
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

export default ({navigation}) => {
  const [Colors, styles] = useTheme(style);
  const translate = useLanguage().t;
  const dispatch = useDispatch();
  const sessionReducer = useSelector(state => state.sessionReducer);
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [retypePassword, setRetypePassword] = useState('');
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [dob, setDob] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [schoolName, setSchoolName] = useState('');

  useEffect(() => {}, []);

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
      <StatusBar backgroundColor={Colors.secondary} barStyle="light-content" />
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
        {/* <View style={[styles.marginTop40]}>
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
        </View> */}
        <View style={[styles.marginTop40]}>
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setFirstName(text)}
              value={firstName}
              placeholder={'First name'}
            />
          </View>
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setLastName(text)}
              value={lastName}
              placeholder={'Last name'}
            />
          </View>
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setAddress(text)}
              value={address}
              placeholder={'Address'}
            />
          </View>
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setFatherName(text)}
              value={fatherName}
              placeholder={`Father's name`}
            />
          </View>
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setMotherName(text)}
              value={motherName}
              placeholder={`Mother's name`}
            />
          </View>
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setDob(text)}
              value={dob}
              placeholder={'DD/MM/YY'}
            />
          </View>
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setPhonenumber(text)}
              value={dob}
              placeholder={'Phone number'}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setSchoolName(text)}
              value={schoolName}
              placeholder={'School/Collage'}
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
