import React, {useState, useEffect, useRef} from 'react';
import {View, Image, Text, ActivityIndicator, StatusBar} from 'react-native';
import style from './style';
import Config from 'src/config';
import {logo} from 'src/assets';
import API from 'src/services/api';
import * as ACTION from 'src/reduxData/action';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme, useLanguage} from 'src/hooks';
import {Container} from 'src/components';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default ({navigation}) => {
  const [Colors, styles] = useTheme(style);
  const translate = useLanguage().t;
  const dispatch = useDispatch();
  const sessionReducer = useSelector(state => state.sessionReducer);

  useEffect(() => {
    initialize();
  }, []);

  const initialize = async () => {
    try {
      const userSession = await AsyncStorage.getItem('@userSession');
      if (userSession) dispatch(ACTION.loggedin(JSON.parse(userSession)));

      const isUserOnboarded = await AsyncStorage.getItem('@isUserOnboarded');
      if (isUserOnboarded) {
        setTimeout(() => navigation.replace('Dashboard'), 2000);
      } else {
        setTimeout(() => navigation.replace('OnBoarding'), 2000);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container isTransparentStatusBar={false}>
      <StatusBar backgroundColor={Colors.secondary} barStyle="light-content" />
      <View style={styles.backgroundContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <ActivityIndicator
        size={'large'}
        color={Colors.primary}
        style={styles.marginBottom20}
      />
    </Container>
  );
};
