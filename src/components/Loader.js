import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Animated,
  StyleSheet,
  Easing,
  Dimensions,
  Image,
  ActivityIndicator
} from 'react-native';
import { loader_image } from 'src/assets'
import { Styles, Colors, Spacing, Mixins } from 'src/styles'

const Loader=()=>{

	return (
		<View style={styles.backgroundContainer}>
			<ActivityIndicator size={'large'} color={Colors.primary} style={styles.marginBottom20} />
		</View>
    );
}

const styles = StyleSheet.create({
  backgroundContainer: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(255,255,255,0.7)",
      position: "absolute",
      width: Mixins.DEVICE_WIDTH,
      height: Mixins.DEVICE_HEIGHT + Mixins.STATUSBAR_HEIGHT,
      zIndex: 99
  },
  loader:{
      resizeMode: "cover",
      width: Mixins.scaleSize(200),
      height: Mixins.scaleSize(200),
      //backgroundColor: Colors.white,
  },
  marginBottom20:{
    marginBottom: Spacing.SCALE_20
  }
});

export default  Loader 



