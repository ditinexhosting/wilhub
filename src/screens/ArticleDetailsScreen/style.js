import {StyleSheet} from 'react-native';
import {Mixins, Spacing, Typography} from 'src/styles';

const styles = ({Colors}) =>
  StyleSheet.create({
    headerBar: {
      height: Mixins.scaleSize(310),
      borderBottomLeftRadius: Spacing.SCALE_30,
      borderBottomRightRadius: Spacing.SCALE_30,
      backgroundColor: Colors.primary,
      position: 'relative',
    },
    background: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: Mixins.DEVICE_WIDTH,
      height: Mixins.DEVICE_HEIGHT,
    },
    backButton: {
      width: Mixins.scaleSize(30),
      height: Mixins.scaleSize(30),
      position: 'absolute',
      left: Spacing.SCALE_20,
      top: Spacing.SCALE_25,
      backgroundColor: Colors.white,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      zIndex: 1,
      paddingRight: Spacing.SCALE_3,
    },
    headerImageView: {
      width: '100%',
      height: '100%',
      borderBottomLeftRadius: Spacing.SCALE_30,
      borderBottomRightRadius: Spacing.SCALE_30,
    },
    topHeaderText: {
      marginVertical: Spacing.SCALE_15,
      fontSize: Typography.FONT_SIZE_20,
      color: Colors.white,
      fontWeight: '500',
    },
    courseHeaderTitle: {
      fontSize: Typography.FONT_SIZE_20,
      color: Colors.white,
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: Spacing.SCALE_24,
      textAlign: 'left',
    },
    mainHeaderTitle: {
      position: 'absolute',
      alignItems: 'center',
      height: Mixins.scaleSize(310),
      width: '100%',
      justifyContent: 'flex-end',
      paddingHorizontal: Spacing.SCALE_22,
    },
    container: {
      paddingHorizontal: 15,
    },
    contentTextStyle: {
      marginTop: 10,
      textAlign: 'justify',
    },
  });

export default styles;
