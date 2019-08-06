import React, { Component } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

import Post from '../components/Post'

class Feed extends Component {

 state = {
  posts: [
   {
    id: 1,
    date: '29/07/2018',
    image: require('../../assets/imgs/casual.jpg'),
    comments: [
     {
      tag: 'casual',
      comment: 'Otima pra ir ao shopping'
     }
    ]
   },
   {
    id: 2,
    date: '30/07/2018',
    image: require('../../assets/imgs/dress.jpg'),
    comments: [
     {
      tag: 'party',
      comment: 'Fancy.'
     }
    ]
   }
 ]
 }

 render() {
  return (
   <View style={styles.container}>
    <FlatList
     data={this.state.posts}
     keyExtractor={item => `${item.id}`}
     renderItem={({ item }) => <Post key={item.tag} {...item} />} />
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
 }
})

export default Feed