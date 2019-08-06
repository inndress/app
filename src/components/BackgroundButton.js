import React, { Component } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

class BackgroundButton extends React.Component {

 render() {
  return (
   <TouchableOpacity style={styles.touchable} onPress={this.props.onPress}>
    <View style={styles.view}>
     {this.props.showImage && <Icon style={styles.image} name='check' />}
     <Text style={styles.text}>{this.props.title}</Text>
    </View>
   </TouchableOpacity>
  )
 }

}

const styles = StyleSheet.create({
 view: {
  flexDirection: 'row',
  borderRadius: 25,
  borderWidth: 2,
  borderColor: '#ECBFB0',
  backgroundColor: '#ECBFB0',
  height: 48,
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: 18,
  paddingRight: 18
 },
 touchable: {
  marginLeft: 4,
  marginRight: 4,
  marginBottom: 8,
  marginTop: 8
 },
 image: {
  marginRight: 8,
  color: '#FFF'
 },
 text: {
  textAlign: 'center',
  color: '#FFF',
  fontWeight: 'bold',
  fontSize: 20
 }
})

export default BackgroundButton