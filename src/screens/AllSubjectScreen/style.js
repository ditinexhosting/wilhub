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
    listViewStyle: {
      paddingHorizontal: Spacing.SCALE_50,
      marginTop: Spacing.SCALE_50,
    },
    cardView: {
      width: '100%',
      height: Mixins.scaleSize(45),
      backgroundColor: Colors.primary,
      borderRadius: 25,
      marginBottom: Spacing.SCALE_12,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardViewText: {
      color: Colors.white,
      fontSize: Typography.FONT_SIZE_16,
    },
  });

export default styles;
