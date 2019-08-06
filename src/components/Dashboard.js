import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Dashboard extends Component {

 render() {
  return (
    <View style={styles.container}>
     <Text>LEP</Text>
    </View>
  )
 }

}

const styles = StyleSheet.create({
 container: {
  flex: 1
 },
 tags: {
  fontSize: 30,
  fontWeight: 'bold',
  fontStyle: 'italic',
  padding: 5,
  width: '100%',
  height: '100%'
 }
})

export default Dashboard