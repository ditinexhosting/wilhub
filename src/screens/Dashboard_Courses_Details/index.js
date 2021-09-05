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
  Alert,
  PermissionsAndroid
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
import RNFetchBlob from 'rn-fetch-blob';
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

  const checkPermission = async () => {
    if (Platform.OS === 'ios') {
      downloadFile();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message:
              'Application needs access to your storage to download File',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Start downloading
          downloadFile();
          console.log('Storage Permission Granted.');
        } else {
          // If permission denied then show alert
          Alert.alert('Error', 'Storage Permission Not Granted');
        }
      } catch (err) {
        // To handle permission related exception
        console.log("++++" + err);
      }
    }
  }

  const downloadFile = () => {
    let date = new Date();
    let FILE_URL = 'https://wilhub.com/api/v1/courses/pdf/' + id;    
    let file_ext = '.pdf';
   
    const { config, fs } = RNFetchBlob;
    let RootDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        path:
          RootDir+
          '/file_' + 
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          file_ext,
        description: 'downloading file...',
        notification: true,
        // useDownloadManager works with Android only
        useDownloadManager: true,   
      },
    };
    config(options)
      .fetch('GET', FILE_URL)
      .then(res => {
        // Alert after successful downloading
        console.log('res -> ', JSON.stringify(res));
        //alert('File Downloaded Successfully.');
      });
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
        <TouchableOpacity onPress={() => downloadFile()} style={styles.button2}>
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
