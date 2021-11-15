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
    listViewStyle: {
      paddingHorizontal: Spacing.SCALE_24,
      paddingTop: Spacing.SCALE_30,
    },
    itemContainer: {
      alignItems: 'center',
      width: '30%',
      height: 125,
      marginBottom: Spacing.SCALE_13,
      justifyContent: 'space-between',
    },
    cardViewTitle: {
      fontSize: Spacing.SCALE_10,
      fontWeight: '500',
    },
    cardView: {
      width: '100%',
      height: 100,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardViewImg: {
      width: 55,
      height: 67,
    },
  });

export default styles;
