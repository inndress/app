import React, { Component } from 'react'
import { Alert, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import BackgroundButton from '../components/BackgroundButton'

class Home extends Component {

 state = {
  tags: ['work', 'casual', 'jeans', 'onca', 'preto'],
  selected: []
 }

 onPress = (tag) => {
  let selected
  selected = this._addOrRemove(this.state.selected, tag)
  this.setState({ selected: selected })
 }

 dressMe = () => {
   Alert.alert('Sua roupa ideal para hoje e: ')
 }

 _addOrRemove = (array, item) => {
  const exists = array.includes(item)
  if (exists) {
   return array.filter((c) => { return c !== item })
  }
  const result = array
  result.push(item)
  return result
 }

 render() {
  const tags = this.state.tags.map((tag, i) => {
   const on = this.state.selected.includes(tag)
   return (
    <BackgroundButton 
     key={i} 
     title={tag}
     showImage={on} 
     onPress={() => this.onPress(tag)} />
   )
  })
  return (
    <View style={styles.container}>
      <Text style={styles.today}>Quais as tags de hoje?</Text>
      <View style={styles.tags}>
      {tags}
      </View>
      {
      /*<TouchableHighlight style={styles.fullWidthButton} onPress={this.dressMe}>
        <Text style={styles.fullWidthButtonText}>Ok, vista-me!</Text>
      </TouchableHighlight>*/
      }
    </View>
  )
 }

}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#DDDDDD'
 },
 today: {
  fontSize: 28
 },
 tags: {
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap'
 },
 fullWidthButton: {
  width: '100%',
  position: 'absolute',
  bottom: 0,
  backgroundColor: '#ECBFB0',
  height: 64,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
},
fullWidthButtonText: {
  fontSize: 24,
  color: '#FFF'
}
})

export default Home