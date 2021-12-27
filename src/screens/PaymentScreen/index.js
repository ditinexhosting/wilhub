import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
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
import {Toast} from 'src/components';
import RNPickerSelect from 'react-native-picker-select';

export default ({navigation, route}) => {
  const {formData} = route.params;

  const [Colors, styles] = useTheme(style);
  const translate = useLanguage().t;
  const dispatch = useDispatch();
  const sessionReducer = useSelector(state => state.sessionReducer);

  const [selectPayment, setSelectPayment] = useState('');

  const oneTimeAmountView = () => {
    return (
      <View>
        <Text style={styles.feeStructureText}>Fee Structure(Include GST)</Text>
        <View style={styles.rowViewText}>
          <Text style={styles.leftFeeText}>Admission Fee</Text>
          <Text style={styles.leftFeeText}>500/-</Text>
        </View>
        <View style={styles.rowViewText}>
          <Text style={styles.leftFeeText}>Course Fee</Text>
          <Text style={styles.leftFeeText}>9000/-</Text>
        </View>
        <View style={styles.rowViewText}>
          <Text style={styles.leftFeeText}>Total</Text>
          <Text style={styles.leftFeeText}>9500/-</Text>
        </View>
        <View style={styles.rowViewText}>
          <Text style={styles.leftFeeText}>Amount to pay</Text>
          <Text style={styles.leftFeeText}>9500/-</Text>
        </View>
      </View>
    );
  };
  const termAmountView = () => {
    return (
      <View>
        <Text style={styles.feeStructureText}>Fee Structure(Include GST)</Text>
        <View style={styles.rowViewText}>
          <Text style={styles.leftFeeText}>Admission Fee</Text>
          <Text style={styles.leftFeeText}>500/-</Text>
        </View>
        <View style={styles.rowViewText}>
          <Text style={[styles.leftFeeText, {textDecorationLine: 'underline'}]}>
            Course Fee
          </Text>
        </View>
        <View style={styles.rowViewText}>
          <Text style={styles.leftFeeText}>2 Month</Text>
          <Text style={styles.leftFeeText}>2000/-</Text>
        </View>
        <View style={styles.rowViewText}>
          <Text style={styles.leftFeeText}>4 Month</Text>
          <Text style={styles.leftFeeText}>4000/-</Text>
        </View>
        <View style={styles.rowViewText}>
          <Text style={styles.leftFeeText}>6 Month</Text>
          <Text style={styles.leftFeeText}>6000/-</Text>
        </View>
      </View>
    );
  };

  const monthlyAmountView = () => {
    return (
      <View>
        <Text style={styles.feeStructureText}>Fee Structure(Include GST)</Text>
        <View style={styles.rowViewText}>
          <Text style={styles.leftFeeText}>Admission Fee</Text>
          <Text style={styles.leftFeeText}>500/-</Text>
        </View>
        <View style={styles.rowViewText}>
          <Text style={[styles.leftFeeText, {textDecorationLine: 'underline'}]}>
            Course Fee
          </Text>
        </View>
        <View style={styles.rowViewText}>
          <Text style={styles.leftFeeText}>Per Month</Text>
          <Text style={styles.leftFeeText}>1200/-</Text>
        </View>
        <View style={styles.rowViewText}>
          <Text style={styles.leftFeeText}>Total</Text>
          <Text style={styles.leftFeeText}>12500/-</Text>
        </View>
        <View style={styles.rowViewText}>
          <Text style={styles.leftFeeText}>Amount to pay</Text>
          <Text style={styles.leftFeeText}>1700/-</Text>
        </View>
      </View>
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
          <Text style={styles.headerText}>{translate('Payment')}</Text>
        </View>
      </LinearGradient>

      <View style={styles.container}>
        <View style={styles.searchHolder}>
          <RNPickerSelect
            placeholder={{
              label: 'Select Plan',
              value: selectPayment,
              color: '#9EA0A4',
            }}
            style={pickerSelectStyles}
            onValueChange={text => setSelectPayment(text)}
            items={[
              {label: 'One Time', value: 'one_time'},
              {label: 'Term', value: 'term'},
              {label: 'Monthly', value: 'monthly'},
            ]}
          />
        </View>

        <View>
          {selectPayment === 'one_time' && oneTimeAmountView()}
          {selectPayment === 'term' && termAmountView()}
          {selectPayment === 'monthly' && monthlyAmountView()}
        </View>
        <Text style={styles.doYouText}>
          Do you want to continue with payment?
        </Text>
        <View style={styles.rowView}>
          <TouchableOpacity style={styles.payNowButton}>
            <Text style={styles.payTextStyle}>PAY NOW</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.payNotButton}>
            <Text style={styles.payTextStyle}>NOT NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    top: -5,
  },
});
