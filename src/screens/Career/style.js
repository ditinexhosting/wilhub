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
      height: 140,
      backgroundColor: Colors.gray_medium,
      marginVertical: Spacing.SCALE_5,
      borderRadius: 10,
    },
    cardTopView: {
      width: '100%',
      height: '25%',
      paddingLeft: Spacing.SCALE_8,
      paddingTop: Spacing.SCALE_12,
    },
    cardCenterView: {
      width: '100%',
      height: '50%',
      paddingHorizontal: Spacing.SCALE_8,
    },
    cardBottomView: {
      width: '100%',
      height: '25%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    applyBtnView: {
      width: 120,
      height: Spacing.SCALE_17,
      backgroundColor: Colors.primary,
      borderRadius: 10,
      alignItems: 'center',
    },
    container: {
      paddingHorizontal: Spacing.SCALE_23,
      justifyContent: 'center',
    },
    cardHeadingTitle: {
      fontWeight: 'bold',
      fontSize: Typography.FONT_SIZE_14,
    },
    cardDescText: {
      fontSize: Typography.FONT_SIZE_13,
    },
    applyTextStytle: {
      color: Colors.white,
      fontSize: Typography.FONT_SIZE_12,
    },
    loadMoreView: {
      alignItems: 'flex-end',
      justifyContent: 'center',
      marginRight: Spacing.SCALE_18,
    },
    loadMoreText: {
      fontSize: Typography.FONT_SIZE_9,
      marginRight: Spacing.SCALE_4,
      color: Colors.gray_dark,
    },
    loadMoreBtn: {
      flexDirection: 'row',
    },
  });

export default styles;
