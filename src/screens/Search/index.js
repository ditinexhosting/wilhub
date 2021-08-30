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
} from 'react-native';
import style from './style';
import Config, { API_STORAGE } from 'src/config';
import {
  background,
  course_icon_background_white,
  course_icon_background_blue,
  course1,
  course3,
} from 'src/assets';
import API from 'src/services/api';
import * as ACTION from 'src/reduxData/action';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme, useLanguage } from 'src/hooks';
import { Container } from 'src/components';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

export default ({ navigation }) => {
  const [Colors, styles] = useTheme(style);
  const translate = useLanguage().t;
  const dispatch = useDispatch();
  const sessionReducer = useSelector(state => state.sessionReducer);
  const [courseList, setCourseList] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [searchQuery, setSearchQuery] = useState();

  useEffect(() => {
    getCourses()
  }, [])

  const getCourses = async () => {
    dispatch(ACTION.loadingStarted())
    const response = await API.getCourses()
    dispatch(ACTION.loadingCompleted())
    if (response.status) {
      setCourseList(response.data.categorylist)
    }
  }

  const renderItem = ({item}) => {
    console.log(item)
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard_Courses_Details', { id: item.id, title: item.title })} style={[styles.flex1, styles.paddingHorizontal10, styles.alignCenter]}>
        <ImageBackground
          source={course_icon_background_blue}
          style={styles.iconBackground}
        >
          <Image source={{ uri: API_STORAGE + item.image }} style={styles.iconCourse} />
        </ImageBackground>
        <Text numberOfLines={2} style={styles.courseText}>{item.title}</Text>
      </TouchableOpacity>
    )
  }

  const onSearch = (text) => {
    setSearchQuery(text)
    if (text.length > 2) {
      const temp = courseList.filter(item => item.title.includes(text))
      setSearchResult(temp)
    }
    else {
      setSearchResult([])
    }
  }


  return (
    <Container isTransparentStatusBar={false}>
      <ImageBackground source={background} style={styles.background} />
      <LinearGradient
        colors={[Colors.primary, Colors.secondary]}
        style={styles.headerBar}>
        <View style={[styles.flexRow, styles.centerAll]}>
          <Text style={styles.headerText}>{translate('search')}</Text>
        </View>
        <View style={styles.searchHolder}>
          <TextInput
            style={styles.searchInput}
            onChangeText={onSearch}
            value={searchQuery}
            placeholder={translate('search_placeholder')}
          />
        </View>
      </LinearGradient>
      <FlatList
        data={searchResult}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        numColumns={2}
      />
    </Container>
  );
};
