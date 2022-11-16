import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import RootStack from "./screens/RootStack";
import logContext from "./contexts/LogContext";

function App() {
  return <NavigationContainer>
    <logContext.Provider value = "안녕하세요">
    <RootStack />
    </logContext.Provider>
  </NavigationContainer>;
}

export default App;