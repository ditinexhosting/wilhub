import {StyleSheet} from 'react-native';
import {Mixins, Spacing, Typography} from 'src/styles';

const styles = ({Colors}) =>
  StyleSheet.create({
    headerBar: {
      height: Mixins.scaleSize(130),
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
      zIndex: 9999
    },
    headerText: {
      marginVertical: Spacing.SCALE_15,
      fontSize: Typography.FONT_SIZE_25,
      color: Colors.white,
      flex: 1,
      textAlign: 'center',
    },
    searchHolder: {
      backgroundColor: Colors.white,
      width: Mixins.scaleSize(250),
      height: Mixins.scaleSize(40),
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: Spacing.SCALE_10,
      borderRadius: 20,
      alignSelf: 'center'
    },
    searchInput: {
      flex: 1,
      marginVertical: 0,
      paddingVertical: 0,
    },
    iconBackground: {
      width: Spacing.SCALE_100,
      height: Spacing.SCALE_100,
      justifyContent: 'center',
      alignItems: 'center'
    },
    iconCourse: {
      width: Spacing.SCALE_80,
      height: Spacing.SCALE_80,
      borderTopRightRadius: 30,
      borderBottomLeftRadius: 30
    },
    categoryText: {
      color: Colors.white,
      textAlign: 'center',
    },
    courseTitle: {
      color: Colors.primary,
      margin: Spacing.SCALE_20,
      fontSize: Typography.FONT_SIZE_20,
    },
    courseText: {
      color: Colors.primary,
      textAlign: 'center',
    },
  });

export default styles;
