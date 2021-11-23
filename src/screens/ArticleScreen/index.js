import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  FlatList,
} from 'react-native';
import style from './style';
import {background} from 'src/assets';
import {useTheme, useLanguage} from 'src/hooks';
import {Container} from 'src/components';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import * as ACTION from 'src/reduxData/action';
import {API_URL} from '../../config/index';

export default ({navigation}) => {
  const [Colors, styles] = useTheme(style);
  const translate = useLanguage().t;
  const [blogData, setBlogData] = useState([]);

  const headerItem = blogData[0];
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    dispatch(ACTION.loadingStarted());
    axios.get(`${API_URL}/blog/{key}`).then(response => {
      dispatch(ACTION.loadingCompleted());
      setBlogData(response?.data?.items);
    });
  };

  const renderHeaderItem = ({item}) => {
    return (
      <ImageBackground
        style={styles.topCardView}
        imageStyle={{borderRadius: 15}}
        source={{
          uri: headerItem?.pic,
        }}>
        <TouchableOpacity
          style={styles.topCardViewBtnView}
          onPress={() =>
            navigation.navigate('ArticleDetailsScreen', {
              title: headerItem?.title,
              headerImg: headerItem?.pic,
              content: headerItem?.content,
            })
          }>
          <Icon name={'chevron-right'} size={20} color={Colors.gray_dark} />
        </TouchableOpacity>
        <View style={styles.darkLayeriew} />
        <Text
          style={styles.topCardViewTitle}
          ellipsizeMode={'tail'}
          numberOfLines={2}>
          {headerItem?.title}
        </Text>
      </ImageBackground>
    );
  };

  const renderItem = ({item}) => {
    return (
      <ImageBackground
        style={styles.eachCardView}
        imageStyle={styles.caechImageView}
        source={{
          uri: item?.pic,
        }}>
        <TouchableOpacity
          style={styles.eachCardViewBtnView}
          onPress={() =>
            navigation.navigate('ArticleDetailsScreen', {
              title: item?.title,
              headerImg: item?.pic,
              content: item?.content,
            })
          }>
          <Icon name={'chevron-right'} size={16} color={Colors.black} />
        </TouchableOpacity>
        <View style={styles.darkLayeriew} />
        <Text
          ellipsizeMode={'tail'}
          numberOfLines={3}
          style={styles.eachCardTitle}>
          {item?.title}
        </Text>
      </ImageBackground>
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
          <Text style={styles.headerText}>{translate('Blog')}</Text>
        </View>
      </LinearGradient>
      <View style={styles.container}>
        <FlatList
          data={blogData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={renderHeaderItem}
          numColumns="2"
          columnWrapperStyle={{justifyContent: 'space-between'}}
          contentContainerStyle={{paddingBottom: 160}}
        />
      </View>
    </Container>
  );
};
