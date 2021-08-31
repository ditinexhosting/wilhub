import {
    StyleSheet,
} from 'react-native';
import { Mixins, Spacing, Typography,style } from 'src/styles'

const styles =({Colors})=> StyleSheet.create({
    header:{
       marginVertical: Spacing.SCALE_15,
    },
    headerText:{
        fontSize: Typography.FONT_SIZE_25,
        color: Colors.white,
        textAlign: 'center'
    },
    background:{
        flex: 1
    }
})

export default styles