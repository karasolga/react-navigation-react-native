import { createBottomTabNavigator } from 'react-navigation';
import {HomeScreen, SettingsScreen} from '../screens'
import MoreStack from './more'

export default createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen },
  More: MoreStack,
});
