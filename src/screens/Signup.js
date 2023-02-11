import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Background from '../Background';
import { darkGreen } from '../Constant';
import Field from '../Fields';
import MyButton from "./Button";


const Signup = (props, navigation) => {
    return (
        <Background>
            <View style={{ alignItems: "center", width: 410 }}>
                <Text style={{
                    color: 'white',
                    fontSize: 60,
                    fontWeight: "bold",
                    marginVertical: 10
                }}>Signup</Text>
                <View style={{
                    width: '101%',
                    height: 700,
                    backgroundColor: 'white',
                    borderTopLeftRadius: 130,
                    paddingTop: 100,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 16,
                        color: darkGreen,
                        marginBottom: 10,
                        fontWeight: 'bold'
                    }}>Create a new account</Text>
                    <Field placeholder='Username' />
                    <Field placeholder='Contact Number' />
                    <Field placeholder='Email' />
                    <Field placeholder='Password' secureTextEntry={true} />
                    {/* <MyButton onPress={( )=>
                        Press.navigation.navigate("Signup")
                    } textColor='white' bgcolor={darkGreen} btnlabel="Signup" /> */}

         <TouchableOpacity
                 style={{
                    backgroundColor: darkGreen,
                    borderRadius:100, 
                    width:330,
                    alignItems:"center",
                    paddingVertical: 10,
                    marginHorizontal: 30,
                    marginVertical:10
                    }}
               onPress={()=> props.navigation.navigate("Drawer")}>
                <Text style={{color:"white",fontWeight:"bold"}}>Signup</Text>
                </TouchableOpacity>

                    <View style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <Text>Already have an account ? </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                            <Text style={{
                                color: darkGreen,
                                fontWeight: "bold"
                            }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Background>
    )
}


export default Signup;