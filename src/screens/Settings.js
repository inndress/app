import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Settings extends Component {

 logout = () => {

 }

 render() {
  return (
   <View style={styles.container}>
    <Text>Settings</Text>
   </View>
  )
 }

}

const styles = {
 container: {
  flex: 1,
  alignItems: 'center',
  backgroundColor: '#DDDDDD'
 }
}

export default Settings