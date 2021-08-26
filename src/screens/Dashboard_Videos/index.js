import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';
import style from './style';
import Config from 'src/config';
import {
  background,
  video_icon_background_white,
  video_icon_background_blue,
  video1,
  video2,
  video3,
} from 'src/assets';
import API from 'src/services/api';
import * as ACTION from 'src/reduxData/action';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme, useLanguage} from 'src/hooks';
import {Container} from 'src/components';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

export default ({navigation}) => {
  const [Colors, styles] = useTheme(style);
  const translate = useLanguage().t;
  const dispatch = useDispatch();
  const sessionReducer = useSelector(state => state.sessionReducer);
  return (
    <Container isTransparentStatusBar={false}>
      <ImageBackground source={background} style={styles.background} />
      <LinearGradient
        colors={[Colors.primary, Colors.secondary]}
        style={styles.headerBar}>
        <View style={[styles.flexRow, styles.centerAll]}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.pop()}>
            <Icon name={'chevron-left'} size={20} color={Colors.white} />
          </TouchableOpacity>
          <Text style={styles.headerText}>{translate('video_title')}</Text>
        </View>
      </LinearGradient>
      <ScrollView>
        <Text style={styles.videoTitle}>{translate('trending_videos')}</Text>
        <View style={[styles.flexRow, styles.centerAll]}>
          <TouchableOpacity>
            <Image
              source={video_icon_background_blue}
              style={styles.iconBackground}
            />
            <Image source={video1} style={styles.iconvideo} />
            <Text style={styles.videoText}>video1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={video_icon_background_blue}
              style={styles.iconBackground}
            />
            <Image source={video2} style={styles.iconvideo} />
            <Text style={styles.videoText}>video1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={video_icon_background_blue}
              style={styles.iconBackground}
            />
            <Image source={video3} style={styles.iconvideo} />
            <Text style={styles.videoText}>video1</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.videoTitle}>{translate('new_videos')}</Text>
        <View style={[styles.flexRow, styles.centerAll]}>
          <TouchableOpacity>
            <Image
              source={video_icon_background_blue}
              style={styles.iconBackground}
            />
            <Image source={video1} style={styles.iconvideo} />
            <Text style={styles.videoText}>video1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={video_icon_background_blue}
              style={styles.iconBackground}
            />
            <Image source={video2} style={styles.iconvideo} />
            <Text style={styles.videoText}>video1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={video_icon_background_blue}
              style={styles.iconBackground}
            />
            <Image source={video3} style={styles.iconvideo} />
            <Text style={styles.videoText}>video1</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.videoTitle}>{translate('video_lectures')}</Text>
        <View style={[styles.flexRow, styles.centerAll]}>
          <TouchableOpacity>
            <Image
              source={video_icon_background_blue}
              style={styles.iconBackground}
            />
            <Image source={video1} style={styles.iconvideo} />
            <Text style={styles.videoText}>video1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={video_icon_background_blue}
              style={styles.iconBackground}
            />
            <Image source={video2} style={styles.iconvideo} />
            <Text style={styles.videoText}>video1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={video_icon_background_blue}
              style={styles.iconBackground}
            />
            <Image source={video3} style={styles.iconvideo} />
            <Text style={styles.videoText}>video1</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.videoTitle}>{translate('library')}</Text>
        <View style={[styles.flexRow, styles.centerAll]}>
          <TouchableOpacity>
            <Image
              source={video_icon_background_blue}
              style={styles.iconBackground}
            />
            <Image source={video1} style={styles.iconvideo} />
            <Text style={styles.videoText}>video1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={video_icon_background_blue}
              style={styles.iconBackground}
            />
            <Image source={video2} style={styles.iconvideo} />
            <Text style={styles.videoText}>video1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={video_icon_background_blue}
              style={styles.iconBackground}
            />
            <Image source={video3} style={styles.iconvideo} />
            <Text style={styles.videoText}>video1</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Container>
  );
};
