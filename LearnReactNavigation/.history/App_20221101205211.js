import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import DetailScreen from './screen/DetailScreen';

const Stack = createNativeStackNavigator();

function App() {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName = "Home">
      <Stack.Screen name = "Home" component = {HomeScreen} options = {{title : '홈'}}/>
      <Stack.Screen name = "Detail" component = {DetailScreen}
      options = {({route}) => ({
        title : `상세 정보 - ${route.params.id}`,
      })} />
    </Stack.Navigator>
    </NavigationContainer>
}

export default App;