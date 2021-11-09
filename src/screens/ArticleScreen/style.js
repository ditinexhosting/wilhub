import {StyleSheet} from 'react-native';
import {Mixins, Spacing, Typography} from 'src/styles';

const styles = ({Colors}) =>
  StyleSheet.create({
    headerBar: {
      height: Mixins.scaleSize(85),
      borderBottomLeftRadius: Spacing.SCALE_40,
      borderBottomRightRadius: Spacing.SCALE_40,
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
    container: {
      paddingHorizontal: Spacing.SCALE_22,
    },
    topCardView: {
      width: '100%',
      height: Mixins.scaleSize(230),
      borderRadius: 15,
      marginTop: Spacing.SCALE_15,
      marginBottom: Spacing.SCALE_6,
      justifyContent: 'flex-end',
      position: 'relative',
    },
    eachCardView: {
      width: '49%',
      height: Mixins.scaleSize(200),
      borderRadius: 15,
      marginTop: Spacing.SCALE_5,
      justifyContent: 'flex-end',
      position: 'relative',
    },
    caechImageView: {
      borderRadius: 15,
      width: '100%',
    },
    topCardViewTitle: {
      color: Colors.white,
      fontWeight: 'bold',
      fontSize: Typography.FONT_SIZE_20,
      marginBottom: Spacing.SCALE_15,
      marginHorizontal: Spacing.SCALE_15,
    },
    topCardViewBtnView: {
      width: Mixins.scaleSize(30),
      height: Mixins.scaleSize(30),
      backgroundColor: Colors.white,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      position: 'absolute',
      right: Spacing.SCALE_15,
      top: Spacing.SCALE_15,
      paddingLeft: Spacing.SCALE_3,
      zIndex: 1,
    },
    eachCardViewBtnView: {
      width: Mixins.scaleSize(25),
      height: Mixins.scaleSize(25),
      backgroundColor: Colors.white,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      position: 'absolute',
      right: Spacing.SCALE_15,
      top: Spacing.SCALE_15,
      paddingLeft: Spacing.SCALE_3,
      zIndex: 1,
    },
    eachCardTitle: {
      color: Colors.white,
      fontWeight: 'bold',
      fontSize: Typography.FONT_SIZE_12,
      marginBottom: Spacing.SCALE_15,
      marginHorizontal: Spacing.SCALE_10,
    },
    darkLayeriew: {
      width: '100%',
      height: '100%',
      backgroundColor: 'black',
      opacity: 0.4,
      borderRadius: 20,
      position: 'absolute',
    },
  });

export default styles;