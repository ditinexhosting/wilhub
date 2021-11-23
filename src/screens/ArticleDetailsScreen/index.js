import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  StatusBar,
} from 'react-native';
import style from './style';
import {background} from 'src/assets';
import {useTheme, useLanguage} from 'src/hooks';
import {Container} from 'src/components';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ({route, navigation}) => {
  const {title, headerImg, content} = route.params;
  const [Colors, styles] = useTheme(style);
  const translate = useLanguage().t;

  const AppHeader = () => {
    return (
      <>
        <View style={styles.headerBar}>
          <Image
            source={{
              uri: headerImg,
            }}
            style={styles.headerImageView}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={styles.backButton}>
          <Icon name={'chevron-left'} size={20} color={Colors.gray_dark} />
        </TouchableOpacity>
        <View style={styles.mainHeaderTitle}>
          <Text
            style={styles.courseHeaderTitle}
            ellipsizeMode={'tail'}
            numberOfLines={2}>
            {title}
          </Text>
        </View>
      </>
    );
  };

  return (
    <Container isTransparentStatusBar={false}>
      <ImageBackground source={background} style={styles.background} />
      <StatusBar backgroundColor={Colors.secondary} barStyle="light-content" />

      {/* App Header */}
      {AppHeader(title)}
      <ScrollView style={styles.container}>
        <Text style={styles.contentTextStyle}>{content}</Text>
      </ScrollView>
    </Container>
  );
};
