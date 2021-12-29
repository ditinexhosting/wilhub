import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  StatusBar,
  Button,
} from 'react-native';
import style from './style';
import {background} from 'src/assets';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme, useLanguage} from 'src/hooks';
import {Container} from 'src/components';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {WebView} from 'react-native-webview';

export default ({route, navigation}) => {
  const {headerTitle} = route.params;

  const [Colors, styles] = useTheme(style);
  const translate = useLanguage().t;
  const VIDEOS = [
    {
      name: 'Learn Islamic Studies in Malayalam | Diploma in Islamic Studies | Wil Hub | Promo efei fiewfiefejfhfejefhehjf ewh f  khffkjsdh fhsdfkjh sdkfhkdjshf sdfkdsfhdskfj hsdkhfksdzhfkdszhf',
      link: 'https://youtu.be/TsHpNxQIrhI',
      id: 'TsHpNxQIrhI',
    },
    {
      name: 'Learn Parenting | Diploma in Parenting and Home Management | Wil Hub | Promo',
      link: 'https://www.youtube.com/watch?v=Y2SgZcpzPNw',
      id: 'Y2SgZcpzPNw',
    },
    {
      name: 'Huroof and Harakat | Arabic Alphabets | Learn Arabic in Malayalam with Usthad Anfal Bayani | Wil Hub',
      link: 'https://www.youtube.com/watch?v=vv5si8-DndA',
      id: 'vv5si8-DndA',
    },
    {
      name: 'Learn Islamic Studies in Malayalam | Diploma in Islamic Studies | Wil Hub | Promo',
      link: 'https://youtu.be/TsHpNxQIrhI',
      id: 'TsHpNxQIrhI',
    },
    {
      name: 'Learn Parenting | Diploma in Parenting and Home Management | Wil Hub | Promo',
      link: 'https://www.youtube.com/watch?v=Y2SgZcpzPNw',
      id: 'Y2SgZcpzPNw',
    },
    {
      name: 'Huroof and Harakat | Arabic Alphabets | Learn Arabic in Malayalam with Usthad Anfal Bayani | Wil Hub',
      link: 'https://www.youtube.com/watch?v=vv5si8-DndA',
      id: 'vv5si8-DndA',
    },
  ];

  const [modalVideo, setModalVideo] = useState(VIDEOS[0]);
  const [classIndex, setClassIndex] = useState(1);
  const updateClassData = index => {
    setModalVideo(VIDEOS[index]);
    setClassIndex(index + 1);
  };
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          style={styles.itemInnerContainer}
          onPress={() => updateClassData(index)}>
          <View style={styles.leftSideView}></View>
          <View style={styles.rightSideView}>
            <Text style={styles.classTextStyle}>{`Class ${index + 1}`}</Text>
            <Text
              style={styles.descTextStyle}
              ellipsizeMode={'tail'}
              numberOfLines={3}>
              {item?.name}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
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
          <Text style={styles.headerText}>{headerTitle}</Text>
        </View>
      </LinearGradient>
      <WebView
        containerStyle={styles.videoView}
        originWhitelist={['*']}
        source={{
          uri:
            'https://www.youtube.com/embed/' +
            modalVideo?.id +
            '?autoplay=1&controls=1&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://wilhub.com',
        }}
      />
      <View style={styles.videoBottomView}>
        <Text style={styles.topClassHeaderTxt}>{`Class ${classIndex}`}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={styles.topDescText}
            ellipsizeMode={'tail'}
            numberOfLines={2}>
            {modalVideo?.name}
          </Text>
          {/* <Icon name={'chevron-down'} size={20} color={Colors.gray_dark} /> */}
        </View>
      </View>
      <FlatList
        data={VIDEOS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingBottom: 50}}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};
