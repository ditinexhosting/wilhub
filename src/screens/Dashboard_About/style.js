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
    background:{
        flex: 1
    },
    logo:{
        width: Mixins.scaleSize(280),
        height: Mixins.scaleSize(280),
        resizeMode: 'cover',
        alignSelf: 'center',
    },
    descriptionText:{
        color:Colors.white,
        textAlign:'justify',
        marginHorizontal:Spacing.SCALE_20,
        fontSize:Typography.FONT_SIZE_15
    },
    contentHeader:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Spacing.SCALE_30,
        marginBottom: Spacing.SCALE_10
    },
    iconImage:{
        marginHorizontal:Spacing.SCALE_10,
        width:Spacing.SCALE_50,
        height:Spacing.SCALE_50,
        resizeMode:'contain',
    },
    iconText:{
        color:Colors.white,
        fontSize:Typography.FONT_SIZE_25
    },
    imageContainer:{
        paddingHorizontal:Spacing.SCALE_10,
        flex: 1
    },
    personImage:{
        width:Spacing.SCALE_100,
        height:Spacing.SCALE_100,
        borderRadius: 50,
        resizeMode:'cover',
    },
    personTitle:{
        fontSize:Typography.FONT_SIZE_14,
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