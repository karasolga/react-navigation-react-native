import {createStackNavigator} from 'react-navigation'
import TabNavigator from './tabs'
import ModalNavigator from './modal'

const RootStack = createStackNavigator(
  {
    Tabs: {
      screen: TabNavigator,
    },
    MyModal: {
      screen: ModalNavigator,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default RootStack