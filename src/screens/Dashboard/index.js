import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  TouchableWithoutFeedback
} from 'react-native';
import style from './style';
import Config from 'src/config';
import {
  logo_white,
  background,
  about,
  courses,
  research,
  videos,
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
  const [searchQuery, setSearchQuery] = useState();

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: translate('dashboard_item_title_1'),
      image: about,
      navigating_to: 'About',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: translate('dashboard_item_title_2'),
      image: courses,
      navigating_to: 'Courses',
    },
    /*{
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: translate('dashboard_item_title_3'),
      image: research,
      navigating_to: 'Research',
    },*/
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d73',
      title: translate('dashboard_item_title_4'),
      image: videos,
      navigating_to: 'Videos',
    },
  ];

  useEffect(() => {}, []);

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={[styles.flex1, styles.centerAll]}
        onPress={() => navigation.navigate(item.navigating_to)}>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <Container isTransparentStatusBar={false}>
      <Image source={background} style={styles.background} />
      <LinearGradient
        colors={[Colors.primary, Colors.secondary]}
        style={styles.headerBar}>
        <Image source={logo_white} style={styles.logo} />
        <View style={[styles.flexRow, styles.centerAll]}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Icon2 name={'menu'} size={60} color={Colors.white} />
          </TouchableOpacity>
          <View style={styles.searchHolder}>
            <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Search')}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setSearchQuery(text)}
              value={searchQuery}
              editable={false}
              placeholder={translate('search_placeholder')}
            />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        ListHeaderComponent={<View style={styles.marginTop30}></View>}
        ListFooterComponent={<View style={styles.marginBottom100}></View>}
      />
    </Container>
  );
};
