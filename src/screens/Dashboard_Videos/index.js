import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  ImageBackground,
  Button,
  Linking
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
import { useDispatch, useSelector } from 'react-redux';
import { useTheme, useLanguage } from 'src/hooks';
import { Container } from 'src/components';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import Modal from "react-native-modal";
import { WebView } from 'react-native-webview';


const VIDEOS = {
  'trending': [
    { name: 'Learn Islamic Studies in Malayalam | Diploma in Islamic Studies | Wil Hub | Promo', link: 'https://youtu.be/TsHpNxQIrhI', id: 'TsHpNxQIrhI' },
    { name: 'Learn Parenting | Diploma in Parenting and Home Management | Wil Hub | Promo', link: 'https://www.youtube.com/watch?v=Y2SgZcpzPNw', id: 'Y2SgZcpzPNw' },
    { name: 'Huroof and Harakat | Arabic Alphabets | Learn Arabic in Malayalam with Usthad Anfal Bayani | Wil Hub', link: 'https://www.youtube.com/watch?v=vv5si8-DndA', id: 'vv5si8-DndA' }
  ],
  'new': [
    { name: 'Learn Islamic Studies in Malayalam | Diploma in Islamic Studies | Wil Hub | Promo', link: 'https://youtu.be/TsHpNxQIrhI', id: 'TsHpNxQIrhI' },
    { name: 'Learn Parenting | Diploma in Parenting and Home Management | Wil Hub | Promo', link: 'https://www.youtube.com/watch?v=Y2SgZcpzPNw', id: 'Y2SgZcpzPNw' }
  ],
  'lectures': [
    { name: 'Huroof and Harakat | Arabic Alphabets | Learn Arabic in Malayalam with Usthad Anfal Bayani | Wil Hub', link: 'https://www.youtube.com/watch?v=vv5si8-DndA', id: 'vv5si8-DndA' }
  ]
}

