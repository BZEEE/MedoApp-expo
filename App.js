
import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './src/components/screens/LoginScreen/LoginScreen.js';
import WorkSpaceScreen from "./src/components/screens/WorkSpaceScreen/WorkSpaceScreen.js"
import ViewScanScreen from "./src/components/screens/ViewScanScreen/ViewScanScreen.js"


const appNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    WorkSpace: WorkSpaceScreen,
    screen: ViewScanScreen
  },
  {
    initialRouteName: "Login"
  }
);

const App = createAppContainer(appNavigator);

export default App;

