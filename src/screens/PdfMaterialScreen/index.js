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
import {pdfIcon} from 'src/assets';

export default ({navigation, route}) => {
  const {headerTitle} = route.params;

  const [Colors, styles] = useTheme(style);
  const translate = useLanguage().t;

  const data = [
    {
      id: 1,
      title: 'Study Material 1',
    },
    {
      id: 2,
      title: 'Study Material 2',
    },
    {
      id: 3,
      title: 'Study Material 3',
    },
    {
      id: 4,
      title: 'Study Material 4',
    },
    {
      id: 5,
      title: 'Study Material 5',
    },
    {
      id: 6,
      title: 'Study Material 6',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <LinearGradient
          colors={[Colors.secondary, Colors.primary]}
          style={styles.cardView}>
          <Image source={pdfIcon} style={styles.cardViewImg} />
        </LinearGradient>
        <Text style={styles.cardViewTitle}>{item?.title}</Text>
      </TouchableOpacity>
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
      <View style={styles.listViewStyle}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingBottom: 160}}
          showsVerticalScrollIndicator={false}
          numColumns="3"
          columnWrapperStyle={{justifyContent: 'space-between'}}
        />
      </View>
    </Container>
  );
};
