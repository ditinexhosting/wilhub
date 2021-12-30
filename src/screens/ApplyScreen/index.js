import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
  StatusBar,
} from 'react-native';
import style from './style';
import {background} from 'src/assets';
import {useTheme, useLanguage} from 'src/hooks';
import {Container} from 'src/components';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import DocumentPicker from 'react-native-document-picker';

export default ({navigation}) => {
  const [Colors, styles] = useTheme(style);
  const translate = useLanguage().t;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [expreince, setExpreince] = useState('');

  const handleSubmit = () => {};

  const handleChooseFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size,
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
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
          <Text style={styles.headerText}>{translate('Apply')}</Text>
        </View>
      </LinearGradient>
      <ScrollView keyboardShouldPersistTaps={'handled'}>
        <View style={[styles.container]}>
          {/* Name Input*/}
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setName(text)}
              value={name}
              placeholder={'Name'}
            />
          </View>
          {/* Email Input*/}
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setEmail(text)}
              value={email}
              placeholder={'Email'}
            />
          </View>
          {/* Phone Input*/}
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setPhone(text)}
              value={phone}
              placeholder={'Phone'}
            />
          </View>
          {/* Expreince Input*/}
          <View style={styles.searchHolder}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setExpreince(text)}
              value={expreince}
              placeholder={'Expreince'}
            />
          </View>

          {/* Expreince Input*/}
          <View style={styles.searchHolder}>
            <TouchableOpacity
              style={styles.chooseFileBtn}
              onPress={() => handleChooseFile()}>
              <Text style={styles.chooseFileText}>Choose file</Text>
            </TouchableOpacity>
          </View>
          <LinearGradient
            colors={[Colors.secondary, Colors.primary]}
            style={styles.loginButton}>
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={[styles.flexRow, styles.centerAll]}>
              <Text style={styles.submitBtnText}>SUBMIT</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
    </Container>
  );
};
