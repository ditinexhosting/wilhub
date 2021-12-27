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
    container: {
      width: '100%',
      height: '100%',
      marginTop: Spacing.SCALE_100,
      alignItems: 'center',
    },
    textStyle: {
      fontSize: Spacing.SCALE_17,
    },
    thankyou: {
      fontSize: Typography.FONT_SIZE_30,
    },
    searchHolder: {
      backgroundColor: Colors.white,
      width: '80%',
      height: Mixins.scaleSize(50),
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: Spacing.SCALE_10,
      borderRadius: 10,
      alignSelf: 'center',
      borderWidth: 2,
      borderColor: Colors.primary,
      marginBottom: Spacing.SCALE_12,
    },
    payNowButton: {
      width: 140,
      height: 50,
      backgroundColor: '#33cc33',
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: Spacing.SCALE_10,
    },
    payNotButton: {
      width: 140,
      height: 50,
      backgroundColor: '#009973',
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    rowView: {
      flexDirection: 'row',
    },
    payTextStyle: {
      color: '#fff',
      fontSize: 16,
    },
    doYouText: {
      fontSize: Typography.FONT_SIZE_18,
      color: 'gray',
      marginBottom: Spacing.SCALE_25,
      marginTop: Spacing.SCALE_10,
    },
    feeStructureText: {
      fontSize: Typography.FONT_SIZE_22,
      fontWeight: 'bold',
      marginVertical: Spacing.SCALE_10,
    },
    leftFeeText: {
      fontSize: Typography.FONT_SIZE_17,
      fontWeight: 'bold',
      color: '#484848',
      marginVertical: Spacing.SCALE_10,
    },
    rowViewText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });

export default styles;
