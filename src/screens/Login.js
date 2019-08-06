import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

class Login extends Component {

 state = {
  email: '',
  password: ''
 }

 login = () => {
  this.props.navigation.navigate('Home')
 }

 render() {
  return (
   <View style={styles.container}>
    <TextInput 
     placeholder='E-mail' 
     style={styles.input} 
     autoFocus={true} 
     keyboardType='email-address' 
     value={this.state.email} 
     onChangeText={email => this.setState({ email: email })} />
    <TextInput 
     placeholder='Senha' 
     style={styles.input} 
     secureTextEntry={true} 
     value={this.state.pasword} 
     onChangeText={password => this.setState({ password: password })} />
     <TouchableOpacity onPress={this.login} style={styles.button}>
      <Text style={styles.buttonText}>Entrar</Text>
     </TouchableOpacity>
   </View>
  )
 }

}

const styles = {
 container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#DDDDDD'
 },
 button: {
  marginTop: 30,
  padding: 10,
  backgroundColor: '#ECBFB0'
 },
 buttonText: {
  fontSize: 20,
  color: '#FFF'
 },
 input: {
  width: '90%',
  marginTop: 20,
  backgroundColor: '#EEE',
  height: 40,
  borderWidth: 1,
  borderColor: '#333'
 }
}

export default Login