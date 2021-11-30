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
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default ({navigation}) => {
  const [Colors, styles] = useTheme(style);
  const translate = useLanguage().t;
  const dispatch = useDispatch();
  const sessionReducer = useSelector(state => state.sessionReducer);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [dob, setDob] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [schoolName, setSchoolName] = useState('');

  useEffect(() => {}, []);

  const applyHanbleClicked = async () => {
    const data = new FormData();

    data.append('name', 'srtss'); //name
    data.append('c1course', 'Diploma%20in%20Islamic%20Studies'); //course name
    data.append('amount1', '1000'); //course price
    data.append('c1region', 'India'); //region
    data.append('c1mstatus', ''); // marital status
    data.append('In_hs', 'fj');
    data.append('In_str', 'fj');
    data.append('In_pl', 'ghdth');
    data.append('In_pst', 'hds');
    data.append('In_dist', 'kerala');
    data.append('In_st', 'gsadeg');
    data.append('pin_no', '541154');
    data.append('canceladd', '1');
    data.append('c1course_id', '1');
    data.append('c1user_id', '271'); //user id
    data.append('c1name', 'wgfsg');
    data.append('c1age', '10'); //age
    data.append('c1gender', 'male'); //gender
    data.append('c1dob', '2021-10-07'); //dob
    data.append('c1guard', 'dhydhy'); //guardian name
    data.append('c1relation', 'ryry'); //relation type
    data.append('c1contact', 'wtwt'); //contact number
    data.append('c1w-number', '1423456000'); //whatsapp number
    data.append('c1lcontact', '5445454'); //lanline
    data.append('c1email', 'ertys@srh.bbb'); //email id
    data.append('c1fb', 'fghdjfdsjdsj'); //facebook id
    data.append('c1insta', 'sgshgsfsf'); // insta id
    data.append('c1education', 'pls%20two'); //educational qualification
    data.append('c1board', 'wrtwtr'); //board
    data.append('c1class', 'wrytwy'); //class/subject
    data.append('c1isla_edu', 'rswywy'); //islamic education
    data.append('c1islamic_brd', 'wryrwy'); //board
    data.append('c1isla_class', 'w4tqewt'); //class
    data.append('c1time', '10.00'); //convenient time

    if (data) {
      navigation.navigate('PaymentScreen', {
        data: data,
      });
    }

    // axios({
    //   method: 'post',
    //   url: 'https://wilhub.com/api/v1/course1/add',
    //   data: data,
    //   mimeType: 'multipart/form-data',
    // })
    //   .then(function (response) {
    //     console.log(response?.data?.course1);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // dispatch(ACTION.loadingStarted());
    // const response = await API.addCourse(data);
    // dispatch(ACTION.loadingCompleted());
    // if (response) {
    //   console.log(response);
    //   await AsyncStorage.setItem('@courses_key', JSON.stringify(response));
    //   navigation.navigate('PaymentScreen');
    // }
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
              value={phonenumber}
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
              onPress={() => navigation.navigate('PaymentScreen')}
              onPress={applyHanbleClicked}
              style={[styles.flexRow, styles.centerAll]}>
              <Text style={styles.submitBtnText}>APPLY</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
    </Container>
  );
};
