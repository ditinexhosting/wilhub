import {
    StyleSheet,
} from 'react-native';
import Colors from './colors'
import Typography from './typography'
import * as Mixins from './mixins'
import Spacing from './spacing'


let margins = {}
for(let i = 1; i <= 100; i++){
    margins['marginTop'+i] = { marginTop: Spacing['SCALE_'+i] }
}
for(let i = 1; i <= 100; i++){
    margins['marginBottom'+i] = { marginBottom: Spacing['SCALE_'+i] }
}
for(let i = 1; i <= 100; i++){
    margins['marginLeft'+i] = { marginLeft: Spacing['SCALE_'+i] }
}
for(let i = 1; i <= 100; i++){
    margins['marginRight'+i] = { marginRight: Spacing['SCALE_'+i] }
}
for(let i = 1; i <= 100; i++){
    margins['margin'+i] = { margin: Spacing['SCALE_'+i] }
}
for(let i = 1; i <= 100; i++){
    margins['marginVertical'+i] = { marginVertical: Spacing['SCALE_'+i] }
}
for(let i = 1; i <= 100; i++){
    margins['marginHorizontal'+i] = { marginHorizontal: Spacing['SCALE_'+i] }
}

let paddings = {}
for(let i = 1; i <= 100; i++){
    paddings['paddingTop'+i] = { paddingTop: Spacing['SCALE_'+i] }
}
for(let i = 1; i <= 100; i++){
    paddings['paddingBottom'+i] = { paddingBottom: Spacing['SCALE_'+i] }
}
for(let i = 1; i <= 100; i++){
    paddings['paddingLeft'+i] = { paddingLeft: Spacing['SCALE_'+i] }
}
for(let i = 1; i <= 100; i++){
    paddings['paddingRight'+i] = { paddingRight: Spacing['SCALE_'+i] }
}
for(let i = 1; i <= 100; i++){
    paddings['padding'+i] = { padding: Spacing['SCALE_'+i] }
}
for(let i = 1; i <= 100; i++){
    paddings['paddingVertical'+i] = { paddingVertical: Spacing['SCALE_'+i] }
}
for(let i = 1; i <= 100; i++){
    paddings['paddingHorizontal'+i] = { paddingHorizontal: Spacing['SCALE_'+i] }
}

const styles = StyleSheet.create({
    ...margins,
    ...paddings,

    flex1: {
        flex: 1
    },
    flexStart:{
    	alignSelf:"flex-start",
    },
    flexEnd:{
    	alignSelf:"flex-end",
    },
    flexRow:{
        flexDirection: 'row',
    },
    flexGrow:{
        flexGrow: 1
    },
    flexWrapReverse:{
        flexWrap: 'wrap-reverse'
    },
    fullWidth: {
        width: '100%'
    },
    spaceAround:{
        justifyContent: 'space-around'
    },
    spaceBetween:{
        justifyContent: 'space-between'
    },
    justifyCenter:{
        justifyContent: 'center'
    },
    alignCenter:{
        alignItems: 'center'
    },
    alignStart:{
        alignItems: 'flex-start'
    },
    alignEnd:{
        alignItems: 'flex-end'
    },
    centerAll:{
        justifyContent: 'center',
        alignItems: 'center'
    },

    /*
     * Global styles
     */

    statusBar:{
        height: Mixins.STATUSBAR_HEIGHT,
    },
    headerGap: {
        paddingTop: Mixins.scaleHeight(90)
    },
    headerMarginGap: {
        marginTop: Mixins.scaleHeight(90)
    },
    /*bottomNavigationBar: { backgroundColor: Colors.very_light, borderTopWidth: 0, elevation: 0, shadowOpacity: 0, height: 54 },*/
    bottomNavigationBar: {
        borderTopWidth: 0,
        backgroundColor: 'transparent',
        elevation: 0
    },
    bottomNavigationContentOffset:{
        minHeight: Mixins.NAVBAR_HEIGHT + Mixins.scaleSize(45)
    }
});

export default styles