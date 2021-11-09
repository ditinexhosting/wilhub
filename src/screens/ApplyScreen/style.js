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
      marginBottom: Spacing.SCALE_10,
    },
    searchInput: {
      flex: 1,
      marginVertical: 0,
      paddingVertical: 0,
      fontSize: Typography.FONT_SIZE_15,
      marginLeft: Spacing.SCALE_10,
    },
    loginButton: {
      width: '80%',
      height: Mixins.scaleSize(45),
      borderRadius: 50,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: Spacing.SCALE_25,
    },
    container: {
      marginTop: Spacing.SCALE_35,
    },
    submitBtnText: {
      color: Colors.white,
      fontWeight: '500',
      fontSize: Typography.FONT_SIZE_14,
    },
    chooseFileBtn: {
      width: Mixins.scaleSize(100),
      height: Mixins.scaleSize(18),
      backgroundColor: Colors.gray_medium,
      borderRadius: 20,
      alignItems: 'center',
      marginLeft: Spacing.SCALE_10,
    },
    chooseFileText: {
      fontSize: Typography.FONT_SIZE_13,
      fontWeight: '500',
    },
  });

export default styles;
