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
    cardView: {
      width: Mixins.scaleSize(165),
      height: Mixins.scaleSize(165),
      backgroundColor: Colors.primary,
      borderRadius: 20,
      marginVertical: Spacing.SCALE_20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      width: '100%',
      height: '85%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardViewImg: {
      width: Mixins.scaleSize(105),
      height: Mixins.scaleSize(85),
    },
    titleText: {
      fontWeight: '600',
      fontSize: Typography.FONT_SIZE_13,
      marginTop: Spacing.SCALE_15,
    },
  });

export default styles;
