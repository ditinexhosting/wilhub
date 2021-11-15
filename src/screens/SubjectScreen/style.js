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
    imagesCardView: {
      width: '100%',
      height: 175,
      borderRadius: 20,
      marginVertical: Spacing.SCALE_5,
    },
    listViewStyle: {
      paddingHorizontal: Spacing.SCALE_22,
      paddingTop: Spacing.SCALE_10,
    },
    videoView: {
      width: '100%',
      height: 210,
      flex: 0,
    },
    videoBottomView: {
      width: '100%',
      height: 70,
      backgroundColor: Colors.white,
      paddingHorizontal: 22,
      justifyContent: 'center',
    },
  });

export default styles;