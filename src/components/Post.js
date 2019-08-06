import React, { Component } from 'react'
import { StyleSheet, View, Image, Dimensions } from 'react-native'

import Author from './Author'
import Comments from './Comments'
import AddComment from './AddComment'

class Post extends Component {

 render() {
  return (
   <View style={styles.container}>
    <Author date={this.props.date} />
    <Image style={styles.image} source={this.props.image} />
    <Comments comments={this.props.comments}/>
    <AddComment />
   </View>
  )
 }

}

const styles = StyleSheet.create({
 container: {
  flex: 1
 },
 image: {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').width,
  resizeMode: 'contain'
 }
})

export default Post