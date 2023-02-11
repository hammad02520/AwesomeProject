import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Drawer from './src/Drawer';
import Setting from './src/screens/Setting';
import Chat from './src/screens/Chat';
import Explore from './src/screens/Explore';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen  name="Signup" component={Signup} />
      <Stack.Screen  name="Login" component={Login} />
      <Stack.Screen  name="Drawer" component={Drawer} />
      <Stack.Screen  name="Home" component={HomeScreen} />
        <Stack.Screen  name="Chat" component={Chat} />
        <Stack.Screen  name="Explore" component={Explore} />
        <Stack.Screen  name="Setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;