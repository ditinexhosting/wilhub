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
import Config, {API_STORAGE} from 'src/config';
import {
  background,
  course_icon_background_white,
  course_icon_background_blue,
  course1,
  course3,
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
  const [courseList,setCourseList] = useState([])


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
          <Text style={styles.headerText}>{translate('course_title')}</Text>
        </View>
      </LinearGradient>
      <ScrollView>
        {/*<Text style={styles.courseTitle}>{translate('upcoming_courses')}</Text>
        <View style={[styles.flexRow, styles.centerAll]}>
          <TouchableOpacity>
            <Image
              source={course_icon_background_blue}
              style={styles.iconBackground}
            />
            <Image source={course1} style={styles.iconCourse} />
            <Text style={styles.courseText}>Course1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={course_icon_background_blue}
              style={styles.iconBackground}
            />
            <Image source={course1} style={styles.iconCourse} />
            <Text style={styles.courseText}>Course1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={course_icon_background_blue}
              style={styles.iconBackground}
            />
            <Image source={course3} style={styles.iconCourse} />
            <Text style={styles.courseText}>Course1</Text>
          </TouchableOpacity>
        </View>*/}



        <Text style={styles.courseTitle}>{translate('most_popular')}</Text>
        {courseList.length > 0 ? <View style={[styles.flexRow, styles.justifyCenter]}>
          <TouchableOpacity onPress={()=>setModalVideo(VIDEOS['new'][0])} style={[styles.flex1,styles.paddingHorizontal10, styles.alignCenter]}>
            <ImageBackground
              source={course_icon_background_blue}
              style={styles.iconBackground}
            >
              <Image source={{uri: API_STORAGE+courseList[0].image}} style={styles.iconCourse} />
            </ImageBackground>
            <Text numberOfLines={2} style={styles.courseText}>{courseList[0].title}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setModalVideo(VIDEOS['new'][1])} style={[styles.flex1,styles.paddingHorizontal10, styles.alignCenter]}>
            <ImageBackground
              source={course_icon_background_blue}
              style={styles.iconBackground}
            >
              <Image source={{uri: API_STORAGE+courseList[1].image}} style={styles.iconCourse} />
            </ImageBackground>
            <Text numberOfLines={2} style={styles.courseText}>{courseList[1].title}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setModalVideo(VIDEOS['new'][1])} style={[styles.flex1,styles.paddingHorizontal10, styles.alignCenter]}>
            <ImageBackground
              source={course_icon_background_blue}
              style={styles.iconBackground}
            >
              <Image source={{uri: API_STORAGE+courseList[2].image}} style={styles.iconCourse} />
            </ImageBackground>
            <Text numberOfLines={2} style={styles.courseText}>{courseList[2].title}</Text>
          </TouchableOpacity>
        </View>:<View></View>}


        <Text style={styles.courseTitle}>{translate('most_viewed')}</Text>
        {courseList.length > 0 ? <View style={[styles.flexRow, styles.justifyCenter]}>
          <TouchableOpacity onPress={()=>setModalVideo(VIDEOS['new'][0])} style={[styles.flex1,styles.paddingHorizontal10, styles.alignCenter]}>
            <ImageBackground
              source={course_icon_background_blue}
              style={styles.iconBackground}
            >
              <Image source={{uri: API_STORAGE+courseList[0].image}} style={styles.iconCourse} />
            </ImageBackground>
            <Text numberOfLines={2} style={styles.courseText}>{courseList[0].title}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setModalVideo(VIDEOS['new'][1])} style={[styles.flex1,styles.paddingHorizontal10, styles.alignCenter]}>
            <ImageBackground
              source={course_icon_background_blue}
              style={styles.iconBackground}
            >
              <Image source={{uri: API_STORAGE+courseList[1].image}} style={styles.iconCourse} />
            </ImageBackground>
            <Text numberOfLines={2} style={styles.courseText}>{courseList[1].title}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setModalVideo(VIDEOS['new'][1])} style={[styles.flex1,styles.paddingHorizontal10, styles.alignCenter]}>
            <ImageBackground
              source={course_icon_background_blue}
              style={styles.iconBackground}
            >
              <Image source={{uri: API_STORAGE+courseList[2].image}} style={styles.iconCourse} />
            </ImageBackground>
            <Text numberOfLines={2} style={styles.courseText}>{courseList[2].title}</Text>
          </TouchableOpacity>
        </View>:<View></View>}
      </ScrollView>
    </Container>
  );
};
