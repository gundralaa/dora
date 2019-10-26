import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import HomeScreen from './screens/HomeScreen';
import UserpageScreen from './screens/UserpageScreen'
import WebScreen from './screens/WebScreen'

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: UserpageScreen },
  Userpage: { screen: UserpageScreen},
  Webview: { screen: WebScreen},
});

const App = createAppContainer(MainNavigator);

export default App;