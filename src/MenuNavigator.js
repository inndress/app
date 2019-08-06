import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Login from './screens/Login'
import Home from './screens/Home'
import AddPhoto from './screens/AddPhoto'
import Feed from './screens/Feed'
import Profile from './screens/Profile'
import Settings from './screens/Settings'

const mainRouter = createSwitchNavigator({
  Home: Home,
  Auth: Login
}, {
  initialRouteName: 'Home'
})

const Menu = {
  Home: {
    name: 'Home',
    screen: mainRouter
  },
  Feed: {
    name: 'Feed',
    screen: Feed
  },
  AddPhoto: {
    name: 'AddPhoto',
    screen: AddPhoto
  },
  Profile: {
    name: 'Profile',
    screen: Profile
  },
  Settings: {
    name: 'Settings',
    screen: Settings
  }
}

const Config = {
 defaultNavigationOptions: ({ navigation }) => ({
  tabBarIcon: ({ tintColor }) => {
    const { routeName } = navigation.state
    if (routeName === 'Home') {
      return <FontAwesome5 name='home' size={30} color={tintColor} />
    } else if (routeName === 'Feed') {
      return <FontAwesome name='heart' size={30} color={tintColor} />
    } else if (routeName === 'AddPhoto') {
      return <View style={styles.centerIcon}><FontAwesome name='camera' size={42} color={tintColor} /></View>
    } else if (routeName === 'Profile') {
      return <FontAwesome5 name='user-alt' size={30} color={tintColor} />
    } else if (routeName === 'Settings') {
      return <FontAwesome5 name='cog' size={30} color={tintColor} />
    }
  },
}),
tabBarOptions: {
  style: {
    backgroundColor: '#272727',
  },
  showLabel: false,
  activeTintColor: '#ECBFB0',
  inactiveTintColor: 'gray'
},
}

// #E3E2DF
// #272727

const styles = {
  centerIcon: {
    width: 96,
    height: 96,
    borderRadius: 100,
    backgroundColor: '#272727',
    paddingTop: 15,
    alignItems: 'center'
  }
}

const TabNavigator = createBottomTabNavigator(Menu, Config)

export default createAppContainer(TabNavigator)