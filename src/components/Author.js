import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Gravatar } from 'react-native-gravatar'

class Author extends Component {

 render() {
  return (
   <View style={styles.container}>
    <Gravatar style={styles.avatar} options={{email: this.props.email}} />
    <Text style={styles.date}>{this.props.date}</Text>
   </View>
  )
 }

}

const styles = StyleSheet.create({
 container: {
  flexDirection: 'row',
  alignItems: 'center'
 },
 avatar: {
  width: 30,
  height: 30,
  borderRadius: 15,
  marginHorizontal: 10
 },
 date: {
  color: '#444',
  marginVertical: 10,
  fontSize: 15,
  fontWeight: 'bold'
 }
})

export default Author