import React from "react";
import {View,Text, StyleSheet} from 'react-native'
import Background from "../Background";
import MyButton from "./Button";
import About from './About';
import { darkGreen, green } from "../Constant";
const HomeScreen = (props)=> {
    return (
      <Background>
       <Text style={style.text}>Lets Start</Text>
        <MyButton btnlabel="Login"bgcolor={green} textColor="white" Press={()=> props.navigation.navigate('Login')} />
        <MyButton btnlabel="Signup"bgcolor='white' textColor={green} Press={()=> props.navigation.navigate('Signup')} />
      </Background>
    );
  }
  export default HomeScreen;


  const style = StyleSheet.create({
    text:{
        fontSize:50,
        color: 'white',
        marginHorizontal: 40,
        marginVertical:100,
        
    }
  })