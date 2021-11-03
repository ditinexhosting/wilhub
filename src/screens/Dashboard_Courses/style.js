import {StyleSheet} from 'react-native';
import {Mixins, Spacing, Typography} from 'src/styles';

const styles = ({Colors}) =>
  StyleSheet.create({
    headerBar: {
      // height: Mixins.scaleSize(100),
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
      zIndex: 9999,
    },
    headerText: {
      marginVertical: Spacing.SCALE_15,
      fontSize: Typography.FONT_SIZE_20,
      color: Colors.white,
      flex: 1,
      textAlign: 'center',
      fontWeight: '500',
    },
    iconBackground: {
      width: Spacing.SCALE_100,
      height: Spacing.SCALE_100,
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerIconBackground: {
      width: 115,
      height: 115,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.white,
      borderTopRightRadius: Spacing.SCALE_30,
      borderBottomLeftRadius: Spacing.SCALE_30,
      marginHorizontal: Spacing.SCALE_5,
    },
    iconCourse: {
      width: Spacing.SCALE_80,
      height: Spacing.SCALE_80,
      borderTopRightRadius: 30,
      borderBottomLeftRadius: 30,
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
    headerCourseTitle: {
      color: Colors.white,
      marginLeft: Spacing.SCALE_20,
      fontSize: Typography.FONT_SIZE_23,
      marginBottom: Spacing.SCALE_20,
      fontWeight: '600',
    },
    courseText: {
      color: Colors.primary,
      textAlign: 'center',
    },
    headerCourseText: {
      color: Colors.white,
      textAlign: 'center',
      fontSize: Typography.FONT_SIZE_10,
      marginTop: Spacing.SCALE_4,
      marginBottom: Spacing.SCALE_18,
    },
  });

export default styles;
