import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const MyButton = ({bgcolor,btnlabel,textColor,Press}) =>{
    return(
  <TouchableOpacity 
  onPress={Press}
  style={{
    backgroundColor:bgcolor,
    borderRadius:100, 
    width:350,
    alignItems:"center",
    paddingVertical: 5,
    marginHorizontal: 30,
    marginVertical:10
    }}>
    <Text style={{fontSize:25,color: textColor, fontWeight:"bold" }}>{btnlabel}</Text>
  </TouchableOpacity>
    )
}
export default MyButton;

