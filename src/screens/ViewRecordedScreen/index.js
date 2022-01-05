import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';
import style from './style';
import Config from 'src/config';
import {
  logo_white,
  background,
  classIcon,
  activityIcon,
  studyMaterialsIcon,
  libraryIcon,
} from 'src/assets';
import API from 'src/services/api';
import * as ACTION from 'src/reduxData/action';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme, useLanguage} from 'src/hooks';
import {Container} from 'src/components';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

export default ({route, navigation}) => {
  const {title} = route.params;
  const [Colors, styles] = useTheme(style);
  const translate = useLanguage().t;
  const dispatch = useDispatch();
  const sessionReducer = useSelector(state => state.sessionReducer);
  const [searchQuery, setSearchQuery] = useState();

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: translate('Class'),
      image: classIcon,
      navigating_to: 'ClassScreen',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: translate('Activity'),
      image: activityIcon,
      navigating_to: 'ActivityScreen',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: translate('Study Materials'),
      image: studyMaterialsIcon,
      navigating_to: 'StudyMaterialScreen',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d73',
      title: translate('Library'),
      image: libraryIcon,
      navigating_to: 'LibraryScreen',
    },
  ];

  useEffect(() => {}, []);

  const itemClicked = navigating_to => {
    dispatch(ACTION.selectedRecordSession(navigating_to));
    navigation.navigate(navigating_to, {
      title: title,
    });
  };
  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={[styles.flex1, styles.centerAll]}
        onPress={() => itemClicked(item.navigating_to)}>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );

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
          <Text style={styles.headerText}>Recorded session</Text>
        </View>
      </LinearGradient>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        ListHeaderComponent={<View style={styles.marginTop50}></View>}
        ListFooterComponent={<View style={styles.marginBottom100}></View>}
      />
    </Container>
  );
};
