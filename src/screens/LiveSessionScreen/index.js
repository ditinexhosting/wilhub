import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  StatusBar,
  Linking,
} from 'react-native';
import style from './style';
import {background} from 'src/assets';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme, useLanguage} from 'src/hooks';
import {Container} from 'src/components';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import * as ACTION from 'src/reduxData/action';
import API from 'src/services/api';
import {identifier} from '@babel/types';

export default ({navigation}) => {
  const [Colors, styles] = useTheme(style);
  const translate = useLanguage().t;
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const userSession = useSelector(state => state.sessionReducer.userSession);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    dispatch(ACTION.loadingStarted());
    const response = await API.zoomMetingLink(userSession?.id);
    dispatch(ACTION.loadingCompleted());

    let newArray = [];
    if (response.status) {
      response?.data?.live.map(item => {
        item.map(newItem => {
          newArray.push(newItem);
        });
      });
    }
    setData(newArray);
  };
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.cardView}
        onPress={() => Linking.openURL(item?.join_url)}>
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
          <Text style={styles.headerText}>{translate('Live session')}</Text>
        </View>
      </LinearGradient>
      <View style={styles.listViewStyle}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
          contentContainerStyle={{paddingBottom: 160}}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Container>
  );
};
