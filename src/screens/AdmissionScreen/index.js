import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
  StatusBar,
  StyleSheet,
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
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNPickerSelect from 'react-native-picker-select';

export default ({navigation}) => {
  const [Colors, styles] = useTheme(style);
  const translate = useLanguage().t;
  const dispatch = useDispatch();
  const sessionReducer = useSelector(state => state.sessionReducer);

  const [name, setName] = useState('');
  const [courseName, setCourseName] = useState(
    sessionReducer?.selectedCourse?.title,
  );
  const [courseAmount, setCourseAmount] = useState('1000');
  const [region, setRegion] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [courseId, setCourseId] = useState(sessionReducer?.selectedCourse?.id);
  const [userId, setUserId] = useState(sessionReducer?.userSession?.id);
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [guardianName, setGuardianName] = useState('');
  const [relation, setRelation] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [landline, setLandline] = useState('');
  const [emailId, setEmailId] = useState('');
  const [facebookId, setFacebookId] = useState('');
  const [instagramId, setInstagramId] = useState('');
  const [educationQualification, setEducationQualification] = useState('');
  const [eqBoard, setEqBoard] = useState('');
  const [eqClassOrSubject, setEqClassOrSubject] = useState('');
  const [islamicEducation, setIslamicEducation] = useState('');
  const [ieBoard, setIeBoard] = useState('');
  const [ieClassOrSubject, setIeClassOrSubject] = useState('');
  const [convenientTime, setConvenientTime] = useState('');

  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [address, setAddress] = useState('');
  // const [fatherName, setFatherName] = useState('');
  // const [motherName, setMotherName] = useState('');
  // const [phonenumber, setPhonenumber] = useState('');
  // const [schoolName, setSchoolName] = useState('');

  useEffect(() => {}, []);

  const applyHanbleClicked = async () => {
    const data = new FormData();

    data.append('name', `${name}`); //name
    data.append('c1course', `${courseName}`); //course name
    data.append('amount1', `${courseAmount}`); //course price
    data.append('c1region', `${region}`); //region
    data.append('c1mstatus', ''); // marital status
    data.append('In_hs', '');
    data.append('In_str', '');
    data.append('In_pl', '');
    data.append('In_pst', '');
    data.append('In_dist', '');
    data.append('In_st', '');
    data.append('pin_no', `${pinCode}`);
    data.append('canceladd', '');
    data.append('c1course_id', `${courseId}`);
    data.append('c1user_id', `${userId}`); //user id
    data.append('c1name', 'wgfsg');
    data.append('c1age', `${age}`); //age
    data.append('c1gender', `${gender}`); //gender
    data.append('c1dob', `${dob}`); //dob
    data.append('c1guard', `${guardianName}`); //guardian name
    data.append('c1relation', `${relation}`); //relation type
    data.append('c1contact', `${contactNumber}`); //contact number
    data.append('c1w-number', `${whatsappNumber}`); //whatsapp number
    data.append('c1lcontact', `${landline}`); //lanline
    data.append('c1email', `${emailId}`); //email id
    data.append('c1fb', `${facebookId}`); //facebook id
    data.append('c1insta', `${instagramId}`); // insta id
    data.append('c1education', `${educationQualification}`); //educational qualification
    data.append('c1board', `${eqBoard}`); //board
    data.append('c1class', `${eqClassOrSubject}`); //class/subject
    data.append('c1isla_edu', `${islamicEducation}`); //islamic education
    data.append('c1islamic_brd', `${ieBoard}`); //board
    data.append('c1isla_class', `${ieClassOrSubject}`); //class
    data.append('c1time', `${convenientTime}`); //convenient time

    if (
      name !== '' &&
      courseName !== '' &&
      courseAmount !== '' &&
      region !== '' &&
      pinCode !== '' &&
      courseId !== '' &&
      userId !== '' &&
      age !== '' &&
      gender !== '' &&
      dob !== '' &&
      guardianName !== '' &&
      relation !== '' &&
      contactNumber !== '' &&
      whatsappNumber !== '' &&
      landline !== '' &&
      emailId !== '' &&
      facebookId !== '' &&
      instagramId !== '' &&
      educationQualification !== '' &&
      eqBoard !== '' &&
      eqClassOrSubject !== '' &&
      islamicEducation !== '' &&
      ieBoard !== '' &&
      ieClassOrSubject !== '' &&
      convenientTime !== ''
    ) {
      const spliteDob = dob.split('-');
      const month = spliteDob[1];
      if (month <= 12) {
        navigation.navigate('PaymentScreen', {
          data: data,
        });
      } else {
        Toast.show({
          type: 'error',
          message: 'Please enter valid DOB',
        });
      }
    } else {
      Toast.show({
        type: 'error',
        message: 'Please fill out all the fields',
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
    // console.log(response);
    //   if (response) {
    //     console.log(response);
    //     await AsyncStorage.setItem('@courses_key', JSON.stringify(response));
    //     navigation.navigate('PaymentScreen');
    //   }
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
          {/* <View style={styles.searchHolder}>
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
          </View> */}
          {/* name*/}
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setName(text)}
              value={name}
              placeholder={'Enter Your Name'}
            />
          </View>
          {/* age*/}
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setAge(text)}
              value={age}
              placeholder={'Enter Your Age'}
              keyboardType="numeric"
            />
          </View>
          {/* gender*/}
          <View style={styles.searchHolder}>
            <RNPickerSelect
              placeholder={{
                label: 'Select Gender',
                value: gender,
                color: '#9EA0A4',
              }}
              style={pickerSelectStyles}
              onValueChange={text => setGender(text)}
              items={[
                {label: 'Male', value: 'male'},
                {label: 'Female', value: 'female'},
                {label: 'Other', value: 'other'},
              ]}
            />
          </View>
          {/* dob*/}
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setDob(text)}
              value={dob}
              placeholder={'YYYY-MM-DD'}
              keyboardType="numeric"
            />
          </View>
          {/* guardian name*/}
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setGuardianName(text)}
              value={guardianName}
              placeholder={'Enter Your Guardian Name'}
            />
          </View>
          {/* relation with guardian*/}
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setRelation(text)}
              value={relation}
              placeholder={'Enter Relation'}
            />
          </View>
          {/* region*/}
          <View style={styles.searchHolder}>
            <RNPickerSelect
              placeholder={{
                label: 'Select The Region',
                value: region,
                color: '#9EA0A4',
              }}
              style={pickerSelectStyles}
              onValueChange={text => setRegion(text)}
              items={[
                {label: 'Europe', value: 'europe'},
                {label: 'Africa', value: 'africa'},
                {label: 'North America', value: 'north_ameri'},
                {label: 'GCC', value: 'gcc'},
                {label: 'India', value: 'india'},
                {label: 'Other', value: 'other'},
              ]}
            />
          </View>
          {/* pin code*/}
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setPinCode(text)}
              value={pinCode}
              placeholder={'Pincode'}
              keyboardType="numeric"
            />
          </View>
          {/* contact number*/}
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setContactNumber(text)}
              value={contactNumber}
              placeholder={'Enter Your Contact Number'}
              keyboardType="phone-pad"
            />
          </View>
          {/* whatsapp number*/}
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setWhatsappNumber(text)}
              value={whatsappNumber}
              placeholder={'Enter Your WhatsApp Number'}
              keyboardType="phone-pad"
            />
          </View>
          {/* Landline number*/}
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setLandline(text)}
              value={landline}
              placeholder={'Enter Your Landline Number'}
              keyboardType="phone-pad"
            />
          </View>
          {/* Email address*/}
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setEmailId(text)}
              value={emailId}
              placeholder={'Enter Your Email Address'}
            />
          </View>
          {/* Facebook Id*/}
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setFacebookId(text)}
              value={facebookId}
              placeholder={'Enter Your Facebook ID'}
            />
          </View>
          {/* Instagram Id*/}
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setInstagramId(text)}
              value={instagramId}
              placeholder={'Enter Your Instagram ID'}
            />
          </View>
          {/* Education Qualication*/}
          <View style={styles.searchHolder}>
            <RNPickerSelect
              placeholder={{
                label: 'Select Education Qualificiation',
                value: educationQualification,
                color: '#9EA0A4',
              }}
              style={pickerSelectStyles}
              onValueChange={text => setEducationQualification(text)}
              items={[
                {label: 'Primary', value: 'primary'},
                {label: '10th', value: '10th'},
                {label: 'Plus Two', value: '+2'},
                {label: 'Diploma', value: 'diploma'},
                {label: 'Graduation', value: 'graduation'},
                {label: 'Post Graduation', value: 'post_graduation'},
                {label: 'Other', value: 'other'},
              ]}
            />
          </View>
          {/* EQ Board*/}
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setEqBoard(text)}
              value={eqBoard}
              placeholder={'Board'}
            />
          </View>
          {/* EQ Class or Subject*/}
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setEqClassOrSubject(text)}
              value={eqClassOrSubject}
              placeholder={'Class/Subject'}
            />
          </View>
          {/* Islamic Education*/}
          <View style={styles.searchHolder}>
            <RNPickerSelect
              placeholder={{
                label: 'Select Islamic Education',
                value: islamicEducation,
                color: '#9EA0A4',
              }}
              style={pickerSelectStyles}
              onValueChange={text => setIslamicEducation(text)}
              items={[
                {label: 'Madrasha', value: 'primary'},
                {label: 'AIC', value: '10th'},
                {label: 'Preliminary', value: '+2'},
                {label: 'UG', value: 'UG'},
                {label: 'PG', value: 'primary'},
                {label: 'Diploma', value: '10th'},
              ]}
            />
          </View>
          {/* IE Board*/}
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setIeBoard(text)}
              value={ieBoard}
              placeholder={'Board'}
            />
          </View>
          {/* IE Class or Subject*/}
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setIeClassOrSubject(text)}
              value={ieClassOrSubject}
              placeholder={'Class/Subject'}
            />
          </View>
          {/* Convenient time*/}
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setConvenientTime(text)}
              value={convenientTime}
              placeholder={'Select Time'}
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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 18,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 0,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    width: 250,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0,
    borderRadius: 8,
    color: 'black',
    width: 250,
    paddingRight: 30, // to ensure the text is never behind the icon
    top: -5,
  },
});
