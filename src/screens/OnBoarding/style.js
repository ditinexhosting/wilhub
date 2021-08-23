import {
    StyleSheet,
} from 'react-native';
import { Mixins, Spacing, Typography } from 'src/styles'

const styles =({Colors})=> StyleSheet.create({
    dot: {
        width: Mixins.scaleSize(60),
        height: Mixins.scaleSize(60)
    },
    image: {
        width: Mixins.scaleSize(350),
        height: Mixins.scaleSize(350),
        resizeMode: 'cover'
    },
    title:{
        color: Colors.primary,
        fontSize: Typography.FONT_SIZE_25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subtitle:{
        color: Colors.primary,
        fontSize: Typography.FONT_SIZE_18,
        textAlign: 'center'
    },
    skipButton:{
        position: 'absolute',
        zIndex: 99,
        top: Spacing.SCALE_30,
        right: Spacing.SCALE_30
    },
    skipText:{
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize: Typography.FONT_SIZE_18
    }
});

export default styles