import {
    StyleSheet,
} from 'react-native';
import { Mixins, Spacing, Typography,style } from 'src/styles'

const styles =({Colors})=> StyleSheet.create({
    header:{
       marginVertical: Spacing.SCALE_10,
    },
    headerIcon:{
        marginHorizontal:Spacing.SCALE_10

    },
    headerText:{
        fontSize: Typography.FONT_SIZE_20,
        color:Colors.white,
        marginLeft:Mixins.scaleSize(80)
    },
    background:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: Mixins.DEVICE_WIDTH,
        height: Mixins.DEVICE_HEIGHT
    },
    logo:{
        width: Mixins.DEVICE_WIDTH,
        height: Mixins.scaleSize(250),
        resizeMode: 'contain'
    },
    descriptionText:{
        color:Colors.white,
        textAlign:'center',
        marginHorizontal:Spacing.SCALE_10,
        fontSize:Typography.FONT_SIZE_15
    },
    contentHeader:{
        maxHeight:Mixins.scaleSize(100)
    },
    iconImage:{
        marginHorizontal:Spacing.SCALE_10,
        width:Spacing.SCALE_50,
        resizeMode:'contain',
    },
    iconText:{
        color:Colors.white,
        fontSize:Typography.FONT_SIZE_25
    },
    imageContainer:{
        marginHorizontal:Spacing.SCALE_10,
    },
    personImage:{
        width:Spacing.SCALE_100,
        height:Spacing.SCALE_100,
        borderRadius:Spacing.SCALE_50,
        resizeMode:'contain',
    },
    personTitle:{
        fontSize:Typography.FONT_SIZE_10,
        color:Colors.white,
        textAlign:'center'
    },
    personDescription:{
        fontSize:Typography.FONT_SIZE_8,
        color:Colors.white,
        textAlign:'center'
    },
    serviceImage:{
        width:Spacing.SCALE_100,
        height:Spacing.SCALE_100,
    },
    serviceText:{
        position:'absolute',
        top:'62%',
        left:'15%',
        fontSize:Typography.FONT_SIZE_11,
        fontWeight:'bold'
    }
})

export default styles