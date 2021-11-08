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

  const data = [
    {
      id: 1,
      imgUrl: require('../../assets/images/courseDetailsHeader.jpg'),
    },
    {
      id: 2,
      imgUrl: require('../../assets/images/courseDetailsHeader.jpg'),
    },
    {
      id: 3,
      imgUrl: require('../../assets/images/courseDetailsHeader.jpg'),
    },
    {
      id: 4,
      imgUrl: require('../../assets/images/courseDetailsHeader.jpg'),
    },
    {
      id: 5,
      imgUrl: require('../../assets/images/courseDetailsHeader.jpg'),
    },
    {
      id: 6,
      imgUrl: require('../../assets/images/courseDetailsHeader.jpg'),
    },
    {
      id: 7,
      imgUrl: require('../../assets/images/courseDetailsHeader.jpg'),
    },
  ];
  const renderItem = ({item}) => {
    return <Image source={item?.imgUrl} style={styles.imagesCardView} />;
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
          <Text style={styles.headerText}>{translate('Gallery')}</Text>
        </View>
      </LinearGradient>
      <View style={styles.listViewStyle}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingBottom: 160}}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Container>
  );
};
