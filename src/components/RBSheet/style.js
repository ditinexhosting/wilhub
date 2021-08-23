import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#00000077"
  },
  mask: {
    flex: 1,
    backgroundColor: "transparent"
  },
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: 0,
    overflow: "hidden"
  },
  draggableContainer: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "transparent"
  },
  draggableIcon: {
    width: 35,
    height: 5,
    borderRadius: 5,
    margin: 10,
    backgroundColor: "#ccc"
  },
  modal:{
    position: 'absolute',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    zIndex: 999,
    bottom: 0
  }
});

export default styles;