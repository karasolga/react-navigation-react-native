import {createStackNavigator} from 'react-navigation'
import ProfileScreen from '../screens/more/profile'
import MoreScreen from '../screens/more/more'

export default createStackNavigator({
  Profile: ProfileScreen,
  More: MoreScreen,
},
  {
    initialRouteName: 'More'
  }
)