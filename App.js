import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import OpenScreen from './open';
import Tabs from './tabs';

const stackNavigator = createStackNavigator({
  Open: OpenScreen,
  Tabs: Tabs
});

export default createAppContainer(stackNavigator)
