import {createStackNavigator} from 'react-navigation'
import ModalScreen from '../screens/modal/modal'
import ModalDetailScreen from '../screens/modal/detail'

export default createStackNavigator({
    Modal: ModalScreen,
    ModalDetail: ModalDetailScreen,
  },
  {
    initialRouteName: 'Modal'
  }
)