import {createStackNavigator} from 'react-navigation'
import TabNavigator from './tabs'
import ModalScreen from '../screens/modal'

const RootStack = createStackNavigator(
  {
    Tabs: {
      screen: TabNavigator,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default RootStack