export default ({ navigation }) => {
  const [Colors, styles] = useTheme(style);
  const translate = useLanguage().t;
  const dispatch = useDispatch();
  const sessionReducer = useSelector(state => state.sessionReducer);
  const [modalVideo, setModalVideo] = useState(null)

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
        <View style={[styles.flexRow, styles.justifyCenter]}>
          <TouchableOpacity onPress={()=>setModalVideo(VIDEOS['trending'][0])} style={[styles.flex1,styles.paddingHorizontal10]}>
            <ImageBackground
              source={video_icon_background_blue}
              style={styles.iconBackground}
            >
              <Image source={video1} style={styles.iconvideo} />
            </ImageBackground>
            <Text numberOfLines={2} style={styles.videoText}>{VIDEOS['trending'][0].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setModalVideo(VIDEOS['trending'][1])} style={[styles.flex1,styles.paddingHorizontal10]}>
            <ImageBackground
              source={video_icon_background_blue}
              style={styles.iconBackground}
            >
              <Image source={video2} style={styles.iconvideo} />
            </ImageBackground>
            <Text numberOfLines={2} style={styles.videoText}>{VIDEOS['trending'][1].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setModalVideo(VIDEOS['trending'][2])} style={[styles.flex1,styles.paddingHorizontal10]}>
            <ImageBackground
              source={video_icon_background_blue}
              style={styles.iconBackground}
            >
              <Image source={video3} style={styles.iconvideo} />
            </ImageBackground>
            <Text numberOfLines={2} style={styles.videoText}>{VIDEOS['trending'][2].name}</Text>
          </TouchableOpacity>
        </View>




        <Text style={styles.videoTitle}>{translate('new_videos')}</Text>
        <View style={[styles.flexRow, styles.justifyCenter]}>
          <TouchableOpacity onPress={()=>setModalVideo(VIDEOS['new'][0])} style={[styles.flex1,styles.paddingHorizontal10, styles.alignCenter]}>
            <ImageBackground
              source={video_icon_background_blue}
              style={styles.iconBackground}
            >
              <Image source={video1} style={styles.iconvideo} />
            </ImageBackground>
            <Text numberOfLines={2} style={styles.videoText}>{VIDEOS['new'][0].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setModalVideo(VIDEOS['new'][1])} style={[styles.flex1,styles.paddingHorizontal10, styles.alignCenter]}>
            <ImageBackground
              source={video_icon_background_blue}
              style={styles.iconBackground}
            >
              <Image source={video2} style={styles.iconvideo} />
            </ImageBackground>
            <Text numberOfLines={2} style={styles.videoText}>{VIDEOS['new'][1].name}</Text>
          </TouchableOpacity>
        </View>


        
        <Text style={styles.videoTitle}>{translate('video_lectures')}</Text>
        <View style={[styles.flexRow, styles.justifyCenter]}>
          <TouchableOpacity onPress={()=>setModalVideo(VIDEOS['lectures'][0])} style={[styles.flex1,styles.paddingHorizontal10, styles.alignCenter]}>
            <ImageBackground
              source={video_icon_background_blue}
              style={styles.iconBackground}
            >
              <Image source={video1} style={styles.iconvideo} />
            </ImageBackground>
            <Text numberOfLines={2} style={styles.videoText}>{VIDEOS['new'][0].name}</Text>
          </TouchableOpacity>
        </View>



        <Text style={styles.videoTitle}>{translate('library')}</Text>
        <View style={[styles.flexRow, styles.justifyCenter]}>
          <TouchableOpacity onPress={()=>setModalVideo(VIDEOS['trending'][0])} style={[styles.flex1,styles.paddingHorizontal10]}>
            <ImageBackground
              source={video_icon_background_blue}
              style={styles.iconBackground}
            >
              <Image source={video1} style={styles.iconvideo} />
            </ImageBackground>
            <Text numberOfLines={2} style={styles.videoText}>{VIDEOS['trending'][0].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setModalVideo(VIDEOS['trending'][1])} style={[styles.flex1,styles.paddingHorizontal10]}>
            <ImageBackground
              source={video_icon_background_blue}
              style={styles.iconBackground}
            >
              <Image source={video2} style={styles.iconvideo} />
            </ImageBackground>
            <Text numberOfLines={2} style={styles.videoText}>{VIDEOS['trending'][1].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setModalVideo(VIDEOS['trending'][2])} style={[styles.flex1,styles.paddingHorizontal10]}>
            <ImageBackground
              source={video_icon_background_blue}
              style={styles.iconBackground}
            >
              <Image source={video3} style={styles.iconvideo} />
            </ImageBackground>
            <Text numberOfLines={2} style={styles.videoText}>{VIDEOS['trending'][2].name}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.marginBottom20}></View>
      </ScrollView>
      <Modal 
      backdropOpacity={1}
      isVisible={modalVideo ? true : false}
      onBackButtonPress={()=>setModalVideo(null)}
      onBackdropPress={()=>setModalVideo(null)}
      >
        {modalVideo ? <View style={[styles.flex1,styles.centerAll]}>
          <WebView
            containerStyle={{ flex: 0, height: 250,width: 340}}
            originWhitelist={['*']}
            source={{ uri: 'https://www.youtube.com/embed/'+modalVideo['id']+'?autoplay=1&controls=1&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://wilhub.com' }}
          />
          <View style={[styles.flexRow,styles.marginTop30]}>
          <Button onPress={()=>setModalVideo(null)}  title="Go Back"  color={Colors.primary}  accessibilityLabel="Go Back"/>
            <View style={styles.marginRight20}></View>
          <Button onPress={()=>Linking.openURL(modalVideo['link'])}  title="Open In Youtube"  color={Colors.primary} accessibilityLabel="Open In Youtube"/>
          </View>
        </View> : <View></View>}
      </Modal>
    </Container>
  );
};
