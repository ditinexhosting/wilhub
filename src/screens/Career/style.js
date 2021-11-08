import {StyleSheet} from 'react-native';
import {Mixins, Spacing, Typography, style} from 'src/styles';

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
    weAreHiringImgView: {
      width: '100%',
      height: 180,
      borderRadius: 20,
      marginTop: Spacing.SCALE_18,
      marginBottom: Spacing.SCALE_10,
    },
    cardView: {
      width: '100%',
      height: 145,
      backgroundColor: Colors.gray_medium,
      marginVertical: 10,
      borderRadius: 10,
    },
    cardTopView: {
      width: '100%',
      height: '29%',
      justifyContent: 'center',
      paddingLeft: Spacing.SCALE_8,
    },
    cardCenterView: {
      width: '100%',
      height: '50%',
      paddingLeft: Spacing.SCALE_8,
    },
    cardBottomView: {
      width: '100%',
      height: '21%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    applyBtnView: {
      width: 120,
      height: 18,
      backgroundColor: Colors.primary,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default styles;
