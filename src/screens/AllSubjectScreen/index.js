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

export default ({route, navigation}) => {
  const {headerTitle, subject, cardName} = route.params;
  const [Colors, styles] = useTheme(style);
  const translate = useLanguage().t;

  const getNextScreen = (cardName, title) => {
    if (cardName === 'CLASS') {
      navigation.navigate('SubjectScreen', {
        headerTitle: title,
      });
    } else if (cardName === 'STUDYMATERIAL') {
      navigation.navigate('PdfMaterialScreen', {
        headerTitle: title,
      });
    } else if (cardName === 'LIBRARY') {
      navigation.navigate('PdfMaterialScreen', {
        headerTitle: title,
      });
    }
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.cardView}
        onPress={() => getNextScreen(cardName, item?.title)}>
        <Text style={styles.cardViewText}>{item?.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <Container isTransparentStatusBar={false}>
      <Image source={background} style={styles.background} />
      <StatusBar backgroundColor={Colors.secondary} barStyle="light-content" />
      <LinearGradient
        colors={[Colors.secondary, Colors.primary]}
        style={styles.headerBar}>
        <View
          style={[styles.flexRow, styles.centerAll, {paddingHorizontal: 40}]}>
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
          data={subject}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingBottom: 160}}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Container>
  );
};
