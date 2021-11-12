import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
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
import {videoCameraIcon, computerIcon} from 'src/assets';

export default ({route, navigation}) => {
  const {title} = route.params;
  const [Colors, styles] = useTheme(style);
  const translate = useLanguage().t;

  return (
    <Container isTransparentStatusBar={false}>
      <ImageBackground source={background} style={styles.background} />
      <StatusBar backgroundColor={Colors.secondary} barStyle="light-content" />
      <LinearGradient
        colors={[Colors.secondary, Colors.primary]}
        style={styles.headerBar}>
        <View
          style={[styles.flexRow, styles.centerAll, {paddingHorizontal: 40}]}>
          <View style={styles.backButton}>
            <TouchableOpacity onPress={() => navigation.pop()}>
              <Icon name={'chevron-left'} size={20} color={Colors.white} />
            </TouchableOpacity>
          </View>
          {/* <Text style={styles.headerText}>{title}</Text> */}
          <Text
            style={styles.headerText}
            ellipsizeMode={'tail'}
            numberOfLines={2}>
            {title}
          </Text>
        </View>
      </LinearGradient>
      <View style={styles.container}>
        <TouchableOpacity style={styles.cardView}>
          <Image source={videoCameraIcon} style={styles.cardViewImg} />
          <Text style={styles.titleText}>View Live Session</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardView}
          onPress={() => navigation.navigate('ViewRecordedScreen')}>
          <Image source={computerIcon} style={styles.cardViewImg} />
          <Text style={styles.titleText}>View Recorded Session</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};
