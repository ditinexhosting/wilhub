import React, {useState, useEffect, useRef} from 'react';
import {
  View,
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
import {WebView} from 'react-native-webview';
import * as ACTION from 'src/reduxData/action';
import API from 'src/services/api';

export default ({route, navigation}) => {
  useEffect(() => {
    getData();
  }, []);

  const {headerTitle} = route.params;

  const [Colors, styles] = useTheme(style);
  const translate = useLanguage().t;
  const dispatch = useDispatch();
  const userSession = useSelector(state => state.sessionReducer.userSession);
  const userId = userSession?.id;

  const [classIndex, setClassIndex] = useState(1);
  const [allVideo, setAllVideo] = useState([]);
  const [modalVideo, setModalVideo] = useState('');

  const updateClassData = index => {
    setModalVideo(allVideo[index]);
    setClassIndex(index + 1);
  };

  useEffect(() => {
    setModalVideo(allVideo[0]);
  }, [allVideo]);

  const getData = async () => {
    dispatch(ACTION.loadingStarted());
    const response = await API.classApi(userId, 1, 'islamic', 'studies');
    dispatch(ACTION.loadingCompleted());

    if (response.status) {
      let videoIdArray = [];
      response?.data?.videos[0]?.map(item => {
        const videoId = item?.video_name?.replace('watch?v=', 'embed/');
        videoIdArray.push(videoId);
      });
      setAllVideo(videoIdArray);
    }
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
              {item?.title}
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
      {allVideo[0] !== null && (
        <WebView
          containerStyle={styles.videoView}
          originWhitelist={['*']}
          source={{
            uri: modalVideo,
          }}
        />
      )}

      <View style={styles.videoBottomView}>
        <Text style={styles.topClassHeaderTxt}>{`Class ${classIndex}`}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={styles.topDescText}
            ellipsizeMode={'tail'}
            numberOfLines={2}></Text>
        </View>
      </View>
      <FlatList
        data={allVideo}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingBottom: 50}}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};
