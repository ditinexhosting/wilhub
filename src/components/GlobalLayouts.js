import React, { useState, useEffect } from 'react';
import {
  View,
  Animated,
  StyleSheet,
  Easing,
  Dimensions
} from 'react-native';
import { Styles, Spacing, Mixins } from 'src/styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Loader, Toast } from 'src/components'
import {useSelector} from 'react-redux';

const icons = {
  Success: ({ color }) => <Icon name="check-circle" size={30} color={color} />,
  Error: ({ color }) => <Icon name="times-circle" size={30} color={color} />,
  Info: ({ color }) => <Icon name="info-circle" size={30} color={color} />
}

const GlobalLayouts = ({ ...props }) => {

  const isLoading = useSelector(state => state.sessionReducer.isLoading);

  return (
    <View style={Styles.flex1}>
      {props.children}
      {isLoading && <Loader />}
      <Toast ref={(r) => Toast.setRef(r)}
        icons={icons} />
    </View>
  );
}



export default GlobalLayouts



