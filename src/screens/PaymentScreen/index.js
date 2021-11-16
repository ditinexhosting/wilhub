import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  StatusBar,
} from 'react-native';
import style from './style';
import {background} from 'src/assets';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme, useLanguage} from 'src/hooks';
import {Container} from 'src/components';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

export default ({navigation}) => {
  const [Colors, styles] = useTheme(style);
  const translate = useLanguage().t;

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Account');
    }, 2000);
  }, []);
  return (
    <Container isTransparentStatusBar={false}>
      <ImageBackground source={background} style={styles.background} />
      <StatusBar backgroundColor={Colors.secondary} barStyle="light-content" />

      <View style={styles.container}>
        <Text style={styles.thankyou}>Thank You!</Text>
        <Text style={styles.textStyle}>Your Payment is Successfully Done</Text>
      </View>
    </Container>
  );
};
