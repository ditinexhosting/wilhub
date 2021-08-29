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
      left: Spacing.SCALE_20
    },
    headerText: {
      width: Mixins.scaleSize(280),
      alignSelf: 'center',
      marginVertical: Spacing.SCALE_15,
      fontSize: Typography.FONT_SIZE_25,
      color: Colors.white,
      textAlign: 'center',
    },
    button:{
      backgroundColor: Colors.secondary,
      width: Mixins.scaleSize(150),
      padding: Spacing.SCALE_8,
      borderRadius: Spacing.SCALE_15
    },
    button2:{
      backgroundColor: Colors.secondary,
      width: Mixins.scaleSize(250),
      padding: Spacing.SCALE_8,
      borderRadius: Spacing.SCALE_15
    },
    buttonText:{
      fontSize: Typography.FONT_SIZE_14,
      textAlign: 'center',
      color: Colors.white,
      fontWeight: 'bold'
    }
    
  });

export default styles;
