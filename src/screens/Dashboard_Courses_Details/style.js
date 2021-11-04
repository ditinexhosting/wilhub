import {StyleSheet} from 'react-native';
import {Mixins, Spacing, Typography} from 'src/styles';

const styles = ({Colors}) =>
  StyleSheet.create({
    headerBar: {
      height: 140,
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
      position: 'absolute',
      left: Spacing.SCALE_20,
      top: Spacing.SCALE_20,
      zIndex: 1,
    },
    headerText: {
      width: Mixins.scaleSize(280),
      alignSelf: 'center',
      marginVertical: Spacing.SCALE_15,
      fontSize: Typography.FONT_SIZE_25,
      color: Colors.white,
      textAlign: 'center',
    },
    button: {
      width: Mixins.scaleSize(250),
      borderRadius: Spacing.SCALE_15,
    },
    button2: {
      width: Mixins.scaleSize(250),
      borderRadius: Spacing.SCALE_15,
    },
    buttonText: {
      fontSize: Typography.FONT_SIZE_14,
      textAlign: 'center',
      color: Colors.white,
      fontWeight: 'bold',
    },
    scrollView: {
      backgroundColor: Colors.white,
      borderRadius: 10,
    },
    searchHolder: {
      backgroundColor: Colors.white,
      width: Mixins.scaleSize(260),
      height: Mixins.scaleSize(50),
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: Spacing.SCALE_10,
      borderRadius: 50,
      alignSelf: 'center',
      borderWidth: 2,
      borderColor: Colors.primary,
      marginBottom: Spacing.SCALE_20,
    },
    pickerInput: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30,
    },
    searchInput: {
      flex: 1,
      marginVertical: 0,
      paddingVertical: 0,
      fontSize: Typography.FONT_SIZE_18,
    },
    loginButton: {
      width: Mixins.scaleSize(260),
      borderRadius: 50,
      alignSelf: 'center',
      height: 30,
      justifyContent: 'center',
      marginTop: 10,
    },
    modalLoginButton: {
      width: Mixins.scaleSize(260),
      borderRadius: 50,
      alignSelf: 'center',
      marginBottom: Spacing.SCALE_30,
    },
    signupHolder: {
      alignSelf: 'center',
    },
    create: {
      fontSize: Typography.FONT_SIZE_18,
    },
    signup: {
      color: Colors.primary,
    },
    headerText: {
      marginVertical: Spacing.SCALE_15,
      fontSize: Typography.FONT_SIZE_25,
      color: Colors.white,
      flex: 1,
      textAlign: 'center',
    },
    headerImageView: {
      width: '100%',
      height: '100%',
      opacity: 0.3,
      borderBottomLeftRadius: Spacing.SCALE_30,
      borderBottomRightRadius: Spacing.SCALE_30,
    },
    headerTitle: {
      position: 'absolute',
      alignItems: 'center',
      width: '100%',
    },
    topHeaderText: {
      marginVertical: Spacing.SCALE_15,
      fontSize: Typography.FONT_SIZE_20,
      color: Colors.white,
      fontWeight: '500',
    },
    courseHeaderTitle: {
      fontSize: Typography.FONT_SIZE_30,
      color: Colors.white,
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: Spacing.SCALE_12,
    },
    mainHeaderTitle: {
      position: 'absolute',
      alignItems: 'center',
      height: 140,
      width: '100%',
      justifyContent: 'flex-end',
      paddingHorizontal: Spacing.SCALE_8,
    },
    container: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    topContainer: {
      width: '100%',
      height: '62%',
      paddingHorizontal: Spacing.SCALE_20,
      marginTop: Spacing.SCALE_15,
    },
    bottomContainer: {
      width: '100%',
      height: '38%',
      paddingTop: 10,
    },
  });

export default styles;
