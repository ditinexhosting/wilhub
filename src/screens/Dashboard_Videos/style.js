import {StyleSheet} from 'react-native';
import {Mixins, Spacing, Typography} from 'src/styles';

const styles = ({Colors}) =>
  StyleSheet.create({
    headerBar: {
      height: Mixins.scaleSize(100),
      borderBottomLeftRadius: Spacing.SCALE_30,
      borderBottomRightRadius: Spacing.SCALE_30,
    },
    background: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: Mixins.DEVICE_WIDTH,
      height: Mixins.DEVICE_HEIGHT,
    },
    backButton: {
      position: 'absolute',
      top: Spacing.SCALE_20,
      left: Spacing.SCALE_20,
      zIndex: 999

    },
    headerText: {
      marginVertical: Spacing.SCALE_15,
      fontSize: Typography.FONT_SIZE_25,
      color: Colors.white,
      flex: 1,
      textAlign: 'center',
    },
    iconBackground: {
      width: Spacing.SCALE_100,
      height: Spacing.SCALE_100,
      alignItems: 'center',
      justifyContent: 'center'
    },
    iconvideo: {
      width: Spacing.SCALE_80,
      height: Spacing.SCALE_80,
    },
    categoryText: {
      color: Colors.white,
      textAlign: 'center',
    },
    videoTitle: {
      color: Colors.primary,
      margin: Spacing.SCALE_20,
      fontSize: Typography.FONT_SIZE_20,
    },
    videoText: {
      color: Colors.primary,
      textAlign: 'center',
    },
  });

export default styles;
