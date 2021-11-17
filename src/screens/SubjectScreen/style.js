import {StyleSheet} from 'react-native';
import {Mixins, Spacing, Typography} from 'src/styles';

const styles = ({Colors}) =>
  StyleSheet.create({
    headerBar: {
      height: Mixins.scaleSize(85),
      justifyContent: 'center',
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
      zIndex: 1,
    },
    headerText: {
      marginVertical: Spacing.SCALE_15,
      fontSize: Typography.FONT_SIZE_20,
      color: Colors.white,
      flex: 1,
      textAlign: 'center',
      fontWeight: '500',
    },
    videoView: {
      width: '100%',
      height: 210,
      flex: 0,
    },
    videoBottomView: {
      width: '100%',
      height: Mixins.scaleSize(64),
      backgroundColor: Colors.white,
      paddingHorizontal: 22,
      justifyContent: 'center',
    },
    itemContainer: {
      height: Mixins.scaleSize(92),
      width: '100%',
      justifyContent: 'center',
      borderBottomWidth: 2,
      borderBottomColor: Colors.primary,
      paddingHorizontal: 22,
    },
    itemInnerContainer: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
    },
    leftSideView: {
      height: Mixins.scaleSize(57),
      backgroundColor: Colors.primary,
      borderRadius: 8,
      width: '30%',
    },
    rightSideView: {
      paddingHorizontal: 10,
      height: Mixins.scaleSize(57),
      width: '70%',
    },
    classTextStyle: {
      color: Colors.primary,
      fontSize: Typography.FONT_SIZE_17,
      fontWeight: '600',
    },
    descTextStyle: {
      fontSize: Typography.FONT_SIZE_10,
    },
    topClassHeaderTxt: {
      color: Colors.primary,
      fontSize: Typography.FONT_SIZE_17,
      fontWeight: '600',
    },
    topDescText: {
      color: Colors.primary,
      fontSize: Typography.FONT_SIZE_10,
      marginRight: 20,
    },
  });

export default styles;
