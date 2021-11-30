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
    profileHeaderBar: {
      // height: Mixins.scaleSize(85),
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
    searchHolder: {
      backgroundColor: Colors.white,
      width: '80%',
      height: Mixins.scaleSize(50),
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: Spacing.SCALE_10,
      borderRadius: 50,
      alignSelf: 'center',
      borderWidth: 2,
      borderColor: Colors.primary,
      marginBottom: Spacing.SCALE_12,
    },
    searchInput: {
      flex: 1,
      marginVertical: 0,
      paddingVertical: 0,
      fontSize: Typography.FONT_SIZE_15,
    },
    loginButton: {
      width: '80%',
      height: Mixins.scaleSize(45),
      borderRadius: 50,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: Spacing.SCALE_30,
      marginBottom: Spacing.SCALE_10,
    },
    signupHolder: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    create: {
      fontSize: Typography.FONT_SIZE_14,
      fontWeight: '600',
    },
    signup: {
      color: Colors.primary,
    },
    profile: {
      width: Mixins.scaleSize(120),
      height: Mixins.scaleSize(120),
    },
    username: {
      fontSize: Typography.FONT_SIZE_18,
      fontWeight: '600',
      marginBottom: Spacing.SCALE_25,
      marginTop: Spacing.SCALE_3,
    },
    courseDetails: {
      fontSize: Typography.FONT_SIZE_16,
      textAlign: 'center',
    },
    marginLeft: {
      marginLeft: Spacing.SCALE_10,
    },
    submitBtnText: {
      color: Colors.white,
      fontWeight: '500',
      fontSize: Typography.FONT_SIZE_14,
    },
    container: {
      paddingHorizontal: Spacing.SCALE_35,
    },
    courseCard: {
      width: '100%',
      height: Mixins.scaleSize(50),
      backgroundColor: Colors.primary,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingLeft: Spacing.SCALE_16,
      marginBottom: Spacing.SCALE_12,
    },
    headerView: {
      width: '100%',
      height: Mixins.scaleSize(80),
      justifyContent: 'center',
      paddingLeft: Spacing.SCALE_20,
    },
    containerHeaderText: {
      color: 'black',
      fontWeight: '600',
      fontSize: Typography.FONT_SIZE_17,
    },
    courseCardText: {
      color: Colors.white,
      fontSize: Typography.FONT_SIZE_17,
      fontWeight: '500',
    },
  });

export default styles;
