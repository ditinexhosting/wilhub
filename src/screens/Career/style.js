import {
    StyleSheet,
} from 'react-native';
import { Mixins, Spacing, Typography,style } from 'src/styles'

const styles =({Colors})=> StyleSheet.create({
    header:{
       marginVertical: Spacing.SCALE_15,
    },
    backButton:{
        position: 'absolute',
        top: Spacing.SCALE_20,
        left: Spacing.SCALE_20,
        zIndex: 999
    },
    headerText:{
        fontSize: Typography.FONT_SIZE_25,
        color:Colors.white,
        flex: 1,
        textAlign: 'center'
    },
    titleText:{
        fontSize: Typography.FONT_SIZE_25,
        color: Colors.gray_dark,
        flex: 1,
        textAlign: 'center',
        marginVertical: Spacing.SCALE_10
    },
    background:{
        flex: 1
    },
    logo:{
        width: Mixins.DEVICE_WIDTH - 20,
        height: Mixins.DEVICE_WIDTH - 20,
        resizeMode: 'cover',
        alignSelf: 'center',
    },
    descriptionText:{
        color:Colors.white,
        textAlign:'justify',
        marginHorizontal:Spacing.SCALE_20,
        fontSize:Typography.FONT_SIZE_15,
        marginVertical: Spacing.SCALE_10
    }
})

export default styles