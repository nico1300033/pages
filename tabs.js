import { createBottomTabNavigator } from 'react-navigation-tabs'

import SquareScreen from './square';
import CircleScreen from './circle';
import TriangleScreen from './triangle'

export default createBottomTabNavigator({
  Squares: SquareScreen,
  Circles: CircleScreen,
  Triangles: TriangleScreen
})