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
import data from './data';
import subject from './subject';

export default ({route, navigation}) => {
  const {title} = route.params;

  const [Colors, styles] = useTheme(style);
  const translate = useLanguage().t;

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.cardView}
        onPress={() =>
          navigation.navigate('AllSubjectScreen', {
            headerTitle: item?.title,
            subject: subject,
            cardName: 'STUDYMATERIAL',
          })
        }>
        <Text style={styles.cardViewText}>{item?.title}</Text>
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
          <Text style={styles.headerText}>
            <Text style={styles.headerText}>Study Material</Text>
          </Text>
        </View>
        <View style={[styles.centerAll]}>
          <Text
            style={styles.headerTitleText}
            ellipsizeMode={'tail'}
            numberOfLines={2}>
            {title.toUpperCase()}
          </Text>
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
