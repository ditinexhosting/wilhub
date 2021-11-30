import React, {useState, useEffect, useRef} from 'react';
import {View, Text, ImageBackground, StatusBar, Button} from 'react-native';
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

export default ({navigation, route}) => {
  const {data} = route.params;

  const [Colors, styles] = useTheme(style);
  const translate = useLanguage().t;
  const dispatch = useDispatch();
  const sessionReducer = useSelector(state => state.sessionReducer);

  // const paymentHandler = async () => {
  //   dispatch(ACTION.loadingStarted());
  //   const response = await API.addCourse(data);
  //   dispatch(ACTION.loadingCompleted());
  // if (response) {
  //   console.log(response);
  //   alert('payment successful');
  //   await AsyncStorage.setItem('@courses_key', JSON.stringify(response));
  //   navigation.navigate('Dashboard');
  // }
  // };

  const paymentHandler = async () => {
    dispatch(ACTION.loadingStarted());
    const response = await API.addCourse(data);
    dispatch(ACTION.loadingCompleted());
    if (response) {
      console.log(response);
      try {
        let courseArray = await AsyncStorage.getItem('@courses_key');
        if (courseArray) {
          courseArray = JSON.parse(courseArray);
          courseArray.push(response?.course1[0]);
          await AsyncStorage.setItem(
            '@courses_key',
            JSON.stringify(courseArray),
          );
        } else {
          let courseArray = [];
          courseArray.push(response?.course1[0]);
          await AsyncStorage.setItem(
            '@courses_key',
            JSON.stringify(courseArray),
          );
        }
        alert('payment successful');
      } catch (err) {
        console.log('error', err);
      }
      navigation.navigate('Dashboard');
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@courses_key');
      const data = jsonValue != null ? JSON.parse(jsonValue) : null;
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const removeCourse = async () => {
    await AsyncStorage.removeItem('@courses_key');
  };

  const cancelPaymentHandler = () => {
    alert('payment unsuccessful');
    navigation.navigate('Dashboard');
  };

  return (
    <Container isTransparentStatusBar={false}>
      <ImageBackground source={background} style={styles.background} />
      <StatusBar backgroundColor={Colors.secondary} barStyle="light-content" />

      <View style={styles.container}>
        {/* <Text style={styles.thankyou}>Thank You!</Text> */}
        {/* <Text style={styles.textStyle}>Your Payment is Successfully Done</Text> */}
        <Text style={styles.thankyou}>Payment Page</Text>
        <View style={{margin: 20}}>
          <Button title="pay" onPress={paymentHandler} />
        </View>
        <Button title="cancel" onPress={cancelPaymentHandler} />
      </View>
    </Container>
  );
};
