import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import DetailScreen from './screen/DetailScreen';

const Stack = createNativeStackNavigator();

function App() {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName = "Home">
      <Stack.Screen name = "Home" component = {HomeScreen} options = {{title : '홈',
    // Header 블록에 대한 스타일
    headerStyle : {
      backgroundColor : '#29b6f6',
    },
    
    // Header의 텍스트, 버튼들 색상
    headerTintColor : "#ffffff",
    
    // 타이틀 텍스트의 스타일
    headerTitleStyle : {
      fontWeight : 'bold',
      fontSize : 20,
    }, }}/>
      <Stack.Screen name = "Detail" component = {DetailScreen} />
    </Stack.Navigator>
    </NavigationContainer>
}

export default App;