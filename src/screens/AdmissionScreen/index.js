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

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [dob, setDob] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [schoolName, setSchoolName] = useState('');

  useEffect(() => {}, []);

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
              style={[styles.flexRow, styles.centerAll]}>
              <Text style={styles.submitBtnText}>APPLY</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
    </Container>
  );
};
