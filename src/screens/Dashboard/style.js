import {
    StyleSheet,
} from 'react-native';
import { Mixins, Spacing, Typography } from 'src/styles'

const styles =({Colors})=> StyleSheet.create({
    headerBar:{
        height: Mixins.scaleSize(150),
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: Spacing.SCALE_30,
        borderBottomRightRadius: Spacing.SCALE_30
    },
    logo:{
        width: Mixins.scaleSize(200),
        height: Mixins.scaleSize(50),
        resizeMode: 'contain',
        marginBottom: Spacing.SCALE_15
    },
    searchHolder:{
        backgroundColor: Colors.white,
        width: Mixins.scaleSize(250),
        height: Mixins.scaleSize(40),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Spacing.SCALE_10,
        borderRadius: 20
    },
    searchInput:{
        flex: 1,
        marginVertical: 0,
        paddingVertical: 0
    },
    background:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: Mixins.DEVICE_WIDTH,
        height: Mixins.DEVICE_HEIGHT
    },
    itemContainer:{
        flex: 1,
        alignItems: 'center'
    },
    image: {
        width: Mixins.DEVICE_WIDTH/2,
        height: Mixins.scaleSize(230),
        resizeMode: 'stretch'
    },
    title:{
        fontSize: Typography.FONT_SIZE_20,
        color: Colors.primary
    }
});

export default styles