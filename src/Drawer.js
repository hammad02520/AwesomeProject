import React, { useRef, useState } from "react";
import { Animated, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { green } from "./Constant";
import { useNavigation } from '@react-navigation/native';
import Login from "./screens/Login";
import Chat from "./screens/Chat";
import HomeScreen from "./screens/Home";
import Explore from "./screens/Explore";


const menu = [
    { icon: require("./assets/home.png"), titel: 'Home' },
    { icon: require("./assets/explore.jpg"), titel: 'Explore' },
    { icon: require("./assets/chat.png"), titel: 'Chat' },
    { icon: require("./assets/setting.png"), titel: 'Setting' },

]
const Drawer = () => {
    const [showMenu, setShowMenu] = useState(false)
    const moveToRight = useRef(new Animated.Value(1)).current;
    const scale = useRef(new Animated.Value(1)).current;
    const [selectedMenu, setSelectdMenu] = useState(0)
    const navigation = useNavigation();
    const [explore,setExplore] = useState(false)
    const [chat,setChat] = useState(false)
    const [setting,setSetting] = useState(false)
    const [home,setHome] = useState(false)
    // const Abc = ( ) =>{
    //     setHome(true)
    // }
    // const DD = ( ) =>{
    //     setExplore(true)
    // }
    // const CC = ( ) =>{
    //     setChat(true)
    // }
    return (
        < View style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: green, }} >
                <View style={{ width: '100%', flexDirection: 'row', marginLeft: 15, }}>
                    <Image style={{ width: 50, height: 50, borderRadius: 25, marginTop: 30 }} source={require("./assets/profile.jpeg")} />
                    <View style={{ marginTop: 38, marginLeft: 10, }} ><Text style={{ fontSize: 16, fontWeight: 'bold', color: "white" }}>Hammad Ahmed</Text></View>
                </View>
                <View style={{ marginTop: 30 }}>
                    <FlatList data={menu}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={{
                                    flexDirection: "row",
                                    width: 190,
                                    height: 50,
                                    marginLeft: 20,
                                    marginTop: 20,
                                    backgroundColor: selectedMenu === index ? 'white' : green,
                                    alignItems: 'center',
                                    borderRadius: 10
                                }}
                                    onPress={() => {
                                        setSelectdMenu(index)
                                        // navigation.navigate(item.titel.toString())
                                        {item.titel.toString() === "Home"? setHome(true)&& setChat(false) &&setExplore(false):setHome(false)}
                                        {item.titel.toString() === "Explore" ? setExplore(true)&&setChat(false) &&setHome(false):setExplore(false) }
                                        // {item.titel.toString() === "Explore" ?  setExplore(true) :explore(false)}
                                        // {item.titel.toString() === "Home" ?  setHome(true) :setHome(false)}
                                        // {item.titel.toString() === "Home" ?  setHome(true) :setHome(false)}
                                    }}
                                >
                                    <Image source={item.icon} style={{ width: 22, height: 22, marginLeft: 10, tintColor: selectedMenu == index ? 'black' : 'white' }} />
                                    <Text style={{ fontSize: 16, marginLeft: 15, color: selectedMenu === index ? 'black' : 'white' }}>{item.titel}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
                <TouchableOpacity style={{marginLeft:29,marginTop:200,flexDirection:"row",alignItems:"center"}}>
                    <Image style={{ width:27,height:27,tintColor:'white'}} source={require("./assets/signout.png")} />
                    <Text style={{marginLeft:15,color:"white",fontSize:16}}>Signout</Text>
                </TouchableOpacity>
            </View>
            <Animated.View style={{
                flex: 1,
                backgroundColor: 'white',
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                borderRadius: showMenu ? 20 : 0,
                transform: [{ scale: scale }, { translateX: moveToRight }]
            }}> 
                <View style={{ flexDirection: 'row', marginTop: 40,marginBottom:20 }}>
                    <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => {
                        Animated.timing(scale, {
                            toValue: showMenu ? 1 : 0.7,
                            duration: 300,
                            useNativeDriver: true,
                        }).start();
                        Animated.timing(moveToRight, {
                            toValue: showMenu ? 0 : 230,
                            duration: 300,
                            useNativeDriver: true,
                        }).start();
                        setShowMenu(!showMenu)
                    }}>
                        <Image style={{ height: 24, width: 24 }} source={require('./assets/menu.png')} />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 20, fontSize: 16, fontWeight: "bold" }}>{menu[selectedMenu].titel}</Text>
            
                </View>
               
                    <View>
                    {home ?  <HomeScreen />  :<Login />}
                    {explore ?  <Explore />  :<Login />}
                   
                    </View>
                
            </Animated.View >
        </View>
    )
}

export default Drawer;