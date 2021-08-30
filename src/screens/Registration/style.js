import {StyleSheet} from 'react-native';
import {Mixins, Spacing, Typography} from 'src/styles';

const styles = ({Colors}) =>
  StyleSheet.create({
    headerBar: {
      height: Mixins.scaleSize(100),
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
      width: Mixins.scaleSize(260),
      height: Mixins.scaleSize(50),
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: Spacing.SCALE_10,
      borderRadius: 50,
      alignSelf: 'center',
      borderWidth: 2,
      borderColor: Colors.primary,
      marginBottom: Spacing.SCALE_20
    },
    searchInput: {
      flex: 1,
      marginVertical: 0,
      paddingVertical: 0,
      fontSize: Typography.FONT_SIZE_18
    },
    loginButton:{
      width: Mixins.scaleSize(260),
      borderRadius: 50,
      alignSelf: 'center',
      marginBottom: Spacing.SCALE_30
    },
    signupHolder:{
      alignSelf: 'center',
    },
    create:{
      fontSize: Typography.FONT_SIZE_18
    },
    signup:{
      color: Colors.primary
    }
  });

export default styles;
