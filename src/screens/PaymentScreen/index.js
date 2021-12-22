/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Button,
  StyleSheet,
  View,
  NativeModules,
  NativeEventEmitter,
} from 'react-native';

import RazorpayCheckout from 'react-native-razorpay';

export default class ButtonBasics extends Component {
  _onPressButton() {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_live_jOpR3o4foquI8S',
      amount: '1000',
      name: 'Surya Karmakar',
      prefill: {
        email: 'suryakarmakar.wis@gmail.com',
        contact: '9007505188',
        name: 'Razorpay Software',
      },
      theme: {color: '#F37254'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        console.log(data);
        console.log(`Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        console.log(error);
        console.log(`Error: ${error.code} | ${error.description}`);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button onPress={this._onPressButton} title="Press Me" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
