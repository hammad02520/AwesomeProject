import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import Background from '../Background';
import { darkGreen } from '../Constant';
import Field from '../Fields';
import MyButton from "./Button";


const Login = (props) =>{
    return(
        <Background>
            <View style={{alignItems:"center",width:410}}>
            <Text style={{color:'white', fontSize:60, fontWeight:"bold",marginVertical:10}}>Login</Text>
            <View style={{width:'101%',height:700,backgroundColor:'white',borderTopLeftRadius:130,paddingTop:70,alignItems:'center'}}>
                 <Text style={{fontSize: 25, color:darkGreen,fontWeight:'bold'}}>
                    Welcome Background
                 </Text>
                 <Text style={{color: 'grey' , fontSize:19, fontWeight: 'bold',marginBottom:20}}>Login to your account</Text>
                 <Field placeholder = 'Email' />
                 <Field placeholder = 'Password' secureTextEntry={true} />
                 <View style={{width:'80%',alignItems:'flex-end',paddingRight:16,marginBottom:80}}>
                 <Text style={{color:darkGreen,fontSize:16,fontWeight:'bold'}}>Forget Password?</Text>
                </View>
               <MyButton textColor='white' bgcolor={darkGreen} btnlabel="Login" />
               <View style={{display:'flex',flexDirection: 'row'}}>
                <Text>Don't have an account ? </Text>
                <TouchableOpacity onPress={()=> props.navigation.navigate("Signup")}>
                <Text style={{color:darkGreen,fontWeight:"bold"}}>Signup</Text>
                </TouchableOpacity>
               </View>
            </View>
        </View>
        </Background>
    )
}


export default Login;