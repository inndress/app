import React from 'react'
import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'

import MenuNavigator from './src/MenuNavigator'
import Feed from './src/screens/Feed'

class App extends React.Component {
 render() {
   return (
     <MenuNavigator ref={nav => { this.navigator = nav }} />
   );
 }
}

AppRegistry.registerComponent(appName, () => App)
