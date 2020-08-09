import React from 'react';
import { Text, View, FlatList, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView,Image,Alert} from 'react-native';
import db from '../Config';
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component
{

constructor()
{
    super();
    this.state = {
      emailId:'',
      password:''
    }
}

login = async (email,password) => 
{

    if(email && password)
    {
      try{
          const response = await firebase.auth().signInWithEmailAndPassword(email,password);
          console.log(error.code);
          if(response)
          {
            this.props.navigation.navigate("BookTransaction");
          }
          
      }
      catch(error)
      {
          switch(error.code)
          {
              case 'auth/user-not-found':
                  
                      Alert.alert("This user does not exist!!");
                      break;
                  

                  case 'auth/wrong-password':
                      Alert.alert("Incorrect password!!");
                      break;
          }
      }
    }
} 

    render()
    {
        return(
            <KeyboardAvoidingView style = {{alignItems:'center',marginTop:20}}>
              <View>
                  <Image
                   source = {require("../booklogo.jpg")}
                   style = {{width:200,height:200}}
                  />

                  <Text style = {{textAlign:'center',fontSize:30}}>Willy</Text>
              </View>
              <View>
                  <TextInput style = {styles.loginBox}
                   placeholder = "abc@example.com"
                   keyboardType = 'email-address'
                   onChangeText = {(text) => {
                       this.setState({
                           emailId:text
                       })
                   }}
                 />

<TextInput style = {styles.loginBox}
                   placeholder = "enter password"
                   secureTextEntry = {true}
                   onChangeText = {(text) => {
                       this.setState({
                           password:text
                       })
                   }}
                 />
              </View>

              <View>
                  <TouchableOpacity
                    style = {{height:30,width:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7}}
                    onPress = {() =>{
                        this.login(this.state.emailId,this.state.password);
                    }}
                  >
                      <Text style = {{textAlign:'center'}}>LOGIN</Text>
                  </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    loginBox:
    {
        width:300,
        height:40,
        borderWidth:1.5,
        fontSize:20,
        margin:10,
        paddingLeft:10
    }
})

