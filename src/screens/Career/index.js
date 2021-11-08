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
      jobTitle: 'Job Vacancy 1',
      jobDesc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
    },
    {
      jobTitle: 'Job Vacancy 2',
      jobDesc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
    },
    {
      jobTitle: 'Job Vacancy 3',
      jobDesc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
    },
    {
      jobTitle: 'Job Vacancy 4',
      jobDesc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
    },
    {
      jobTitle: 'Job Vacancy 5',
      jobDesc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.cardView}>
        <View style={styles.cardTopView}>
          <Text style={styles.cardHeadingTitle}>{item?.jobTitle}</Text>
        </View>
        <View style={styles.cardCenterView}>
          <Text
            style={styles.cardDescText}
            ellipsizeMode={'tail'}
            numberOfLines={4}>
            {item?.jobDesc}
          </Text>
          <View style={styles.loadMoreView}>
            <TouchableOpacity style={styles.loadMoreBtn}>
              <Text style={styles.loadMoreText}>Load more</Text>
              <Icon name={'chevron-down'} size={8} color={Colors.gray_dark} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cardBottomView}>
          <TouchableOpacity
            style={styles.applyBtnView}
            onPress={() => navigation.navigate('ApplyScreen')}>
            <Text style={styles.applyTextStytle}>Apply</Text>
          </TouchableOpacity>
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
          <Text style={styles.headerText}>{translate('Career')}</Text>
        </View>
      </LinearGradient>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/weAreHiring.png')}
          style={styles.weAreHiringImgView}
        />
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingBottom: 250}}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Container>
  );
};
