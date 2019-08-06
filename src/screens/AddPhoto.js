import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Dimensions, Platform, ScrollView, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ImagePicker from 'react-native-image-picker'

class AddPhoto extends Component {

 state = {
  image: null,
  tags: ''
 }

 pickImage = () => {
  ImagePicker.showImagePicker({
   title: 'Escolha uma foto'
  }, response => {
   if (!response.didCancel) {
    this.setState({ image: { uri: response.uri, base64: response.data}})
   }
  })
 }

 save = async () => {
  Alert.alert('Foto adicionada ao seu catalogo!', this.state.tags)
  this.setState({image: null, tags: ''})
 }

 render() {
  return (
   <View style={styles.container}>
    <ScrollView>
     <View style={styles.container}>
      <TouchableOpacity onPress={this.pickImage}>
       <View style={styles.imageContainer}>
        {!this.state.image && <View style={styles.iconContainer}><Icon color='#CCC' size={48} name='camera' /><Text style={{color: '#AAA'}}>Toque para adicionar uma foto</Text></View>}
        <Image source={this.state.image} style={styles.image} />
       </View>
       </TouchableOpacity>
      <TextInput 
       placeholder='Toque para adicionar tags. Ex.: #work #casual #jeans' 
       style={styles.input} 
       value={this.state.tags} 
       onChangeText={tags => this.setState( { tags: tags } )} />
       <TouchableOpacity onPress={this.save} style={styles.button}>
       <Text style={styles.buttonText}>Confirmar</Text>
       </TouchableOpacity>
      </View>
    </ScrollView>
   </View>
  )
 }

}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: 'center',
  backgroundColor: '#DDDDDD'
 },
 imageContainer: {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').width,
  backgroundColor: '#EEE'
 },
 iconContainer: {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').width,
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center'
 },
 image: {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').width,
  resizeMode: 'contain'
 },
 button: {
  marginTop: 20,
  marginLeft: 4,
  marginRight: 4,
  marginBottom: 8,
  height: 46,
  borderRadius: 23,
  backgroundColor: '#ECBFB0',
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: 16,
  paddingRight: 16
 },
 buttonText: {
  fontSize: 16,
  textAlign: 'center',
  color: '#FFF'
 },
 input: {
  marginTop: 10,
  width: '90%'
 }
})

export default AddPhoto