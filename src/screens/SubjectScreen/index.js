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
  const {index} = route.params;
  const [Colors, styles] = useTheme(style);
  const translate = useLanguage().t;
  const [modalVideo, setModalVideo] = useState(null);

  const VIDEOS = [
    {
      name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text',
      link: 'https://youtu.be/TsHpNxQIrhI',
      id: 1,
    },
    {
      name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text',
      link: 'https://youtu.be/TsHpNxQIrhI',
      id: 2,
    },
    {
      name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text',
      link: 'https://youtu.be/TsHpNxQIrhI',
      id: 3,
    },
    {
      name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text',
      link: 'https://youtu.be/TsHpNxQIrhI',
      id: 4,
    },
    {
      name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text',
      link: 'https://youtu.be/TsHpNxQIrhI',
      id: 5,
    },
    {
      name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text',
      link: 'https://youtu.be/TsHpNxQIrhI',
      id: 6,
    },
    {
      name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text',
      link: 'https://youtu.be/TsHpNxQIrhI',
      id: 7,
    },
    {
      name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text',
      link: 'https://youtu.be/TsHpNxQIrhI',
      id: 8,
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          height: 100,
          width: '100%',
          justifyContent: 'center',
          borderBottomWidth: 2,
          borderBottomColor: Colors.primary,
          paddingHorizontal: 22,
        }}>
        <View
          style={{flexDirection: 'row', width: '100%', alignItems: 'center'}}>
          <View
            style={{
              width: 100,
              height: 60,
              backgroundColor: Colors.primary,
              borderRadius: 8,
              width: '30%',
            }}></View>
          <View style={{paddingHorizontal: 10, width: '70%'}}>
            <Text
              style={{
                color: Colors.primary,
                fontSize: 17,
                fontWeight: '600',
              }}>{`Class ${index + 1}`}</Text>
            <Text style={{fontSize: 10}}>{item?.name}</Text>
          </View>
        </View>
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
          <Text style={styles.headerText}>{`Subject ${index}`}</Text>
        </View>
      </LinearGradient>
      <WebView
        containerStyle={styles.videoView}
        originWhitelist={['*']}
        source={{
          uri:
            'https://www.youtube.com/embed/' +
            'TsHpNxQIrhI' +
            '?autoplay=1&controls=1&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://wilhub.com',
        }}
      />
      <View style={styles.videoBottomView}>
        <Text style={{color: Colors.primary, fontSize: 17, fontWeight: '600'}}>
          Class 1
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: Colors.primary, fontSize: 10, marginRight: 20}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </Text>
          <Icon name={'chevron-down'} size={20} color={Colors.gray_dark} />
        </View>
      </View>
      {/* <View style={styles.listViewStyle}> */}
      <FlatList
        data={VIDEOS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingBottom: 50}}
        showsVerticalScrollIndicator={false}
      />
      {/* </View> */}
    </Container>
  );
};
