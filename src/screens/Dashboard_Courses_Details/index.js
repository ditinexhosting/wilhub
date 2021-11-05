import React, {useState, useEffect, useRef} from 'react';
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
  PermissionsAndroid,
  StyleSheet,
} from 'react-native';
import style from './style';
import Config, {API_STORAGE} from 'src/config';
import {background} from 'src/assets';
import API from 'src/services/api';
import * as ACTION from 'src/reduxData/action';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme, useLanguage} from 'src/hooks';
import {Container} from 'src/components';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import RNFetchBlob from 'rn-fetch-blob';
import {WebView} from 'react-native-webview';
import html1 from './1.js';
import html2 from './2.js';
import html3 from './3.js';
import Modal from 'react-native-modal';
import RNPickerSelect from 'react-native-picker-select';
import {Toast} from 'src/components';

const pdfs = {
  1: 'https://wilhub.com//theme/documents/Diploma%20in%20Islamic%20Studies%20Malayalam.pdf',
  2: 'https://wilhub.com//theme/documents/Diploma%20in%20Parenting%20and%20Home%20Management.pdf',
  3: 'https://wilhub.com//theme/documents/Mawadha%20malayalam.pdf',
};

export default ({route, navigation}) => {
  const {id, title} = route.params;
  const [Colors, styles] = useTheme(style);
  const translate = useLanguage().t;
  const dispatch = useDispatch();
  const sessionReducer = useSelector(state => state.sessionReducer);
  const [courseDetails, setCourseDetails] = useState('<h1>Loading ...</h1>');
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    age: '',
    gender: '',
    dob: '',
    whtsapp: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    edu_board: '',
    edu_class: '',
    isla_edu: '',
    isla_board: '',
    isla_class: '',
  });

  useEffect(() => {
    getCourseDetails();
  }, []);

  const getCourseDetails = async () => {
    if (id === 1) setCourseDetails(html1);
    else if (id === 2) setCourseDetails(html2);
    else if (id === 3) setCourseDetails(html3);
  };

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
          },
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
        console.log('++++' + err);
      }
    }
  };

  const downloadFile = () => {
    let date = new Date();
    let FILE_URL = pdfs[id];
    let file_ext = '.pdf';

    const {config, fs} = RNFetchBlob;
    let RootDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      appendExt: 'pdf',
      addAndroidDownloads: {
        path:
          RootDir +
          '/file_' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          file_ext,
        description: 'downloading file...',
        notification: true,
        mime: 'application/pdf',
        // useDownloadManager works with Android only
        useDownloadManager: true,
      },
    };
    config(options)
      .fetch('GET', FILE_URL)
      .then(res => {
        // Alert after successful downloading
        //console.log('res -> ', JSON.stringify(res));
        console.log('The file saved to ', res.path());
        if (Platform.OS === 'ios') {
          RNFetchBlob.ios.openDocument(res.data);
        }
        //alert('File Downloaded Successfully.');
      })
      .catch(e => console.log(JSON.stringify(e)));
  };

  const applyCourse = async () => {
    const response = await API.callback(formData);
    setShowModal(false);
    if (!response.status || response.data == undefined)
      return Toast.show({type: 'error', message: response.error});
    return Toast.show({type: 'success', message: response.data.description});
  };

  const AppHeader = title => {
    return (
      <>
        <View style={styles.headerBar}>
          <Image
            source={require('../../assets/images/courseDetailsHeader.jpg')}
            style={styles.headerImageView}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={styles.backButton}>
          <Icon name={'chevron-left'} size={20} color={Colors.white} />
        </TouchableOpacity>
        <View style={styles.headerTitle}>
          <Text style={styles.topHeaderText}>{translate('Courses')}</Text>
          <View style={styles.mainHeaderTitle}>
            <Text
              style={styles.courseHeaderTitle}
              ellipsizeMode={'tail'}
              numberOfLines={2}>
              {title}
            </Text>
          </View>
        </View>
      </>
    );
  };

  return (
    <Container isTransparentStatusBar={false}>
      <ImageBackground source={background} style={styles.background} />

      {/* App Header */}
      {AppHeader(title)}

      <View style={styles.container}>
        {/* Top text view*/}
        <View style={styles.topContainer}>
          <ScrollView>
            <Text style={{textAlign: 'center', marginTop: 10}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic
            </Text>
          </ScrollView>
        </View>

        {/* Bottm button view*/}
        <View style={styles.bottomContainer}>
          <LinearGradient
            colors={[Colors.secondary, Colors.primary]}
            style={styles.loginButton}>
            <View>
              <TouchableOpacity
                onPress={() => setShowModal(true)}
                style={styles.button}>
                <Text style={styles.buttonText}>REQUEST CALLBACK</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>

          <LinearGradient
            colors={[Colors.secondary, Colors.primary]}
            style={styles.loginButton}>
            <View>
              <TouchableOpacity
                onPress={() => applyCourse()}
                style={styles.button2}>
                <Text style={styles.buttonText}> Apply</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </View>

      {/* <TouchableOpacity
          onPress={() => admissionAlert()}
          style={styles.button}>
          <Text style={styles.buttonText}>APPLY NOW</Text>
        </TouchableOpacity> */}
      {/* <View
        style={[styles.flexRow, styles.spaceAround, styles.marginVertical10]}>
        <TouchableOpacity
          onPress={() => setShowModal(true)}
          style={styles.button}>
          <Text style={styles.buttonText}>REQUEST CALLBACK</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.flexRow, styles.spaceAround, styles.marginBottom10]}>
        <TouchableOpacity
          onPress={() => checkPermission()}
          style={styles.button2}>
          <Text style={styles.buttonText}>
            {' '}
            Download Brochure in Malayalam{' '}
          </Text>
        </TouchableOpacity>
      </View> */}
      {/* <WebView
        containerStyle={{borderRadius: 20, marginBottom: 5}}
        originWhitelist={['*']}
        source={{html: courseDetails}}
      /> */}
      <Modal
        isVisible={showModal}
        onBackButtonPress={() => setShowModal(false)}
        onBackdropPress={() => setShowModal(false)}>
        <ScrollView
          contentContainerStyle={{paddingTop: 20}}
          style={[styles.marginTop30, styles.scrollView]}>
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setFormData({...formData, username: text})}
              value={formData.username}
              placeholder={'Name'}
            />
          </View>
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setFormData({...formData, age: text})}
              value={formData.age}
              placeholder={'Age'}
            />
          </View>
          <View style={styles.searchHolder}>
            <RNPickerSelect
              placeholder={{
                label: 'Gender',
                value: formData.gender,
                color: '#9EA0A4',
              }}
              style={pickerSelectStyles}
              onValueChange={value => setFormData({...formData, gender: value})}
              items={[
                {label: 'Male', value: 'male'},
                {label: 'Female', value: 'female'},
                {label: 'Other', value: 'other'},
              ]}
            />
          </View>
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setFormData({...formData, dob: text})}
              value={formData.dob}
              placeholder={'DOB : YYYY-MM-DD'}
            />
          </View>
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setFormData({...formData, whtsapp: text})}
              value={formData.whtsapp}
              placeholder={'Whatsapp'}
            />
          </View>
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setFormData({...formData, phone: text})}
              value={formData.phone}
              placeholder={'Phone'}
            />
          </View>
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setFormData({...formData, email: text})}
              value={formData.email}
              placeholder={'Email'}
            />
          </View>
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setFormData({...formData, address: text})}
              value={formData.address}
              placeholder={'Address'}
            />
          </View>
          <View style={styles.searchHolder}>
            <RNPickerSelect
              placeholder={{
                label: 'Education Qualificiation',
                value: formData.education,
                color: '#9EA0A4',
              }}
              style={pickerSelectStyles}
              onValueChange={value =>
                setFormData({...formData, education: value})
              }
              items={[
                {label: 'Primary', value: 'primary'},
                {label: '10th', value: '10th'},
                {label: 'Plus 2', value: '+2'},
                {label: 'Diploma', value: 'diploma'},
                {label: 'Graduation', value: 'graduation'},
                {label: 'Post Graduation', value: 'post_graduation'},
              ]}
            />
          </View>
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setFormData({...formData, edu_board: text})}
              value={formData.edu_board}
              placeholder={'Institution / Board'}
            />
          </View>
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setFormData({...formData, edu_class: text})}
              value={formData.edu_class}
              placeholder={'Class / Subject'}
            />
          </View>
          <View style={styles.searchHolder}>
            <RNPickerSelect
              placeholder={{
                label: 'Islamic Education',
                value: formData.isla_edu,
                color: '#9EA0A4',
              }}
              style={pickerSelectStyles}
              onValueChange={value =>
                setFormData({...formData, isla_edu: value})
              }
              items={[
                {label: 'Madrasha', value: 'primary'},
                {label: 'AIC', value: '10th'},
                {label: 'Preliminary', value: '+2'},
                {label: 'UG', value: 'UG'},
                {label: 'PG', value: 'primary'},
                {label: 'Diploma', value: '10th'},
              ]}
            />
          </View>
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text =>
                setFormData({...formData, isla_board: text})
              }
              value={formData.isla_board}
              placeholder={'Institution / Board'}
            />
          </View>
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text =>
                setFormData({...formData, isla_class: text})
              }
              value={formData.isla_class}
              placeholder={'Class / Subject'}
            />
          </View>

          <LinearGradient
            colors={[Colors.primary, Colors.secondary]}
            style={styles.modalLoginButton}>
            <TouchableOpacity
              onPress={() => applyCourse()}
              style={[styles.flexRow, styles.centerAll]}>
              <Text style={styles.headerText}>SUBMIT</Text>
            </TouchableOpacity>
          </LinearGradient>

          <TouchableOpacity
            onPress={() => setShowModal(false)}
            style={styles.signupHolder}>
            <Text style={styles.create}>
              <Text style={styles.signup}>Close</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </Modal>
    </Container>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 18,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 0,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    width: 250,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0,
    borderRadius: 8,
    color: 'black',
    width: 250,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
