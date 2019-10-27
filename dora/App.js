import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen'
import UserpageScreen from './screens/UserpageScreen'
import WebScreen from './screens/WebScreen'
import DesisionScreen from './screens/DesisionScreen'

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  Userpage: { screen: UserpageScreen},
  Webview: { screen: WebScreen},
  DesisionScreen: { screen: DesisionScreen}
});

const App = createAppContainer(MainNavigator);

export default App;