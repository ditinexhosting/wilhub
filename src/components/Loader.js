import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Animated,
  StyleSheet,
  Easing,
  Dimensions,
  Image,
  ActivityIndicator,
  Text
} from 'react-native';
import { loader_image } from 'src/assets'
import { Styles, Colors, Spacing, Mixins } from 'src/styles'
import AnimatedLoader from "react-native-animated-loader";

const Loader=()=>{

	return (
		<View style={styles.backgroundContainer}>
			{/*<ActivityIndicator size={'large'} color={Colors.primary} style={styles.marginBottom20} />*/}
      <AnimatedLoader
        visible={true}
        overlayColor="rgba(255,255,255,0)"
        source={require("./loader.json")}
        animationStyle={styles.lottie}
        speed={1}
      >
        <Text style={styles.loadingText}>Loading Please wait ...</Text>
      </AnimatedLoader>
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
  },
  lottie: {
    width: 100,
    height: 100
  },
  loadingText:{
    color: '#0C98B6'
  }
});

export default  Loader 



