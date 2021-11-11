import {StyleSheet} from 'react-native';
import {Mixins, Spacing, Typography} from 'src/styles';

const styles = ({Colors}) =>
  StyleSheet.create({
    backgroundContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      resizeMode: 'contain',
      width: Mixins.scaleSize(300),
      height: Mixins.scaleSize(80),
    },
  });

export default styles;
