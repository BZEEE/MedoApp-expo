// code will mostly be re-usable, except for platform specific components
// For this case check the operating system for certain cases
// to determine what styles and components to apply. use the 'Platform' module

import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#000000",
  },
  logo: {
    fontSize: 72,
    color: "#000000",
  },
  username: {
    backgroundColor: "#4b4c5d",
    color: "#000000",
    marginBottom: 15,
  },
  password: {
    backgroundColor: "#4b4c5d",
    color: "#000000",
    marginBottom: 15,
  },
  button: {
    color: "#00bbff",
  },
});

export default styles;