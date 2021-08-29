import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  ImageBackground,
  Linking,
  Alert
} from 'react-native';
import style from './style';
import Config, { API_STORAGE } from 'src/config';
import {
  background
} from 'src/assets';
import API from 'src/services/api';
import * as ACTION from 'src/reduxData/action';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme, useLanguage } from 'src/hooks';
import { Container } from 'src/components';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import { WebView } from 'react-native-webview';
import html1 from './1.js'
import html2 from './2.js'
import html3 from './3.js'
import Modal from "react-native-modal";

export default ({ route, navigation }) => {
  const { id, title } = route.params
  const [Colors, styles] = useTheme(style);
  const translate = useLanguage().t;
  const dispatch = useDispatch();
  const sessionReducer = useSelector(state => state.sessionReducer);
  const [courseDetails, setCourseDetails] = useState('<h1>Loading ...</h1>')
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    getCourseDetails()
  }, [])

  const getCourseDetails = async () => {
    if (id === 1)
      setCourseDetails(html1)
    else if (id === 2)
      setCourseDetails(html2)
    else if (id === 3)
      setCourseDetails(html3)
  }

  const downloadPdf = () => {
    const pdfLink = 'https://wilhub.com/api/v1/courses/pdf/' + id
    Linking.openURL(pdfLink)
  }

  const admissionAlert = () =>
    Alert.alert(
      "Admission",
      "Admission will open soon.",
      [
        { text: "OK", onPress: () => null }
      ]
    )

  return (
    <Container isTransparentStatusBar={false}>
      <ImageBackground source={background} style={styles.background} />
      <LinearGradient
        colors={[Colors.primary, Colors.secondary]}
        style={styles.headerBar}>
        <View style={[styles.flexRow, styles.centerAll]}>
          <View
            style={styles.backButton}
          >
            <TouchableOpacity onPress={() => navigation.pop()}>
              <Icon name={'chevron-left'} size={20} color={Colors.white} />
            </TouchableOpacity>
          </View>
          <Text numberOfLines={2} style={styles.headerText}>{title}</Text>
        </View>
      </LinearGradient>
      <View style={[styles.flexRow, styles.spaceAround, styles.marginVertical10]}>
        <TouchableOpacity onPress={() => admissionAlert()} style={styles.button}>
          <Text style={styles.buttonText}>APPLY NOW</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => admissionAlert()} style={styles.button}>
          <Text style={styles.buttonText}>REQUEST CALLBACK</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.flexRow, styles.spaceAround, styles.marginBottom10]}>
        <TouchableOpacity onPress={() => downloadPdf()} style={styles.button2}>
          <Text style={styles.buttonText}> Download Brochure in Malayalam </Text>
        </TouchableOpacity>
      </View>
      <WebView
        containerStyle={{ borderRadius: 20, marginBottom: 5 }}
        originWhitelist={['*']}
        source={{ html: courseDetails }}
      />
      <Modal
        isVisible={showModal}
        onBackButtonPress={() => setShowModal(false)}
        onBackdropPress={() => setShowModal(false)}
      >
        <View style={[styles.flex1, styles.centerAll]}>

        </View>
      </Modal>
    </Container>
  );
};
